import  { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-wrap justify-between items-center px-6 md:px-12 py-3 h-20 w-full sticky top-0 z-50 bg-white">
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
                    className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px]"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px]"
                >
                    About
                </NavLink>
                <NavLink
                    to="/connect"
                    className="p-1 md:p-2 bg-[#00ff62] rounded-[5px] shadow-[1px_5px_0px_0px_#000]"
                >
                    Connect
                </NavLink>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden w-full flex flex-col gap-2 mt-4">
                    <NavLink
                        to="/"
                        className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px] text-center"
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="py-1 px-2 md:py-2 md:px-3 cursor-pointer hover:border-2 hover:border-black hover:shadow-[1px_5px_0px_0px_#000] rounded-[5px] text-center"
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/connect"
                        className="p-1 md:p-2 bg-[#00ff62] rounded-[5px] shadow-[1px_5px_0px_0px_#000] text-center"
                        onClick={toggleMenu}
                    >
                        Connect
                    </NavLink>
                </div>
            )}
        </nav>
    );
}

export default Navbar;