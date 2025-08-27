"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamData = {
  managerial: [
    { name: 'Bryan Jeshua', faculty: 'FASILKOM', year: '2022', image: '/team/members/bryanjeshua.jpg', role: 'Managing Director' },
    { name: 'Fadhli Ammar', faculty: 'FTUI', year: '2022', image: '/team/members/fadhliammar.jpg', role: 'Technical Director' },
    { name: 'Glenn March', faculty: 'FTUI', year: '2023', image: '/team/members/glennmarch.jpg', role: 'Director' },
    { name: 'Ghania Larasati', faculty: 'FASILKOM', year: '2022', image: '/team/members/ghania.jpg', role: 'Lead' },
    { name: 'Khalila Putri', faculty: 'FIB', year: '2023', image: '/team/members/khal.jpg', role: 'Member' },
  ],
  mechanics: [
    { name: 'Raffa Kharisma', faculty: 'FTUI', year: '2023', image: '/team/members/raffakharisma.jpg', role: 'Director' },
    { name: 'Haidar Fatih', faculty: 'FTUI', year: '2023', image: '/team/members/haidarfatih.jpg', role: 'Member' },
    { name: 'Mikhail Ayares', faculty: 'FTUI', year: '2023', image: '/team/members/mikhail.jpg', role: 'Member' },
    { name: 'Sheri Mariana', faculty: 'VOKASI', year: '2023', image: '/team/members/sheri.jpg', role: 'Member' },
  ],
  electrical: [
    { name: 'Raditya Danendra', faculty: 'FTUI', year: '2023', image: '/team/members/danendra.jpg', role: 'Director' },
    { name: 'Fadlin Alwan', faculty: 'FTUI', year: '2023', image: '/team/members/fadlin.jpg', role: 'Lead' },
    { name: 'Benintya Farrel', faculty: 'FTUI', year: '2024', image: '/team/members/benintyafarrel.jpg', role: 'Member' },
    { name: 'Vito Madani', faculty: 'FTUI', year: '2024', image: '/team/members/vito.jpg', role: 'Member' },
    { name: 'Kenzi Akmal', faculty: 'FTUI', year: '2024', image: '/team/members/kenzi.jpg', role: 'Member' },
  ],
  programming: [
    { name: 'Veronica Kylie', faculty: 'FASILKOM', year: '2022', image: '/team/members/veronicakylie.jpg', role: 'Director' },
    { name: 'Ester Gracia', faculty: 'FASILKOM', year: '2022', image: '/team/members/ester.jpg', role: 'Lead AI-Vision' },
    { name: 'Muhammad Haidar', faculty: 'FTUI', year: '2023', image: '/team/members/muhammadhaidar.jpg', role: 'Lead Motion' },
    { name: 'Syahmi Hamdani', faculty: 'FTUI', year: '2023', image: '/team/members/syahmi.jpg', role: 'Lead' },
    { name: 'Bryan Herdianto', faculty: 'FTUI', year: '2023', image: '/team/members/bryanherdianto.jpg', role: 'Lead' },
    { name: 'Andi Hakim', faculty: 'FASILKOM', year: '2024', image: '/team/members/andi.jpg', role: 'Member' },
    { name: 'Ariq Maulana', faculty: 'FASILKOM', year: '2023', image: '/team/members/ariq.jpg', role: 'Member' },
    { name: 'Priyapta Naufal', faculty: 'FASILKOM', year: '2023', image: '/team/members/apta.jpg', role: 'Member' },
    { name: 'Harish Azka', faculty: 'FASILKOM', year: '2024', image: '/team/members/azka.jpg', role: 'Member' },
    { name: 'Zhafarrel Alvarezqi', faculty: 'FTUI', year: '2024', image: '/team/members/zhafarrel.jpg', role: 'Member' },
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
    setCurrentIndex((prev) => (prev + 1) % currentTeam.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Navigate to previous member (for mobile view)
  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? currentTeam.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <>
      <div className="w-full mt-[8vh] md:mt-[10vh] flex justify-center relative">
        <div className="absolute flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-4">
          <div
            className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] transition-translate duration-300 ${activeTeamSection === 'programming' ? 'isactive' : ''}`}
            onClick={() => handleTeamToggle('programming')}
          >
            <Image
              className={`absolute z-0 w-full drop-shadow-xl ${activeTeamSection === 'programming' ? 'svg-red' : ''}`}
              alt="Group"
              src="/team/team-box.svg"
              width={121}
              height={80}
            />
            <Image
              className="absolute z-10 w-[50%] mt-[20%] left-[25%]"
              alt="Programming"
              src="/team/programming.svg"
              width={60}
              height={60}
            />
          </div>
          <div
            className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] ${activeTeamSection === 'electrical' ? 'isactive' : ''}`}
            onClick={() => handleTeamToggle('electrical')}
          >
            <Image
              className={`absolute z-0 w-full drop-shadow-xl ${activeTeamSection === 'electrical' ? 'svg-red' : ''}`}
              alt="Group"
              src="/team/team-box.svg"
              width={121}
              height={80}
            />
            <Image
              className="absolute z-10 w-[50%] mt-[20%] left-[25%]"
              alt="Electrical"
              src="/team/electrical.svg"
              width={60}
              height={60}
            />
          </div>
          <div
            className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] ${activeTeamSection === 'managerial' ? 'isactive' : ''}`}
            onClick={() => handleTeamToggle('managerial')}
          >
            <Image
              className={`absolute z-0 w-full drop-shadow-xl ${activeTeamSection === 'managerial' ? 'svg-red' : ''}`}
              alt="Group"
              src="/team/team-box.svg"
              width={121}
              height={80}
            />
            <Image
              className="absolute z-10 w-[50%] mt-[20%] left-[25%]"
              alt="Manager"
              src="/team/manager.svg"
              width={60}
              height={60}
            />
          </div>
          <div
            className={`relative top-[-10px] sm:top-[-15px] md:top-[-20px] cursor-pointer w-[70px] sm:w-[100px] md:w-[121px] ${activeTeamSection === 'mechanics' ? 'isactive' : ''}`}
            onClick={() => handleTeamToggle('mechanics')}
          >
            <Image
              className={`absolute z-0 w-full drop-shadow-xl ${activeTeamSection === 'mechanics' ? 'svg-red' : ''}`}
              alt="Group"
              src="/team/team-box.svg"
              width={121}
              height={80}
            />
            <Image
              className="absolute z-10 w-[50%] mt-[20%] left-[25%]"
              alt="Gears"
              src="/team/gears.svg"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-[20vh] px-4">
        {/* Team name heading */}
        <div className="text-center mb-6">
          <h3 className="font-teko text-3xl md:text-4xl text-[#e9311f] uppercase">
            {activeTeamSection} Team
          </h3>
          <p className="text-white font-teko">
            {currentTeam.length} Members
          </p>
        </div>

        {/* Mobile View (Single Card with navigation) */}
        <div className="lg:hidden">
          <div className="flex items-center justify-center">
            <button
              onClick={goPrev}
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="mx-4 w-full max-w-[350px]">
              {currentTeam.length > 0 && (
                <div className="rounded-lg shadow-md relative flex justify-center items-center">
                  <Image
                    src="/team/ourteam.png"
                    alt="photo container"
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                  <Image
                    src={currentTeam[currentIndex].image}
                    alt={currentTeam[currentIndex].name}
                    width={1000}
                    height={1000}
                    className={`w-[70%] h-[70%] absolute left-1/2 transform -translate-x-[53.5%] top-[11%] rounded-md object-cover transition-transform duration-300 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
                  />
                  <div className={`absolute left-1/2 transform -translate-x-[55%] bottom-[6%] mm:bottom-[9%] ml:bottom-[11%] font-teko text-center transition-all duration-300 ${isAnimating ? 'translate-y-2 opacity-80' : 'translate-y-0 opacity-100'}`}>
                    <div className="text-xl md:text-2xl font-medium text-white">
                      {currentTeam[currentIndex].name}
                    </div>
                    <div className="text-sm mt-2">
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
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200"
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
                  src="/team/ourteam.png"
                  alt="photo container"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  className="w-[70%] h-[70%] absolute left-1/2 transform -translate-x-[53.5%] top-[11%] rounded-md object-cover"
                />
                <div className="absolute left-1/2 transform -translate-x-[55%] bottom-[11%] font-teko text-center">
                  <div className="text-xl md:text-2xl font-medium text-white">
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