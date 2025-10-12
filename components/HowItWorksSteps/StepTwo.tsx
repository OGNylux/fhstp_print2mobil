interface WaveProps {
    fillColor?: string;
    strokeColor?: string;
}

export default function StepTwo({ fillColor = "fill-lime-500", strokeColor = "stroke-white" }: WaveProps) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" className={`${fillColor}`} />
            <path d="M49.5 80.75C66.7589 80.75 80.75 66.7589 80.75 49.5C80.75 32.2411 66.7589 18.25 49.5 18.25C32.2411 18.25 18.25 32.2411 18.25 49.5C18.25 66.7589 32.2411 80.75 49.5 80.75Z" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M49.5 62V49.5" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M49.5 37H49.5313" className={`${strokeColor} ${fillColor}`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
}