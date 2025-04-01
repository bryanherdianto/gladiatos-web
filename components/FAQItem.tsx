import { useState } from "react";
import { ChevronUp } from "lucide-react";

const FAQItem = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFaqToggle = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const initialHeight = parseFloat(window.getComputedStyle(element).height);

        if (isOpen) {
            element.style.height = '';
            setIsOpen(false);
        } else {
            element.style.height = `${initialHeight * 2.5}px`;
            setIsOpen(true);
        }
    };

    return (
        <div
            className={`relative w-[80%] ms:h-[20px] mm:h-[25px] ml:h-[30px] mxl:h-[40px] md:h-[50px] lg:h-[70px] xl:h-[100px] cursor-pointer mt-[4%] transition-all duration-500`}
            onClick={handleFaqToggle}
        >

            <div className="absolute left-[1.5%] mt-[1.5%] w-full h-full bg-[#bcbcbc] rounded-[1px] md:rounded-[2px] lg:rounded-[4px] xl:rounded-md"></div>

            <div className="font-teko text-black absolute z-1 
                            left-[-1px] 
                            top-[-5px] ml:top-[-10px] lg:top-[-15px] 
                            mt-[1.5%] w-full ms:h-[20px] mm:h-[25px] ml:h-[30px] mxl:h-[40px] md:h-[50px] lg:h-[70px] xl:h-[100px] 
                            bg-white rounded-[1px] md:rounded-[2px] lg:rounded-[4px] xl:rounded-md shadow-lg
                            text-[10px] mm:text-[14px] ml:text-[16px] mxl:text-[20px] md:text-[30px] lm:text-[35px] xl:text-[40px]
                            flex items-center pl-[2%]
            ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <ChevronUp
                    className={`absolute z-2 right-[1%]
                                h-[10px] mm:h-[15px] mxl:h-[20px] md:h-[30px] lg:h-[40px] xl:h-[50px] 
                                transition-transform duration-300 w-10 text-[#bcbcbc]
                                ${isOpen ? "rotate-180" : ""}`}
                />
            </div>
        </div>
    );
};

export default FAQItem;
