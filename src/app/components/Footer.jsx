"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  Clock,
  ChevronRight,
  GraduationCap,
  Heart,
  Shield,
  Sparkles,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Teachers", href: "/teachers" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const resources = [
    { name: "Study Material", href: "/study-material" },
    { name: "Test Series", href: "/test-series" },
    { name: "Live Classes", href: "/live-classes" },
    { name: "Doubt Support", href: "/doubt-support" },
    { name: "Video Lectures", href: "/video-lectures" },
    { name: "Sample Papers", href: "/sample-papers" },
  ];

  const boards = [
    { name: "Bihar Board", href: "/bihar-board" },
    { name: "UP Board", href: "/up-board" },
    { name: "MP Board", href: "/mp-board" },
    { name: "Rajasthan Board", href: "/rajasthan-board" },
    { name: "CBSE", href: "/cbse" },
    { name: "CUET", href: "/cuet" },
  ];

  const socialLinks = [
    { icon: "fb", href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: "ig", href: "https://www.instagram.com/vidyadayini.academy?igsh=MTNjb21sODR6czh0Yg==", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: "tw", href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: "yt", href: "https://youtube.com/@vidyadayiniacademy?si=_PmmKTJNgJ-lFWYH", label: "YouTube", color: "hover:bg-red-600" },
    { icon: "li", href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  ];

  const getSocialIcon = (iconName) => {
    switch(iconName) {
      case 'fb':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        );
      case 'ig':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        );
      case 'tw':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      case 'yt':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zm-7.814 6.994L8.5 12l3.498 1.588V10.41z" clipRule="evenodd" />
          </svg>
        );
      case 'li':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.jpeg"
                  alt="Vidyadayini Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Vidyadayini
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              "संकल्प से सिद्धि तक — हर सपना होगा साकार"
            </p>
            <p className="text-xs text-gray-500 mb-4">
              From Determination to Achievement — Every Dream Will Come True
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-gray-400">India's Most Trusted Platform</span>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-orange-500" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <Link
                    href={resource.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Board & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Exam Boards</h3>
            <ul className="space-y-2 mb-6">
              {boards.map((board, idx) => (
                <li key={idx}>
                  <Link
                    href={board.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {board.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2 pt-2 border-t border-gray-800">
              <h3 className="text-white font-semibold text-lg mb-3">Contact Us</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <a href="tel:+911234567890" className="hover:text-orange-500 transition-colors">
                  +91 7667140322
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-3.5 h-3.5 text-orange-500" />
                <a href="mailto:support@vidyadayini.com" className="hover:text-orange-500 transition-colors">
                  support@vidyadayini.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>Mon-Sat: 8AM - 8PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} Vidyadayini. All rights reserved. | 
              <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors ml-1">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>for India's students(Dharm Kumar)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;