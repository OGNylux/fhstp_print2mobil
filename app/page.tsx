import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="">
        <Navbar />
        <Hero />
        <section id="about" className="min-h-screen pt-16 flex flex-col items-center justify-center py-20 px-4">
          
          <div className="w-">
            <p className="">
            </p>
          </div>
          <Image src="/people.jpg" width={500} height={300} alt="team" className="h-[auto] w-full rounded-md" />
          <Image src="/people.jpg" width={500} height={300} alt="entwicklung" className="h-[auto] w-full rounded-md" />
          <div>
            <p className="">
            </p>
          </div>
        </section>

        <section id="how-it-works" className="min-h-screen pt-16 flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-2xl font-bold mb-4">How it works</h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-center">Explanation of how the app works.</p>
        </section>

        <section id="projects" className="min-h-screen pt-16 flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-center">Some of our featured projects.</p>
        </section>

        <section id="contact" className="min-h-screen pt-16 flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-center">Get in touch with us.</p>
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </section>
      </main>
    </div>
  );
}
