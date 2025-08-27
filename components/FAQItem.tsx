import { useState, useRef } from "react";
import { ChevronUp } from "lucide-react";

interface FAQItemProps {
    question?: string;
    answer?: string;
}

const FAQItem = ({ 
    question,
    answer
}: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleFaqToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="relative w-full px-4 mt-[4%] transition-all duration-500"
            onClick={handleFaqToggle}
        >
            {/* Container with relative positioning for proper document flow */}
            <div className="relative">
                {/* Question container */}
                <div 
                    className="relative z-10 
                        bg-white rounded-md shadow-lg
                        text-[14px] ml:text-[16px] mxl:text-[20px] md:text-[30px] lm:text-[35px] xl:text-[40px]
                        font-teko text-black 
                        pl-[2%] py-[10px] pr-[35px]
                        min-h-[40px] mm:min-h-[50px] ml:min-h-[60px] md:min-h-[70px] lg:min-h-[90px]
                        flex items-center cursor-pointer"
                >
                    {question}
                    <ChevronUp
                        className={`absolute z-20 right-[1%]
                                h-[15px] mxl:h-[20px] md:h-[30px] lg:h-[40px] xl:h-[50px] 
                                transition-transform duration-300 w-10 text-[#a5a5a5]
                                ${isOpen ? "rotate-180" : ""}`}
                    />
                </div>
                
                {/* Answer container */}
                {isOpen && (
                    <div 
                        ref={contentRef}
                        className="relative z-10 mt-[15px] mb-[10px]
                            bg-[#bcbcbc] rounded-md shadow-lg
                            text-[14px] mxl:text-[18px] md:text-[24px] lm:text-[28px] xl:text-[35px]
                            font-teko text-black 
                            p-[3%] opacity-90"
                    >
                        {answer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQItem;
