import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="main"
            className="w-screen min-h-screen bg-center bg-cover bg-no-repeat relative flex items-center justify-center"
            style={{ backgroundImage: "url('/main_background.jpg')" }}
        >
            {/* overlay to improve text contrast */}
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div className="relative z-10 text-center px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">test</h2>
                <p className="text-white/90 max-w-2xl">test</p>
            </div>
            <a href="#about" aria-label="Scroll down" className="z-10 absolute bottom-6 md:bottom-14 flex justify-center w-full text-black">
                <ChevronDown className="animate-bounce cursor-pointer w-8 h-8" />
            </a>
            <div className="w-full absolute bottom-0">
                <div className="relative w-full h-[16vh] md:h-[20vh] lg:h-[30vh]">
                    <Image
                        src="/top_wave.svg"
                        alt="Decorative wave"
                        fill
                        sizes="100vw"
                        className="object-cover object-bottom w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}