import  { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

function Navbar() {
      
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-wrap justify-between items-start px-1 md:px-12 py-4 h-20 w-full sticky top-0 z-50 bg-white">
            <NavLink to="/">
            <div className="text-2xl md:text-4xl font-bold logo">Coworkassam</div>
            </NavLink>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
            <button 
            onClick={toggleMenu} 
            className="focus:outline-none"
            >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2 md:gap-4 font-semibold mx-4 md:mx-16 min-w-auto items-center">
            <NavLink
            to="/"
            className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px] transition-all duration-300"
            >
            Home
            </NavLink>
            <NavLink
            to="/about"
            
            className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px] transition-all duration-300"
            >
            About
            </NavLink>
            <NavLink
            to="/booktour"
            
            className="p-1 md:p-2 bg-[#00ff62] cursor-pointer rounded-[5px] shadow-[1px_5px_0px_0px_#000] transition-all duration-300"
            >
            Book a Tour
            </NavLink>
            </div>

            {/* Mobile Navigation */}
            <div
            className={`md:hidden w-full flex  flex-col gap-2 mt-4 transition-all duration-300 transform bg-[#ffffffbf] ${
            isMenuOpen ? 'opacity-100 max-h-screen translate-y-0' : 'opacity-0 max-h-0 -translate-y-4 overflow-hidden'
            }`}
            >
            <NavLink
            to="/"
            className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px] text-center transition-all duration-300"
            onClick={toggleMenu}
            >
            Home
            </NavLink>
            <NavLink
            to="/about"
            className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px] text-center transition-all duration-300"
            onClick={toggleMenu}
            >
            About
            </NavLink>
            <NavLink
            to="/booktour"
            className="p-1 md:p-2 bg-[#00ff62] rounded-[5px] shadow-[1px_5px_0px_0px_#000] text-center transition-all duration-300"
            onClick={toggleMenu}
            >
            Book a Tour
            </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;