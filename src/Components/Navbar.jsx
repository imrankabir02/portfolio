import React, { useState, useEffect } from 'react';
import cvFile from '../assets/ImranCV.pdf'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur">
            {/* Retro pattern background */}
            <div className="absolute inset-0 opacity-90">
                {/* Zigzag pattern */}
                {/* <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#FFD700,#FFD700_1px,transparent_1px,transparent_10px)]"></div> */}
                {/* Grid pattern */}
                {/* <div className="absolute inset-0 opacity-5 bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(to_right,white_1px,transparent_1px)] bg-[size:20px_20px]"></div> */}
            </div>

            {/* Navbar content */}
            <div className="container relative flex items-center justify-between h-16 px-6 mx-auto">
                {/* Desktop Navigation Links */}
                <div className="justify-center hidden w-full space-x-6 text-lg font-bold md:flex">
                    {['About', 'Skills', 'Projects', 'Experience', 'Educations', 'Contact Me'].map((item) => (
                        <a 
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="relative px-4 py-1 transition-all duration-300 group hover:scale-110 hover:bgcard"
                        >
                            {/* Retro button effect */}
                            <span className="absolute inset-0 w-full h-full transition-transform transform rounded opacity-50 animate-pulse"></span>
                            <span className="relative">{item}</span>
                        </a>
                    ))}
                    <a 
                        href={cvFile}
                        download="ImranKabirCV.pdf" 
                        className="relative px-4 py-1 transition-all duration-300 hover:bgcard hover:text-green-500 group hover:scale-110"
                    >
                        <span className="absolute inset-0 w-full h-full transition-transform transform rounded opacity-50 animate-pulse"></span>
                        <span className="relative">My CV</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex justify-end md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="relative z-50 px-3 py-2 text-2xl text-white border-2 border-white rounded hover:bg-white hover:text-purple-700"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 w-full py-4 md:hidden backdrop:blur-md bg-lime-50">
                    {/* <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#FFD700,#FFD700_1px,transparent_1px,transparent_10px)]"></div> */}
                    <ul className="relative flex flex-col items-center space-y-4 text-lg font-bold">
                        {['About', 'Skills', 'Projects', 'Experience', 'Educations', 'Contact Me'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase().replace(' ', '')}`}
                                    className="px-4 py-1 transition-all duration-300 hover:text-cyan-300 hover:scale-110"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a 
                                href={cvFile}
                                download="ImranKabirCV.pdf" 
                                className="px-4 py-1 transition-all duration-300 hover:text-yellow-300 hover:scale-110"
                            >
                                My CV
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Bottom border effect */}
            {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div> */}
        </nav>
    );
}

export default Navbar;