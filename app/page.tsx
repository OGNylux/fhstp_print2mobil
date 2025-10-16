import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";
import HowItWorksSteps from "@/components/HowItWorksSteps/HowItWorksSteps";
import Projects from "@/components/Projects";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-pattern-large">
      <main className="">
        <Navbar />
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Hero />
          <section id="about" className="w-full min-h-[60vh] flex flex-col justify-end bg-stone-50/90 overflow-x-hidden">
            {/* content grows to push the wave to the bottom */}
            <div className="w-full flex flex-col items-center justify-center flex-grow pt-6 pb-12">
              <h2 className="text-2xl md:text-4xl text-black font-bold mb-4 md:mb-6">About Us</h2>
              <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-2 p-4 md:p-6 rounded-lg bg-white border-lime-500 text-black">
                <p className="text-sm md:text-base leading-relaxed">
                  TreeFund is a community-driven initiative that helps plant and maintain trees in urban and rural areas. Our mission is to increase canopy cover, support biodiversity, and strengthen communities by funding local planting projects, supporting volunteer groups, and making tree care resources widely available. We work closely with urban foresters, schools, and neighbourhood volunteers to match the right species to each site and ensure long-term survival.
                </p>
                <Image src="/people.jpg" width={800} height={450} alt="team" className="w-full rounded-md object-cover aspect-[16/9]" />
                <Image src="/people.jpg" width={800} height={450} alt="entwicklung" className="w-full rounded-md object-cover aspect-[16/9]" />
                <p className="text-sm md:text-base leading-relaxed">
                  We fund and support local planting campaigns, provide easy-to-follow planting and maintenance guides, and offer a simple way for donors and volunteers to track impact. Through partnerships with schools, parks departments and neighbourhood groups, TreeFund makes it easy to sponsor a planting, volunteer for a planting day, or learn how to care for newly planted trees. You can support a local project by donating, signing up to volunteer, or requesting a planting guide for your community.
                </p>
              </div>
            </div>
          </section>
            <Wave />
          <section id="how-it-works" className="w-full min-h-[60vh] flex flex-col justify-end bg-stone-100/90 overflow-x-hidden">
            <div className="w-full flex flex-col items-center justify-center flex-grow pt-6 pb-12">
              <h2 className="text-2xl md:text-4xl text-black font-bold mb-4 md:mb-6">How it works</h2>
              <HowItWorksSteps />
            </div>
          </section>
          <section id="projects" className="w-full min-h-[60vh] flex flex-col justify-center bg-stone-100/90 overflow-x-hidden">
            <div className="w-full flex flex-col items-center justify-center flex-grow pt-6 pb-12">
              <h2 className="text-2xl md:text-4xl text-black font-bold mb-4 md:mb-6">Our Projects</h2>
              <Projects />
            </div>
          </section>
          <section>
            <Wave background="fill-stone-100/90" waveColor="fill-stone-50/90" />
          </section>
          <section id="contact" className="w-full min-h-[60vh] flex flex-col justify-center bg-stone-50/90 overflow-x-hidden">
            <div className="w-full flex flex-col items-center justify-center flex-grow pt-6 pb-12">
              <h2 className="text-2xl md:text-4xl text-black font-bold mb-4 md:mb-6">Contact Us</h2>
              <Form />
            </div>
          </section>
        </div>
        <div className="w-full flex flex-col justify-end bg-stone-50/90">
          <Footer />
        </div>
      </main>
    </div>
  );
}
