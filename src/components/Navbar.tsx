import { NavLink } from 'react-router';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-3 h-20 w-full shadow-xl sticky top-0 z-50 bg-white">
            <NavLink to="/">
                <div className="text-2xl font-bold">coworkassam</div>
            </NavLink>
            <div className="flex gap-4 font-semibold mx-16">
                <NavLink to="/" className="cursor-pointer">
                    Home
                </NavLink>
                <NavLink to="/about" className="cursor-pointer">
                    About
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
