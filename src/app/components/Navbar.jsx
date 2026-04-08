"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Teachers", href: "/teachers" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2" 
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/logo.jpeg"
                alt="Vidyadayini Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Vidyadayini
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Learn | Grow | Succeed</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
                className="flex items-center gap-1 text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100 animate-fadeIn">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/study-material"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Study Material
                  </Link>
                  <Link
                    href="/test-series"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Test Series
                  </Link>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Link
                href="/login"
                className="px-3 py-1.5 lg:px-4 lg:py-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm lg:text-base"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-3 py-1.5 lg:px-5 lg:py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-200 text-sm lg:text-base"
              >
                Sign Up Free
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-orange-600 font-medium transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/blog"
                    className="block py-1.5 text-sm text-gray-500 hover:text-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/study-material"
                    className="block py-1.5 text-sm text-gray-500 hover:text-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Study Material
                  </Link>
                  <Link
                    href="/test-series"
                    className="block py-1.5 text-sm text-gray-500 hover:text-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Test Series
                  </Link>
                </div>
              )}
            </div>
            
            <div className="pt-2 space-y-2">
              <Link
                href="/login"
                className="block py-2 text-orange-600 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block py-2 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;