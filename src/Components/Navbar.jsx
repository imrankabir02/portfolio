import React, { useState, useEffect } from 'react';
import cvFile from '../assets/ImranCV.pdf'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if(isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full text-white shadow-lg bg-gradient-to-r from-slate-900 to-slate-1000">
            <div className="container flex items-center justify-between h-16 px-6 mx-auto">
                {/* Desktop Navigation Links */}
                <div className="justify-center hidden w-full space-x-8 text-lg font-medium md:flex">
                    <a href="#about" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">About</a>
                    <a href="#skills" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Skills</a>
                    <a href="#experience" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Experience</a>
                    <a href="#educations" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Educations</a>
                    <a href="#hero" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Contact Me</a>
                    <a href={cvFile}
                        download="ImranKabirCV.pdf" className="text-lg text-gray-300 transition-all duration-500 transform hover:scale-125 hover:text-pink-400"
                    >My CV</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex justify-end md:hidden">
                    <button onClick={toggleMenu} className="text-xl">
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 w-full py-4 bg-gray-800 top-16 md:hidden">
                    <ul className="flex flex-col items-center space-y-4 text-lg">
                        <li><a href="#about" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">About</a></li>
                        <li><a href="#skills" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Skills</a></li>
                        <li><a href="#experience" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Experience</a></li>
                        <li><a href="#educations" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Educations</a></li>
                        <li><a href="#hero" className="transition-all duration-500 transform hover:text-indigo-400 hover:scale-110">Contact Me</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
