import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="main"
            className="bg-center bg-cover bg-no-repeat w-full min-h-screen flex flex-col justify-end overflow-x-hidden"
            style={{ backgroundImage: "url('/main_background.jpg')" }}
        >
            {/* overlay to improve text contrast */}
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 pointer-events-none">
                <div className="pointer-events-auto">
                    <h1 className="text-2xl md:text-4xl mb-4 text-white font-bold select-none">Let&apos;s plant trees!</h1>
                    <p className="text-white/90 max-w-2xl font-bold select-none">We grow together.</p>
                </div>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 overflow-hidden h-[18vh] md:h-[24vh] lg:h-[32vh]">
                <Image
                    src="/top_wave.svg"
                    alt="Decorative wave"
                    width={1920}
                    height={240}
                    aria-hidden={true}
                    className="block w-full h-full object-cover object-bottom"
                />
            </div>
            <a href="#about" aria-label="Scroll down" className="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 text-black pointer-events-auto">
                <ChevronDown className="animate-bounce cursor-pointer w-8 h-8" />
            </a>
        </section>
    );
}