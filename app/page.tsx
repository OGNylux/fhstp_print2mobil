import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="">
        <Navbar />
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Hero />
          <section id="about" className="w-full min-h-screen flex flex-col justify-end bg-stone-50 overflow-x-hidden">
            {/* content grows to push the wave to the bottom */}
            <div className="w-full flex flex-col items-center justify-center flex-grow pt-8 pb-20 z-10">
              <h2 className="text-2xl md:text-4xl text-black font-bold mb-6 md:mb-8">About Us</h2>
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
            </div>

            {/* decorative wave at the bottom */}
            <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 pointer-events-none overflow-hidden h-24 md:h-32 lg:h-48">
              <Image
                src="/middle_wave.svg"
                alt="Decorative wave"
                width={1920}
                height={240}
                aria-hidden={true}
                className="block w-full h-full object-cover object-bottom lg:object-contain lg:h-auto"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
