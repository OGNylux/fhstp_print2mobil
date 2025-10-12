import Image from "next/image";

export default function Footer() {
    return (
        <footer className="grid place-items-center sm:grid-cols-3 gap-6 sm:gap-4 w-full py-6 px-4 sm:px-6 mt-10 bg-stone-100 text-black text-center rounded-t-3xl footer-shadow">
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-16 sm:w-20 md:w-24 h-auto"/>
            <p className="font-bold text-xl sm:text-2xl">TreeFund</p>
        </div>
		<div className="flex flex-col lg:flex-row gap-8 sm:gap-10 sm:justify-self-end w-full sm:w-auto">
			<div className="flex flex-col items-center sm:items-start space-y-2">
				<h3 className="mb-3 sm:mb-5 text-black font-semibold text-base sm:text-lg">Links</h3>
                <a href="#how-it-works" className="text-neutral-600 hover:text-neutral-800 transition-colors py-1 text-sm sm:text-base">How it works</a>
			</div>
            <div className="flex flex-col items-center sm:items-start space-y-2">
				<h3 className="mb-3 sm:mb-5 text-black font-semibold text-base sm:text-lg">Donate</h3>
                <a href="#how-it-works" className="text-neutral-600 hover:text-neutral-800 transition-colors py-1 text-sm sm:text-base">How it works</a>
                <a href="#projects" className="text-neutral-600 hover:text-neutral-800 transition-colors py-1 text-sm sm:text-base">Our Projects</a>
			</div>
			<div className="flex flex-col items-center sm:items-start space-y-2">
				<h3 className="mb-3 sm:mb-5 text-black font-semibold text-base sm:text-lg">Weiteres</h3>
				<a href="https://github.com/OGNylux/fhstp_print2mobil" className="text-neutral-600 hover:text-neutral-800 transition-colors py-1 text-sm sm:text-base">Github</a>
				<a href="#" className="text-neutral-600 hover:text-neutral-800 transition-colors py-1 text-sm sm:text-base" aria-disabled="true">Imprint</a>
				<a href="#" className="text-neutral-600 hover:text-neutral-800 transition-colors py-1 text-sm sm:text-base" aria-disabled="true">Terms of Use</a>
			</div>
		</div>
        </footer>
    );
}