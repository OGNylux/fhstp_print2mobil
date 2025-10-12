"use client";

import { useState } from "react";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

interface WaveProps {
    fillColor?: string;
    strokeColor?: string;
}

const stepData = [
    {
        id: 1,
        title: "Contact Us",
        text: "Reach out to us through our contact form or give us a call. We'll discuss your tree planting goals and how many trees you'd like to sponsor for our reforestation efforts."
    },
    {
        id: 2,
        title: "Get more Info",
        text: "We'll provide you with detailed information about our current planting projects, locations, tree species, and the environmental impact your contribution will make."
    },
    {
        id: 3,
        title: "Donate",
        text: "Make your donation through our secure payment system. Every contribution goes directly towards purchasing seedlings, preparing planting sites, and supporting our tree planting teams."
    },
    {
        id: 4,
        title: "We plant a tree",
        text: "Our expert team plants your sponsored trees in carefully selected locations. You'll receive updates and photos showing the progress of your trees as they grow and contribute to environmental restoration."
    }
];

export default function HowItWorksSteps({ fillColor = "fill-lime-500", strokeColor = "stroke-white" }: WaveProps) {
    const [activeStep, setActiveStep] = useState(1);

    const currentStepData = stepData.find(step => step.id === activeStep) || stepData[0];
    return (
        <div className="p-4 md:p-6 rounded-lg bg-white border-lime-500 border-2 max-w-2xl w-full mx-auto">
            {/* Mobile: Grid layout, Desktop: Row layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
                <button 
                    onClick={() => setActiveStep(1)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-lime-50 ${activeStep === 1 ? 'bg-lime-100 ring-2 ring-lime-500' : ''}`}
                >
                    <div className="h-12 w-12 md:h-16 md:w-16 mb-2">
                        <StepOne fillColor={activeStep === 1 ? "fill-lime-600" : fillColor} strokeColor={strokeColor} />
                    </div>
                    <p className="text-center text-xs md:text-sm text-black leading-tight">Contact Us</p>
                </button>
                <button 
                    onClick={() => setActiveStep(2)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-lime-50 ${activeStep === 2 ? 'bg-lime-100 ring-2 ring-lime-500' : ''}`}
                >
                    <div className="h-12 w-12 md:h-16 md:w-16 mb-2">
                        <StepTwo fillColor={activeStep === 2 ? "fill-lime-600" : fillColor} strokeColor={strokeColor} />
                    </div>
                    <p className="text-center text-xs md:text-sm text-black leading-tight">Get more Info</p>
                </button>
                <button 
                    onClick={() => setActiveStep(3)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-lime-50 ${activeStep === 3 ? 'bg-lime-100 ring-2 ring-lime-500' : ''}`}
                >
                    <div className="h-12 w-12 md:h-16 md:w-16 mb-2">
                        <StepThree fillColor={activeStep === 3 ? "fill-lime-600" : fillColor} strokeColor={strokeColor} />
                    </div>
                    <p className="text-center text-xs md:text-sm text-black leading-tight">Donate</p>
                </button>
                <button 
                    onClick={() => setActiveStep(4)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-lime-50 ${activeStep === 4 ? 'bg-lime-100 ring-2 ring-lime-500' : ''}`}
                >
                    <div className="h-12 w-12 md:h-16 md:w-16 mb-2">
                        <StepFour fillColor={activeStep === 4 ? "fill-lime-600" : fillColor} strokeColor={strokeColor} />
                    </div>
                    <p className="text-center text-xs md:text-sm text-black leading-tight">We plant a tree</p>
                </button>
            </div>
            <div className="text-center min-h-[80px] md:min-h-[60px]">
                <h3 className="text-lg md:text-xl font-semibold text-black mb-2">{currentStepData.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-black px-2">
                    {currentStepData.text}
                </p>
            </div>
        </div>
    );
}