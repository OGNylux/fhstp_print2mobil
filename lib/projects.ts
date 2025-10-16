export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  longDescription?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Raised beds invite people to join in gardening",
    description:
      "As part of the project \"Strengthening Neighborhoods - Living Community,\" the raised beds were built by and with students from the master's program in Social Work to give the employees of St. Pölten University of Applied Sciences, as well as local residents and neighborhood organizations, the opportunity to garden together.",
    imageUrl: "/project_1.jpg",
    longDescription:
      "This project brought together students and local residents to collaboratively build and maintain raised garden beds. The initiative aimed to foster community ties, provide access to gardening education, and create shared green spaces for relaxation and learning. Activities included workshops, planting days, and ongoing maintenance support.",
  },
  {
    id: 2,
    title: "Urban Green Spaces Initiative in St. Pölten",
    description:
      "Creating green oases in St. Pölten to improve air quality and provide natural spaces for city dwellers. Building sustainable communities one tree at a time.",
    imageUrl: "/project_2.jpg",
    longDescription:
      "We planted native trees and installed pollinator-friendly plantings across several urban sites to boost biodiversity and ecological resilience. The project included community planting events and educational signage about native species and urban ecology.",
  },
  {
    id: 3,
    title: "Free plants for everyone",
    description:
      "Providing free plants to community members to encourage greening efforts and enhance urban biodiversity.",
    imageUrl: "/project_3.jpg",
    longDescription:
      "A series of plant giveaway events where residents could pick up free seedlings and potted plants, along with care guides and advice. The goal was to lower the barrier to greening balconies, front yards, and community spaces.",
  },
  {
    id: 4,
    title: "School Garden Programs",
    description:
      "Educating children about environmental stewardship through hands-on tree planting and garden maintenance programs in schools.",
    imageUrl: "/project_4.jpg",
    longDescription:
      "Working with schools to create curriculum-linked gardens, students learn plant biology, ecology, and sustainable gardening practices. Projects include native planting beds, composting programs, and seasonal workshops.",
  },
]

export function getProjectById(id: number) {
  return projects.find((p) => p.id === id) ?? null
}
