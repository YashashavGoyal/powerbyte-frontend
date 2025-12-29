import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../img/bg.webp';
import logoFull from '../../img/logo-full.png';

const PublicLayout = ({ children, fluid = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Transparent Navbar */}
            <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={logoFull} alt="PowerByte Logo" className="w-[140px] md:w-[180px] h-auto drop-shadow-md" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">Home</Link>
                        <Link to="/login" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">Login</Link>
                        <Link to="/signup" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">Sign Up</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="p-2 text-white md:hidden focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute left-0 right-0 p-4 mt-2 bg-gray-800/85 backdrop-blur-sm md:hidden border-b border-gray-800 shadow-xl rounded-b-lg">
                        <div className="flex flex-col space-y-4 text-center">
                            <Link to="/" className="text-lg font-medium text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/login" className="text-lg font-medium text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
                            <Link to="/signup" className="text-lg font-medium text-gray-200 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Background Section with Overlay */}
            <div className={`relative flex flex-1 bg-center bg-cover ${fluid ? 'items-start' : 'items-center justify-center'}`} style={{ backgroundImage: `url(${bgImage})` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className={`relative z-10 w-full ${fluid ? '' : 'px-4'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PublicLayout;
