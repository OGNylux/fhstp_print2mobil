"use client"

import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel"

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Amazon Rainforest Restoration",
    description: "Helping to restore the lungs of our planet by planting native species in deforested areas of the Amazon rainforest. Every tree planted helps combat climate change and preserves biodiversity.",
    imageUrl: "/people.jpg",
  },
  {
    id: 2,
    title: "Urban Green Spaces Initiative",
    description: "Creating green oases in urban environments to improve air quality and provide natural spaces for city dwellers. Building sustainable communities one tree at a time.",
    imageUrl: "/people.jpg",
  },
  {
    id: 3,
    title: "Coastal Mangrove Protection",
    description: "Protecting and expanding mangrove forests along coastlines to prevent erosion, provide wildlife habitats, and create natural barriers against storms and flooding.",
    imageUrl: "/people.jpg",
  },
  {
    id: 4,
    title: "School Garden Programs",
    description: "Educating the next generation about environmental stewardship through hands-on tree planting and garden maintenance programs in schools worldwide.",
    imageUrl: "/people.jpg",
  }
];

export default function Projects() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="-ml-0">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-0 basis-full">
              <div className="h-full px-2">
                <Card className="border-2 border-lime-500 h-full">
                  <CardContent className="flex flex-col items-center p-4 md:p-6 h-full">
                    <h3 className="text-lg md:text-2xl font-semibold text-center mb-3 md:mb-4">
                      {project.title}
                    </h3>
                    <div className="relative h-48 md:h-64 w-full mb-3 md:mb-4 flex-shrink-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-sm md:text-base text-center leading-relaxed flex-grow flex items-center">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      {/* Functional dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? 'bg-lime-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
