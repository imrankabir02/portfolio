import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 z-50 w-full text-white shadow-lg bg-gradient-to-r from-slate-900 to-slate-1000">
            <div className="container flex items-center justify-between h-16 px-6 mx-auto">
                {/* Desktop Navigation Links */}
                <div className="justify-center hidden w-full space-x-8 text-lg font-medium md:flex">
                    <a href="#about" className="transition-colors hover:text-indigo-400">About</a>
                    <a href="#skills" className="transition-colors hover:text-indigo-400">Skills</a>
                    <a href="#experience" className="transition-colors hover:text-indigo-400">Experience</a>
                    <a href="#educations" className="transition-colors hover:text-indigo-400">Educations</a>
                    <a href="#hero" className="transition-colors hover:text-indigo-400">Contact Me</a>
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
                        <li><a href="#about" className="transition-colors hover:text-indigo-400">About</a></li>
                        <li><a href="#skills" className="transition-colors hover:text-indigo-400">Skills</a></li>
                        <li><a href="#experience" className="transition-colors hover:text-indigo-400">Experience</a></li>
                        <li><a href="#educations" className="transition-colors hover:text-indigo-400">Educations</a></li>
                        <li><a href="#hero" className="transition-colors hover:text-indigo-400">Contact Me</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
