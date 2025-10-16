/**
 * Frontend email service
 * - Validates and prepares payloads
 * - Sends to a configurable backend endpoint (NEXT_PUBLIC_EMAIL_ENDPOINT or /api/send-email)
 * - Supports timeout and simple retry with exponential backoff
 */

export type EmailPayload = {
  name: string
  email: string
  subject: string
  message: string
}

export type SendOptions = {
  endpoint?: string
  timeoutMs?: number
  retries?: number
}

const DEFAULT_ENDPOINT = process.env.NEXT_PUBLIC_EMAIL_ENDPOINT || '/api/send-email'
const DEFAULT_TIMEOUT = 8000
const DEFAULT_RETRIES = 2

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0
}

export function validateEmailPayload(payload: Partial<EmailPayload>) {
  const errors: string[] = []

  if (!payload) {
    errors.push('No payload provided')
    return { valid: false, errors }
  }

  if (!isNonEmptyString(payload.name)) errors.push('Name is required')
  if (!isNonEmptyString(payload.email)) errors.push('Email is required')
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) errors.push('Email is invalid')
  if (!isNonEmptyString(payload.subject)) errors.push('Subject is required')
  if (!isNonEmptyString(payload.message)) errors.push('Message is required')

  return { valid: errors.length === 0, errors }
}

function timeoutFetch(resource: string, init: RequestInit = {}, timeoutMs = DEFAULT_TIMEOUT) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeoutMs)

  const merged = { ...init, signal: controller.signal }

  return fetch(resource, merged).finally(() => clearTimeout(id))
}

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

/**
 * Send email payload to backend endpoint.
 * Throws on validation error or when backend returns non-2xx.
 */
export async function sendEmail(payload: Partial<EmailPayload>, options?: SendOptions) {
  const endpoint = options?.endpoint ?? DEFAULT_ENDPOINT
  const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT
  const retries = typeof options?.retries === 'number' ? options.retries : DEFAULT_RETRIES

  const { valid, errors } = validateEmailPayload(payload)
  if (!valid) {
    const err = new Error('Validation failed: ' + errors.join('; '))
    // attach details for caller
    ;(err as any).validation = errors
    throw err
  }

  const body = JSON.stringify({
    name: payload.name!.trim(),
    email: payload.email!.trim(),
    subject: payload.subject!.trim(),
    message: payload.message!.trim(),
  })

  let attempt = 0
  let lastError: unknown

  while (attempt <= retries) {
    try {
      const res = await timeoutFetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        credentials: 'same-origin',
      }, timeoutMs)

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        const error = new Error(`Request failed with status ${res.status}: ${text}`)
        ;(error as any).status = res.status
        throw error
      }

      // try parse json, but be resilient
      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        return await res.json()
      }

      return { success: true }
    } catch (e) {
      lastError = e
      attempt += 1
      if (attempt > retries) break
      // exponential backoff with jitter
      const backoff = Math.min(1000 * 2 ** attempt, 8000)
      const jitter = Math.random() * 300
      await wait(backoff + jitter)
    }
  }

  throw lastError
}

/**
 * Build payload from common sources:
 * - HTMLFormElement
 * - FormData
 * - plain object
 */
export function buildPayload(input: HTMLFormElement | FormData | Record<string, unknown>) {
  if (input instanceof HTMLFormElement) {
    const fd = new FormData(input)
    return buildPayload(fd)
  }

  if (input instanceof FormData) {
    return {
      name: String(input.get('name') ?? '').trim(),
      email: String(input.get('email') ?? '').trim(),
      subject: String(input.get('subject') ?? '').trim(),
      message: String(input.get('message') ?? '').trim(),
    }
  }

  // plain object
  return {
    name: String((input as any).name ?? '').trim(),
    email: String((input as any).email ?? '').trim(),
    subject: String((input as any).subject ?? '').trim(),
    message: String((input as any).message ?? '').trim(),
  }
}

export default {
  sendEmail,
  validateEmailPayload,
  buildPayload,
}
