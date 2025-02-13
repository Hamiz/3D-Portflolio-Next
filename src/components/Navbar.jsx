'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { navLinks } from '@/constants/constants'
import { styles } from '@/styles'
import { menu, close } from '@/assets'
import logo from '@/assets/logo.svg'
import Image from 'next/image'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "bg-primary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-[0_0_15px_rgba(0,255,255,0.15)]" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt='logo' className='w-10 h-10 object-contain' />
          <p className='text-white text-[29px] font-mono tracking-wider font-bold cursor-pointer flex relative right-2 hover:text-purple-900 transition-colors duration-300'>
            amiz &nbsp;
            <span className='sm:block hidden'> </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-purple-900" : "text-secondary"
              } hover:text-purple-900 text-[18px] font-mono tracking-wide cursor-pointer transition-all duration-300 transform hover:scale-105`}
              onClick={() => setActive(nav.title)}
            >
              <a 
                data-scroll-to 
                href={`#${nav.id}`}
                className="relative overflow-hidden group"
              >
                {nav.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 text-purple-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl backdrop-blur-md bg-opacity-90 border border-cyan-900`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-mono tracking-wide cursor-pointer text-[16px] ${
                    active === nav.title ? "text-purple-900" : "text-secondary"
                  } hover:text-purple-900 transition-colors duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a data-scroll-to href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;