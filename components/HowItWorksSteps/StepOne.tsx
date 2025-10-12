interface WaveProps {
    fillColor?: string;
    strokeColor?: string;
}

export default function StepOne({ fillColor = "fill-lime-500", strokeColor = "stroke-white" }: WaveProps) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" className={`${fillColor}`} />
            <path d="M82.75 65.125C82.75 66.7826 82.0915 68.3723 80.9194 69.5444C79.7473 70.7165 78.1576 71.375 76.5 71.375H26.5C24.8424 71.375 23.2527 70.7165 22.0806 69.5444C20.9085 68.3723 20.25 66.7826 20.25 65.125V41.6875C20.25 33.875 26.5 27.625 34.3125 27.625H70.25C77.125 27.625 82.75 33.25 82.75 40.125V65.125Z" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M60.875 40.125H70.25V46.375" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.3125 27.625C42.125 27.625 48.375 33.875 48.375 41.6875V65.125C48.375 66.7826 47.7165 68.3723 46.5444 69.5444C45.3723 70.7165 43.7826 71.375 42.125 71.375" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32.75 43.25H35.875" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}