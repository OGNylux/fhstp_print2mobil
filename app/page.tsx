import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="">
        <Navbar />
        <Hero />
        <section id="about" className="min-h-screen pt-12 flex flex-col items-center justify-center py-12 px-4 bg-stone-100">
          <h1 className="text-2xl md:text-4xl text-black font-bold pb-6 md:pb-10">About Us</h1>
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-2 p-4 md:p-6 rounded-lg bg-white border-lime-500 text-black">
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
            </p>
            <Image src="/people.jpg" width={800} height={450} alt="team" className="w-full rounded-md object-cover aspect-[16/9]" />
            <Image src="/people.jpg" width={800} height={450} alt="entwicklung" className="w-full rounded-md object-cover aspect-[16/9]" />
            <p className="text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
