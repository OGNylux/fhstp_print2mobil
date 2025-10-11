import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="pt-8">
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-center">
            This is a simple application built with Next.js and Tailwind CSS.
          </p>
        </section>

        <section id="how-it-works" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-2xl font-bold mb-4">How it works</h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-center">Explanation of how the app works.</p>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-700 mb-8 max-w-2xl text-center">Some of our featured projects.</p>
        </section>

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
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
