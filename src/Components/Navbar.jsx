import { useState, useEffect } from 'react';
import cvFile from '../assets/Mridha_Imran_Kabir_Backend.pdf'

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Educations', href: '#educations' },
    { label: 'Contact Me', href: '#contactme' },
];

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
            <div className="container relative flex items-center justify-between h-16 px-6 mx-auto">
                {/* Desktop Navigation Links */}
                <div className="justify-center hidden w-full space-x-6 text-lg font-bold md:flex">
                    {NAV_LINKS.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="relative px-4 py-1 transition-all duration-300 group hover:scale-110 hover:bgcard hover:text-yellow-700"
                        >
                            <span className="relative">{label}</span>
                        </a>
                    ))}
                    <a
                        href={cvFile}
                        download="Mridha_Imran_Kabir_Backend.pdf"
                        className="relative px-4 py-1 transition-all duration-300 hover:bgcard hover:text-green-700 group hover:scale-110"
                    >
                        <span className="relative">My CV</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex justify-end md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        className="relative z-50 px-3 py-2 text-2xl transition-colors border-2 rounded text-neutral-800 border-neutral-800 hover:bg-neutral-800 hover:text-neutral-100"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 w-full py-4 shadow-lg md:hidden backdrop-blur-md bg-lime-50">
                    <ul className="relative flex flex-col items-center space-y-4 text-lg font-bold">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="px-4 py-1 transition-all duration-300 hover:text-yellow-700 hover:scale-110"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={cvFile}
                                download="Mridha_Imran_Kabir_Backend.pdf"
                                className="px-4 py-1 transition-all duration-300 hover:text-green-700 hover:scale-110"
                            >
                                My CV
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;