"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from 'lucide-react';
import FAQItem from "../components/FAQItem";
import FotoBersama from "../public/about/foto_bersama.png";
import OurTeam from "../components/OurTeam";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (navbarRef.current) {
            if (window.scrollY > lastScrollY) {
              navbarRef.current.classList.add("navbar-hidden");
              navbarRef.current.classList.remove("navbar-visible");
            } else {
              navbarRef.current.classList.add("navbar-visible");
              navbarRef.current.classList.remove("navbar-hidden");
            }
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });

        ticking = true;
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
        className="fixed w-full top-0 left-0 flex justify-center transition-transform duration-300 z-20 will-change-transform bg-white drop-shadow-lg"
      >
        <div className={`${isMenuOpen ? "hidden" : "flex"} relative w-full h-[80px] md:h-[110px] justify-center
        bg-cover bg-left max-w-[1440px] mx-auto`}>
          <a href="#top">
            <Image
              className="absolute size-20 md:size-25 top-0 left-1 md:left-9 object-cover"
              src={"/Logo.png"}
              alt="Logo"
              width={111}
              height={109}
            />
          </a>

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
        <div className="hide mt-[150px] lg:mt-[206px] flex justify-center text-[#ef1500] 
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
          leading-[30px] mxl:leading-[40px] md:leading-[60px] lg:leading-[83.1px]
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
          <Image src="/hero/robots.png" alt="robots" width={2000} height={1200} className="w-full h-auto px-4" />
        </div>

        <div className="hide mt-[1vh] flex justify-center">
          <div className="relative w-[944px] h-[165px] top-[13px] left-[5px]">
            <div className="relative">
              <Image src="/hero/hero-robots-title.svg" alt="Group" width={944} height={165} />
              <div
                className="absolute inset-0 flex justify-center items-center text-[#e9311f] text-xl ml:text-3xl md:text-6xl text-center font-audiowide">
                Darput & Darnet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full mt-[40vh] relative">
        <div className="flex flex-col items-center relative">
          {/* About Us header */}
          <div className="w-full flex justify-center items-center relative">
            <Image className="w-full absolute" alt="Group" src="/about/about-decoration.svg" width={1440} height={200} />
            <Image className="w-[280px] lg:w-[480px] absolute" alt="Group" src="/about/about-title.png" width={480} height={100} />
            <div className="absolute font-audiowide font-normal text-black 
              text-[35px] lg:text-[64px] tracking-[0] leading-[normal]">
              About Us
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between mt-[20%] md:mt-[10%]">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 md:pl-[4vw]">
              <Image className="hide object-contain" alt="foto bersama" src={FotoBersama} />
            </div>

            <div
              className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:pr-[4vw] mt-8 md:mt-0">
              <div className="hide relative w-[100%]">
                {/* Image as the background */}
                <Image className="w-full" alt="about gladiatos" src="/about/about-gladiatos.svg" width={500} height={200} />

                {/* Text content positioned on top of the image */}
                <div className="absolute top-[25%] left-[7%] font-teko font-medium text-black
                  text-[28px] mxl:text-[40px] md:text-[30px] xl:text-[40px] 
                  tracking-[2.00px] leading-[normal]">
                  Gladiatos UI
                </div>
                <div className="absolute top-[50%] left-[7%] pr-[15px]">
                  <p className="font-teko text-black
                    text-[12px] mm:text-[14px] ml:text-[18px] mxl:text-[24px] md:text-[14px] lg:text-[20px] xl:text-[24px] 
                    tracking-[0.48px] leading-[normal]">
                    Tim Humanoid terbaik Universitas Indonesia kembangkan dua robot otonom yang mampu bermain sepak bola mandiri. Gladiatos raih banyak prestasi nasional dan internasional.
                  </p>
                </div>
              </div>

              {/* Second content block */}
              <div className="hide relative w-[100%] mt-[30px]">
                <Image className="w-full" alt="testimoni ketua" src="/about/ketua.png" width={2000} height={800} />
                <div className="absolute top-[13%] left-[30%] font-teko font-medium text-black 
                  text-[18px] ml:text-[24px] mxl:text-[30px] md:text-[22px] lg:text-[30px] xxl:text-[38px] 
                  tracking-[1px] leading-[normal]">
                  A Message from Our Leader
                </div>
                <div className="absolute top-[30%] left-[30%] pr-[15px]">
                  <p className="font-teko text-black 
                    text-[10px] mm:text-[13px] ml:text-[15px] mxl:text-[20px] md:text-[12px] lg:text-[16px] xl:text-[20px] 
                    tracking-[0.48px] leading-[normal]">
                    Every expert was once a beginner. Di sini, yang terpenting bukan hanya seberapa jauh kamu sekarang, tetapi seberapa besar tekadmu untuk berkembang.
                    Bersama tim ini, kita belajar, membangun, dan menembus batas yang tak pernah kita bayangkan sebelumnya. Mari ciptakan prestasi bersama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="w-full mt-[20vh] relative">
        <div className="flex flex-col justify-center items-center relative">
          <div className="relative">
            <Image className="w-[280px] lg:w-full" alt="Group" src="/team/team-title.png" width={526} height={100} />
            <div className="absolute inset-0 flex justify-center items-center font-audiowide font-normal text-black 
              text-[35px] lg:text-[64px] 
              tracking-[0] leading-[normal]">
              Our Team
            </div>
          </div>

          <OurTeam />

        </div>
      </section>

      {/* Past Projects Section */}
      <section id="projects" className="w-full mt-[15vh] relative">
        <div className="flex justify-center items-center relative">
          <div className="relative flex justify-center">
            <Image className="w-[380px] lg:w-full" alt="Group" src="/projects/past-projects-title.svg" width={526} height={100} />
            <div
              className="absolute top-[1%] font-audiowide font-normal text-black text-[30px] mm:text-[35px] lg:text-[64px] tracking-[0] leading-[normal]">
              Past&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects
            </div>
          </div>
        </div>
        <div className="hide grid grid-cols-1 md:grid-cols-3 gap-4 mt-[5vh] md:mt-[10vh] px-4">
          <div className="bg-white p-5 rounded-md shadow-md">
            <Image
              src="/projects/giias.jpg"
              alt="IKM Ekspo on XL"
              width={400}
              height={240}
              className="rounded-md shadow-md w-full h-60 object-cover"
            />
            <div className="w-full text-start font-teko text-3xl md:text-4xl text-red-500 pt-2 font-medium">
              Soccerbot Daihatsu GIIAS
            </div>
            <div className="w-full text-start font-teko text-xl md:text-2xl pt-2">
              Pada Juli 2025, Gladiatos ikut kompetisi untuk mengasah keterampilan teknis dan lunak. Empat tim dikirim dan semuanya berhasil menembus babak semifinal, menunjukkan kemampuan serta dedikasi tinggi anggota dalam bidang robotika kompetitif.
            </div>
          </div>
          <div className="bg-white p-5 rounded-md shadow-md">
            <Image
              src="/projects/pelatihan.png"
              alt="IKM Ekspo on XL"
              width={400}
              height={240}
              className="rounded-md shadow-md w-full h-60 object-cover"
            />
            <div className="w-full text-start font-teko text-3xl md:text-4xl text-red-500 pt-2 font-medium">
              Pelatihan ROS - Alumni
            </div>
            <div className="w-full text-start font-teko text-xl md:text-2xl pt-2">
              Pada 2024, Gladiatos mengadakan pelatihan Robot Operating System selama enam bulan. Dibimbing alumni yang mendalami robotika di Korea, program ini mempersiapkan anggota menghadapi tantangan kompetisi robotik nasional dengan kemampuan teknis lebih baik.
            </div>
          </div>
          <div className="bg-white p-5 rounded-md shadow-md">
            <Image
              src="/projects/axiata.jpg"
              alt="IKM Ekspo on XL"
              width={400}
              height={240}
              className="rounded-md shadow-md w-full h-60 object-cover"
            />
            <div className="w-full text-start font-teko text-3xl md:text-4xl text-red-500 pt-2 font-medium">
              IKM Ekspo on XL
            </div>
            <div className="w-full text-start font-teko text-xl md:text-2xl pt-2">
              Acara IKM Ekspo menjadi kesempatan Gladiatos memamerkan hasil kerja keras sekaligus melatih keterampilan komunikasi. Di Gedung XL, para anggota tampil percaya diri menghadapi publik, mengasah kemampuan presentasi sekaligus membangun citra profesional tim.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full mt-[15vh] relative">
        <div className="flex flex-col justify-center items-center relative">
          <div className="w-full relative">
            <Image className="w-full" alt="Group" src="/faq-title.svg" width={1440} height={100} />
            <div className="absolute left-[20%] inset-0 flex items-center font-audiowide font-normal text-black 
              text-[23px] mm:text-[32px] mxl:text-[40px] lg:text-[64px] 
              tracking-[0] leading-[normal]">
              FAQ
            </div>
          </div>

          <FAQItem
            question="Misalkan saya tidak memiliki pengalaman coding, apakah saya bisa belajar dari nol tentang coding di Gladiatos?"
            answer="Ya, kami menerima anggota dengan berbagai latar belakang pengalaman. Kami menyediakan pelatihan dan mentoring untuk membantu Anda memulai. Di Gladiatos, semangat untuk belajar lebih penting dari pengalaman sebelumnya."
          />
          <FAQItem
            question="Bagaimana saya bisa bergabung dengan tim Gladiatos?"
            answer="Anda dapat bergabung dengan mengikuti proses seleksi kami yang biasanya dibuka pada awal semester. Silakan ikuti media sosial kami untuk informasi terkini tentang pendaftaran anggota baru."
          />
          <FAQItem
            question="Berapa banyak waktu yang perlu saya dedikasikan untuk Gladiatos?"
            answer="Anggota Gladiatos biasanya menghabiskan sekitar 8-12 jam per minggu untuk pertemuan tim, pelatihan, dan proyek. Namun, komitmen waktu dapat bervariasi tergantung pada peran Anda dalam tim dan jadwal proyek kami."
          />
          <FAQItem
            question="Apakah Gladiatos menyediakan sertifikat keaktifan?"
            answer="Ya, kami memberikan sertifikat keaktifan bagi anggota yang telah berkontribusi secara signifikan dalam kegiatan dan proyek tim."
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full relative mt-[15vh]">
        <Image className="w-full block" alt="footer decoration" src="/footer-decoration.png" width={1440} height={200} />
        <div className="bg-[#d5d5d5] flex flex-col items-center py-4">
          <Image className="w-30 h-auto" src="/Logo.png" alt="Logo" width={111} height={109} />
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.instagram.com/gladiatos.ui/" target="_blank" className="block w-10 h-10">
              <Image className="w-full h-auto" src="/footer/instagram.svg" alt="Instagram" width={50} height={50} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="block w-10 h-10">
              <Image className="w-full h-auto" src="/footer/linkedin.svg" alt="LinkedIn" width={50} height={50} />
            </a>
          </div>
          <div className="text-center font-teko text-xl md:text-2xl">
            © 2025 Gladiatos UI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}