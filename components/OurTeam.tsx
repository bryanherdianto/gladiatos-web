"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamData = {
  programming: [
    { name: 'Budi Santoso', faculty: 'FTUI', year: '2024', image: '/ourteam.png', role: 'Team Lead' },
    { name: 'Anton Wijaya', faculty: 'FTUI', year: '2023', image: '/ourteam.png', role: 'Backend Developer' },
    { name: 'Cindy Paramita', faculty: 'FASILKOM', year: '2024', image: '/ourteam.png', role: 'Frontend Developer' },
    { name: 'David Putra', faculty: 'FTUI', year: '2022', image: '/ourteam.png', role: 'ML Engineer' },
    { name: 'Eko Prasetyo', faculty: 'FASILKOM', year: '2023', image: '/ourteam.png', role: 'Mobile Developer' },
  ],
  electrical: [
    { name: 'Farhan Rahman', faculty: 'FTUI', year: '2022', image: '/ourteam.png', role: 'Team Lead' },
    { name: 'Gina Putri', faculty: 'FTUI', year: '2023', image: '/ourteam.png', role: 'Circuit Designer' },
    { name: 'Hadi Nugroho', faculty: 'FTUI', year: '2024', image: '/ourteam.png', role: 'Embedded Engineer' },
    { name: 'Indah Sari', faculty: 'FTUI', year: '2022', image: '/ourteam.png', role: 'PCB Designer' },
  ],
  manager: [
    { name: 'Joko Widodo', faculty: 'FEB', year: '2022', image: '/ourteam.png', role: 'Project Manager' },
    { name: 'Kevin Tanoto', faculty: 'FEB', year: '2023', image: '/ourteam.png', role: 'Financial Manager' },
    { name: 'Lisa Anggraeni', faculty: 'FIB', year: '2024', image: '/ourteam.png', role: 'PR Manager' },
  ],
  gears: [
    { name: 'Mira Sukmawati', faculty: 'FTUI', year: '2022', image: '/ourteam.png', role: 'Mechanical Lead' },
    { name: 'Nando Kusuma', faculty: 'FTUI', year: '2023', image: '/ourteam.png', role: 'CAD Designer' },
    { name: 'Olivia Permata', faculty: 'FTUI', year: '2024', image: '/ourteam.png', role: '3D Modeler' },
    { name: 'Putra Aditya', faculty: 'FTUI', year: '2022', image: '/ourteam.png', role: 'Materials Specialist' },
    { name: 'Qori Nadya', faculty: 'FTUI', year: '2023', image: '/ourteam.png', role: 'Mechanical Engineer' },
    { name: 'Rudi Hidayat', faculty: 'FTUI', year: '2024', image: '/ourteam.png', role: 'Fabrication Specialist' },
  ],
};

function OurTeam() {
  const [activeTeamSection, setActiveTeamSection] = useState<string>('programming');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTeamToggle = (section: string) => {
    if (section === activeTeamSection) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveTeamSection(section);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  // Get current team members
  const currentTeam = teamData[activeTeamSection as keyof typeof teamData] || [];

  // Navigate to next member (for mobile view)
  const goNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTeam.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  // Navigate to previous member (for mobile view)
  const goPrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? currentTeam.length - 1 : prev - 1));
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  return (
    <>
      <div className="w-full mt-[5vh] md:mt-[10vh] flex justify-center relative">
        <Image className="w-[350px] sm:w-[500px] lg:w-[526px] px-5" alt="Group"
          src="/Rectangle 24.svg" width={526} height={200} />
        <div className="absolute flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-4">
          <div
            className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] transition-translate duration-300 ${activeTeamSection === 'programming' ? 'isactive' : ''}`}
            onClick={() => handleTeamToggle('programming')}
          >
            <Image
              className={`absolute z-0 w-full ${activeTeamSection === 'programming' ? 'svg-red' : ''}`}
              alt="Group"
              src="/Rectangle 20.png"
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
              src="/Rectangle 20.png"
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
              src="/Rectangle 20.png"
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
              src="/Rectangle 20.png"
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

      <div className="relative mt-8 px-4">
        {/* Team name heading */}
        <div className="text-center mb-6">
          <h3 className="font-teko text-3xl md:text-4xl text-[#e9311f] uppercase">
            {activeTeamSection} Team
          </h3>
          <p className="text-gray-600 font-teko">
            {currentTeam.length} Members
          </p>
        </div>

        {/* Mobile View (Single Card with navigation) */}
        <div className="lg:hidden">
          <div className="flex items-center justify-center">
            <button
              onClick={goPrev}
              className="p-2 bg-[#e9311f] text-white rounded-full hover:bg-[#c0281a] transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="mx-4 w-full max-w-[350px]">
              {currentTeam.length > 0 && (
                <div className={`rounded-lg shadow-md relative flex justify-center items-center ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <Image
                    src={currentTeam[currentIndex].image}
                    alt={currentTeam[currentIndex].name}
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                  <div className="bg-gray-300 w-[70%] h-[70%] absolute left-1/2 transform -translate-x-[53.5%] top-[11%] rounded-md"></div>
                  <div className="absolute left-1/2 transform -translate-x-[55%] bottom-[11%] font-teko text-center">
                    <div className="text-xl md:text-2xl font-medium">
                      {currentTeam[currentIndex].name}
                    </div>
                    <div className="text-sm">
                      {currentTeam[currentIndex].faculty} {currentTeam[currentIndex].year}
                    </div>
                    <div className="text-sm text-[#e9311f]">
                      {currentTeam[currentIndex].role}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={goNext}
              className="p-2 bg-[#e9311f] text-white rounded-full hover:bg-[#c0281a] transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Pagination indicator for mobile */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {currentTeam.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#e9311f] scale-125' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View (Grid layout) */}
        <div className="hidden lg:block transition-opacity duration-300">
          <div className="grid grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto">
            {currentTeam.map((member, index) => (
              <div
                key={`${activeTeamSection}-${member.name}-${index}`}
                className="rounded-lg shadow-md relative flex justify-center items-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <div className="bg-gray-300 w-[70%] h-[70%] absolute left-1/2 transform -translate-x-[53.5%] top-[11%] rounded-md"></div>
                <div className="absolute left-1/2 transform -translate-x-[55%] bottom-[11%] font-teko text-center">
                  <div className="text-xl md:text-2xl font-medium">
                    {member.name}
                  </div>
                  <div className="text-md">
                    {member.faculty} {member.year}
                  </div>
                  <div className="text-md text-[#e9311f]">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;