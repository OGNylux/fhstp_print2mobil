import Image from 'next/image'
import Link from 'next/link'
import { getProjectById } from '@/lib/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = { params: { id: string } }

export default async function ProjectPage({ params }: Props) {
  const id = Number((await params).id)
  const project = getProjectById(id)
  if (!project) return notFound()

  return (
    <div className="min-h-screen bg-pattern-large p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 border-2 border-lime-500">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <div className="relative w-full h-64 md:h-96 mb-4 rounded overflow-hidden">
          <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
        </div>
        <p className="text-base md:text-lg leading-relaxed mb-4">{project.longDescription ?? project.description}</p>
        <p className="text-sm text-gray-600 mb-6">Project ID: {project.id}</p>
        <Link href="/#projects" className="inline-block bg-lime-500 text-white px-4 py-2 rounded-md">Back to projects</Link>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number((await params).id)
  const project = getProjectById(id)
  if (!project) return { title: 'Project' }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.imageUrl ? [{ url: project.imageUrl }] : undefined,
    },
  }
}
