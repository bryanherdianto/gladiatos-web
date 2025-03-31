"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTeamSection, setActiveTeamSection] = useState<string | null>(null);

  // Refs for sections that need animation
  const hiddenElementsRef = useRef<(HTMLElement | null)[]>([]);
  const navbarRef = useRef<HTMLElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTeamToggle = (section: string) => {
    setActiveTeamSection(section);
  };

  const handleFaqToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const polygon = element.querySelector(".polygon230") as HTMLElement;

    if (polygon) {
      const isRotated = polygon.classList.contains("rotate-90");
      const initialHeight = parseFloat(window.getComputedStyle(element).height);

      if (isRotated) {
        polygon.classList.remove("rotate-90");
        element.style.height = '';
      } else {
        polygon.classList.add("rotate-90");
        element.style.height = `${initialHeight * 2.5}px`;
      }
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    // Get all elements with 'hide' class
    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      hiddenElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Scroll handling for navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (navbarRef.current && dropdownMenuRef.current) {
        if (window.scrollY > lastScrollY) {
          navbarRef.current.style.transform = "translateY(-100%)";
          dropdownMenuRef.current.style.transform = "translateY(-300%)";
        } else {
          navbarRef.current.style.transform = "translateY(0)";
          dropdownMenuRef.current.style.transform = "translateY(0)";
        }
        lastScrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto">
      {/* Navigation */}
      <nav
        ref={el => { navbarRef.current = el; }}
        id="navbar"
        className="fixed w-full top-0 left-0 flex justify-center transition-transform duration-300 z-20"
      >
        <div className={`${isMenuOpen ? "hidden" : "flex"} relative w-full h-[134px] justify-center
        g-cover bg-left max-w-[1440px] mx-auto`} style={{ backgroundImage: "url('/Group 34.svg')" }}>
          <Image
            className="absolute w-[111px] h-[109px] top-0 left-9 object-cover"
            src="/Logo.svg"
            alt="Logo"
            width={111}
            height={109}
          />

          <div className="absolute top-[20px] lg:top-[10px] right-[5%] text-[40px] lg:text-[58.7px] font-teko">
            <div className="hidden md:flex space-x-10 xl:space-x-16 text-[#e9311f]">
              <a href="#about" className="hover:text-black">
                About Us
              </a>
              <a href="#team" className="hover:text-black">
                Our Team
              </a>
              <a href="#projects" className="hover:text-black">
                Past Projects
              </a>
              <a href="#faq" className="hover:text-black">
                FAQ
              </a>
            </div>

            <button id="menu-button" className="block md:hidden z-20" onClick={toggleMenu}>
              <Menu className="h-10 w-10 text-[#e9311f]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={el => { dropdownMenuRef.current = el }}
          id="dropdown-menu"
          className={`${isMenuOpen ? "flex" : "hidden"} relative w-[100vw] z-50 bg-white flex flex-col justify-center items-center pt-[20px]`}
        >
          <button id="exit-button" className="absolute top-[20px] right-[5%] z-20" onClick={toggleMenu}>
            <X className="h-10 w-10 text-[#e9311f]" />
          </button>
          <div
            className="flex flex-col space-y-4 text-[#e9311f] 
            text-[40px] lg:text-[58.7px] 
            font-teko text-center"
          >
            <a href="#about" className="hover:text-black inline-block" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#team" className="hover:text-black inline-block" onClick={toggleMenu}>
              Our Team
            </a>
            <a href="#projects" className="hover:text-black inline-block" onClick={toggleMenu}>
              Past Projects
            </a>
            <a href="#faq" className="hover:text-black inline-block" onClick={toggleMenu}>
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="overflow-hidden w-full relative">
        <div className="hide mt-[206px] flex justify-center text-[#ef1500] 
          text-[48px] mm:text-[54px] sm:text-[68px] md:text-[96px] lg:text-[128px]
          text-center 
          ms:tracking-[-1px] md:tracking-[-6.4px] 
          font-audiowide">
          GLADIATOS
        </div>

        <p className="hide flex justify-center text-white 
          text-[20px] mm:text-[30px] sm:text-[48px] md:text-[50px] lg:text-[64px]
          text-center
          sm:tracking-[-1px] lg:tracking-[-3.62px] 
          leading-[30px] md:leading-[60px] lg:leading-[83.1px]
          font-audiowide">
          The Only Humanoid Robotic Team In Universitas Indonesia
        </p>

        <div className="hide mt-[14vh] flex justify-center">
          <p className="text-white 
            text-[20px] mm:text-[30px] sm:text-[48px] md:text-[50px] lg:text-[64px] 
            text-center 
            sm:tracking-[-1px] lg:tracking-[-3.62px] 
            leading-[40px] md:leading-[60px] lg:leading-[83.1px]
            font-audiowide">
            Meet Our Robots
          </p>
        </div>

        <div className="hide mt-[2vh] flex justify-center">
          <Image src="/Group 38.svg" alt="Group" width={500} height={300} />
        </div>

        <div className="hide mt-[1vh] flex justify-center">
          <div className="relative w-[944px] h-[135px] top-[13px] left-[5px]">
            <div className="relative">
              <Image src="/Group 39.svg" alt="Group" width={944} height={135} />
              <div
                className="absolute inset-0 flex justify-center items-center text-[#e9311f] text-2xl ml:text-4xl md:text-6xl text-center font-audiowide">
                Darput
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full mt-[20vh] relative">
        <div className="hide flex flex-col items-center relative">
          {/* About Us header */}
          <div className="w-full flex justify-center items-center relative">
            <Image className="w-full absolute" alt="Group" src="/Group 33.svg" width={1440} height={200} />
            <Image className="w-[280px] lg:w-[480px] absolute" alt="Group" src="/Group 36.svg" width={480} height={100} />
            <div className="absolute font-audiowide font-normal text-black 
              text-[35px] lg:text-[64px] tracking-[0] leading-[normal]">
              About Us
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between mt-[20vh]">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 md:pl-[4vw]">
              <Image className="hide w-[100%]" alt="Group" src="/Group 7.svg" width={500} height={400} />
            </div>

            <div
              className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:pr-[4vw] mt-8 md:mt-0">
              <div className="hide relative w-[100%]">
                {/* Image as the background */}
                <Image className="w-full" alt="Group" src="/Group 6.svg" width={500} height={200} />

                {/* Text content positioned on top of the image */}
                <div className="absolute top-[25%] left-[7%] font-teko font-medium text-black
                  text-[28px] mxl:text-[40px] md:text-[30px] xl:text-[40px] 
                  tracking-[2.00px] leading-[normal]">
                  Gladiatos UI
                </div>
                <div className="absolute top-[50%] left-[7%] pr-[15px]">
                  <p className="font-teko text-black
                    text-[12px] mm:text-[14px] ml:text-[18px] mxl:text-[24px] md:text-[14px] lm:text-[20px] xl:text-[24px] 
                    tracking-[0.48px] leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                    justo mollis, vulputate turpis ac, mollis neque. Donec egestas aliquam
                    tellus, in convallis augue imperdiet.
                  </p>
                </div>
              </div>

              {/* Second content block */}
              <div className="hide relative w-[100%] mt-[30px]">
                <Image className="w-full" alt="Group" src="/Group 37.svg" width={500} height={200} />
                <div className="absolute top-[13%] left-[30%] font-teko font-medium text-black 
                  text-[18px] ml:text-[24px] mxl:text-[30px] md:text-[22px] lm:text-[30px] xxl:text-[38px] 
                  tracking-[1px] leading-[normal]">
                  A Message from Our Leader
                </div>
                <div className="absolute top-[30%] left-[30%] pr-[15px]">
                  <p className="font-teko text-black 
                    text-[10px] mm:text-[13px] ml:text-[15px] mxl:text-[20px] md:text-[11px] lm:text-[16px] xl:text-[20px] 
                    tracking-[0.48px] leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                    justo mollis, vulputate turpis ac, mollis neque. Donec egestas aliquam
                    tellus, in convallis augue imperdiet et. Curabitur id euismod massa.
                    Mauris condimentum lectus a pretium dapibus. Nunc vitae neque vitae
                    sem commodo ultrices nec at eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="w-full mt-[25vh] relative">
        <div className="flex flex-col justify-center items-center relative">
          <div className="relative">
            <Image className="w-[280px] lg:w-full" alt="Group" src="/Group 13.svg" width={526} height={100} />
            <div className="absolute inset-0 flex justify-center items-center hide font-audiowide font-normal text-black 
              text-[35px] lg:text-[64px] 
              tracking-[0] leading-[normal]">
              Our Team
            </div>
          </div>

          <div className="w-full mt-[10vh] md:mt-[15vh] flex justify-center relative">
            <Image className="w-[350px] md:w-[500px] lg:w-[526px] px-5" alt="Group"
              src="/Rectangle 24.svg" width={526} height={200} />
            <div className="absolute flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-4">
              <div
                className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] ${activeTeamSection === 'programming' ? 'isactive' : ''}`}
                onClick={() => handleTeamToggle('programming')}
              >
                <Image
                  className={`absolute z-0 w-full ${activeTeamSection === 'programming' ? 'svg-red' : ''}`}
                  alt="Group"
                  src="/Rectangle 20.svg"
                  width={121}
                  height={80}
                />
                <Image
                  className="absolute z-10 w-[50%] mt-[15%] left-[25%]"
                  alt="Programming"
                  src="/programming.svg"
                  width={60}
                  height={60}
                />
              </div>
              <div
                className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] ${activeTeamSection === 'electrical' ? 'isactive' : ''}`}
                onClick={() => handleTeamToggle('electrical')}
              >
                <Image
                  className={`absolute z-0 w-full ${activeTeamSection === 'electrical' ? 'svg-red' : ''}`}
                  alt="Group"
                  src="/Rectangle 20.svg"
                  width={121}
                  height={80}
                />
                <Image
                  className="absolute z-10 w-[50%] mt-[15%] left-[25%]"
                  alt="Electrical"
                  src="/electrical.svg"
                  width={60}
                  height={60}
                />
              </div>
              <div
                className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] ${activeTeamSection === 'manager' ? 'isactive' : ''}`}
                onClick={() => handleTeamToggle('manager')}
              >
                <Image
                  className={`absolute z-0 w-full ${activeTeamSection === 'manager' ? 'svg-red' : ''}`}
                  alt="Group"
                  src="/Rectangle 20.svg"
                  width={121}
                  height={80}
                />
                <Image
                  className="absolute z-10 w-[50%] mt-[15%] left-[25%]"
                  alt="Manager"
                  src="/manager.svg"
                  width={60}
                  height={60}
                />
              </div>
              <div
                className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] ${activeTeamSection === 'gears' ? 'isactive' : ''}`}
                onClick={() => handleTeamToggle('gears')}
              >
                <Image
                  className={`absolute z-0 w-full ${activeTeamSection === 'gears' ? 'svg-red' : ''}`}
                  alt="Group"
                  src="/Rectangle 20.svg"
                  width={121}
                  height={80}
                />
                <Image
                  className="absolute z-10 w-[50%] mt-[15%] left-[25%]"
                  alt="Gears"
                  src="/gears.svg"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>

          {/* Team content will be added here */}
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="projects" className="w-full mt-[15vh] relative">
        <div className="hide flex justify-center items-center relative">
          <div className="relative flex justify-center">
            <Image className="w-[380px] lg:w-full" alt="Group" src="/Group 13 copy.svg" width={526} height={100} />
            <div
              className="hide absolute top-[1%] font-audiowide font-normal text-black text-[30px] mm:text-[35px] lg:text-[64px] tracking-[0] leading-[normal]">
              Past&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects
            </div>
          </div>

          {/* Projects content will be added here */}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full mt-[15vh] relative">
        <div className="hide flex flex-col justify-center items-center relative">
          <div className="w-full relative">
            <Image className="w-full" alt="Group" src="/Group 17.svg" width={1440} height={100} />
            <div className="absolute left-[20%] inset-0 flex items-center font-audiowide font-normal text-black 
              text-[25px] mm:text-[35px] lg:text-[64px] 
              tracking-[0] leading-[normal]">
              FAQ
            </div>
          </div>

          {/* FAQ Item 1 */}
          <div
            className="relative w-[80%] ms:h-[20px] mm:h-[25px] ml:h-[30px] mxl:h-[40px] md:h-[50px] lg:h-[70px] xl:h-[100px] cursor-pointer mt-[4%] transition-all duration-500"
            onClick={handleFaqToggle}
          >
            <div className="absolute left-[3%] top-[2px] mxl:top-[5px] md:top-[8px] lm:top-[10px] xl:top-[15px] z-10 
              text-[10px] mm:text-[14px] ml:text-[16px] mxl:text-[20px] md:text-[30px] lm:text-[35px] xl:text-[40px]
              text-black font-teko">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {/* Gray Rectangle */}
            <div
              className="absolute left-[1.5%] mt-[1.5%] w-full h-full bg-[#bcbcbc] rounded-[1px] md:rounded-[2px] lg:rounded-[4px] xl:rounded-md">
            </div>
            {/* Rectangle 22 */}
            <Image className="absolute z-1" alt="Group" src="/Rectangle 22.svg" width={800} height={100} />
            {/* Polygon 230 (z-2 image) */}
            <Image
              className="polygon230 absolute z-2 right-[2.5%] mt-[1.5%] 
                h-[10px] mm:h-[15px] mxl:h-[20px] md:h-[30px] lg:h-[40px] xl:h-[50px]
                transition-transform duration-500"
              alt="Group"
              src="/Polygon 230.svg"
              width={50}
              height={50}
            />
          </div>

          {/* FAQ Item 2 */}
          <div
            className="relative w-[80%] ms:h-[20px] mm:h-[25px] ml:h-[30px] mxl:h-[40px] md:h-[50px] lg:h-[70px] xl:h-[100px] cursor-pointer mt-[4%] transition-all duration-500"
            onClick={handleFaqToggle}
          >
            <div className="absolute left-[3%] top-[2px] mxl:top-[5px] md:top-[8px] lm:top-[10px] xl:top-[15px] z-10 
              text-[10px] mm:text-[14px] ml:text-[16px] mxl:text-[20px] md:text-[30px] lm:text-[35px] xl:text-[40px]
              text-black font-teko">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {/* Gray Rectangle */}
            <div
              className="absolute left-[1.5%] mt-[1.5%] w-full h-full bg-[#bcbcbc] rounded-[1px] md:rounded-[2px] lg:rounded-[4px] xl:rounded-md">
            </div>
            {/* Rectangle 22 */}
            <Image className="absolute z-1" alt="Group" src="/Rectangle 22.svg" width={800} height={100} />
            {/* Polygon 230 (z-2 image) */}
            <Image
              className="polygon230 absolute z-2 right-[2.5%] mt-[1.5%] 
                h-[10px] mm:h-[15px] mxl:h-[20px] md:h-[30px] lg:h-[40px] xl:h-[50px]
                transition-transform duration-500"
              alt="Group"
              src="/Polygon 230.svg"
              width={50}
              height={50}
            />
          </div>

          {/* FAQ Item 3 */}
          <div
            className="relative w-[80%] ms:h-[20px] mm:h-[25px] ml:h-[30px] mxl:h-[40px] md:h-[50px] lg:h-[70px] xl:h-[100px] cursor-pointer mt-[4%] transition-all duration-500"
            onClick={handleFaqToggle}
          >
            <div className="absolute left-[3%] top-[2px] mxl:top-[5px] md:top-[8px] lm:top-[10px] xl:top-[15px] z-10 
              text-[10px] mm:text-[14px] ml:text-[16px] mxl:text-[20px] md:text-[30px] lm:text-[35px] xl:text-[40px]
              text-black font-teko">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {/* Gray Rectangle */}
            <div
              className="absolute left-[1.5%] mt-[1.5%] w-full h-full bg-[#bcbcbc] rounded-[1px] md:rounded-[2px] lg:rounded-[4px] xl:rounded-md">
            </div>
            {/* Rectangle 22 */}
            <Image className="absolute z-1" alt="Group" src="/Rectangle 22.svg" width={800} height={100} />
            {/* Polygon 230 (z-2 image) */}
            <Image
              className="polygon230 absolute z-2 right-[2.5%] mt-[1.5%] 
                h-[10px] mm:h-[15px] mxl:h-[20px] md:h-[30px] lg:h-[40px] xl:h-[50px]
                transition-transform duration-500"
              alt="Group"
              src="/Polygon 230.svg"
              width={50}
              height={50}
            />
          </div>

          {/* FAQ Item 4 */}
          <div
            className="relative w-[80%] ms:h-[20px] mm:h-[25px] ml:h-[30px] mxl:h-[40px] md:h-[50px] lg:h-[70px] xl:h-[100px] cursor-pointer mt-[4%] transition-all duration-500"
            onClick={handleFaqToggle}
          >
            <div className="absolute left-[3%] top-[2px] mxl:top-[5px] md:top-[8px] lm:top-[10px] xl:top-[15px] z-10 
              text-[10px] mm:text-[14px] ml:text-[16px] mxl:text-[20px] md:text-[30px] lm:text-[35px] xl:text-[40px]
              text-black font-teko">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {/* Gray Rectangle */}
            <div
              className="absolute left-[1.5%] mt-[1.5%] w-full h-full bg-[#bcbcbc] rounded-[1px] md:rounded-[2px] lg:rounded-[4px] xl:rounded-md">
            </div>
            {/* Rectangle 22 */}
            <Image className="absolute z-1" alt="Group" src="/Rectangle 22.svg" width={800} height={100} />
            {/* Polygon 230 (z-2 image) */}
            <Image
              className="polygon230 absolute z-2 right-[2.5%] mt-[1.5%] 
                h-[10px] mm:h-[15px] mxl:h-[20px] md:h-[30px] lg:h-[40px] xl:h-[50px]
                transition-transform duration-500"
              alt="Group"
              src="/Polygon 230.svg"
              width={50}
              height={50}
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full relative mt-[15vh]">
        <Image className="w-full" alt="Group" src="/Group 24.svg" width={1440} height={200} />
        <div className="absolute inset-0 flex justify-between items-center mt-[3%] px-[2%]">
          <Image className="w-[7%] h-auto" src="/Logo.svg" alt="Logo" width={111} height={109} />
          <div className="flex gap-[15%] lg:gap-[20%] items-center justify-end">
            <a href="https://www.instagram.com" target="_blank" className="block w-[8%] md:w-[15%] lm:w-[20%]">
              <Image className="w-full h-auto" src="/instagram.svg" alt="Instagram" width={50} height={50} />
            </a>
            <a href="tel:08558866900" className="block w-[8%] md:w-[15%] lm:w-[20%]">
              <Image className="w-full h-auto" src="/phone.svg" alt="Phone" width={50} height={50} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="block w-[8%] md:w-[15%] lm:w-[20%]">
              <Image className="w-full h-auto" src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
            </a>
            <a href="https://line.me" target="_blank" className="block w-[8%] md:w-[15%] lm:w-[20%]">
              <Image className="w-full h-auto" src="/line.svg" alt="LINE" width={50} height={50} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

