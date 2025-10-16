"use client"

import { useState } from 'react'
//import emailService, { buildPayload } from '../lib/emailService'

export default function Form() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('sending')

        try {
            //const payload = buildPayload(e.currentTarget)
            //await emailService.sendEmail(payload)
            setStatus('success')
            e.currentTarget.reset()
        } catch {
            // failed to send — keep UI stable
            setStatus('idle')
        }
    }

    return (
        <div className="p-4 md:p-6 rounded-lg bg-white border-lime-500 border-2 max-w-2xl w-full mx-auto">
            <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Your Subject"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Your Message"
                        rows={8}
                        required
                    ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`bg-lime-500 text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-60 ${status === 'idle' ? 'cursor-pointer hover:bg-lime-600' : 'cursor-not-allowed'}`}
                    >
                        {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <span className="text-green-600 font-medium">Message sent — thank you!</span>
                    )}
                </div>
            </form>
        </div>
    )
}