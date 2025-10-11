import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to MyApp</h2>
        <p className="text-gray-700 mb-8">
          This is a simple application built with Next.js and Tailwind CSS.
        </p>
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </main>
    </div>
  );
}
