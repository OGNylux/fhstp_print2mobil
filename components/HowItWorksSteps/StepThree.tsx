interface WaveProps {
    fillColor?: string;
    strokeColor?: string;
}

export default function StepThree({ fillColor = "fill-lime-500", strokeColor = "stroke-white" }: WaveProps) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" className={`${fillColor}`} />
            <path d="M46.625 58.875H52.875C54.5326 58.875 56.1223 58.2165 57.2944 57.0444C58.4665 55.8723 59.125 54.2826 59.125 52.625C59.125 50.9674 58.4665 49.3777 57.2944 48.2056C56.1223 47.0335 54.5326 46.375 52.875 46.375H43.5C41.625 46.375 40.0625 47 39.125 48.25L21.625 65.125" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.125 77.625L39.125 73.25C40.0625 72 41.625 71.375 43.5 71.375H56C59.4375 71.375 62.5625 70.125 64.75 67.625L79.125 53.875C80.3309 52.7354 81.0347 51.1634 81.0816 49.5049C81.1285 47.8464 80.5146 46.2372 79.375 45.0312C78.2354 43.8253 76.6634 43.1215 75.0049 43.0746C73.3464 43.0278 71.7372 43.6416 70.5312 44.7812L57.4062 56.9687" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 62L37.25 80.75" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M62.25 49.1875C67.2551 49.1875 71.3125 45.1301 71.3125 40.125C71.3125 35.1199 67.2551 31.0625 62.25 31.0625C57.2449 31.0625 53.1875 35.1199 53.1875 40.125C53.1875 45.1301 57.2449 49.1875 62.25 49.1875Z" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31 37C36.1777 37 40.375 32.8027 40.375 27.625C40.375 22.4473 36.1777 18.25 31 18.25C25.8223 18.25 21.625 22.4473 21.625 27.625C21.625 32.8027 25.8223 37 31 37Z" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}