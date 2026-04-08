"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Star, Users, BookOpen, GraduationCap, ChevronRight, TrendingUp, Sparkles, Heart, Target, Crown, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Left Side - Content */}
          <motion.div 
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trust Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full mb-4 w-fit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Crown className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-xs font-medium text-gray-700">India's Most Trusted Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-900">Master Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Board Examinations
              </span>
              <span className="text-gray-900">with India's Finest</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Educators
              </span>
            </motion.h1>

            {/* Slogan */}
            <motion.div 
              className="mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <p className="text-sm text-gray-700 font-medium">
                "संकल्प से सिद्धि तक — हर सपना होगा साकार"
              </p>
              <p className="text-xs text-orange-600 mt-0.5">
                From Determination to Achievement — Every Dream Will Come True
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-sm text-gray-500 mb-5 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Interactive live classes, structured curriculum, and customized learning paths — delivered in your preferred language.
              <span className="block text-orange-600 font-medium mt-1">अब सीखना होगा और भी आसान!</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm w-fit"
              >
                Begin Your Journey
                <Rocket className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/free-live-classes"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 text-sm w-fit"
              >
                Explore Free Classes
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-5 justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900">200+</div>
                  <div className="text-xs text-gray-500">Expert Faculty</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900">15,000+</div>
                  <div className="text-xs text-gray-500">Video Library</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900">96%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image - Same height as left */}
          <motion.div 
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Rating Badge - Top aligned */}
            <div className="flex justify-end mb-3">
              <motion.div 
                className="inline-flex items-center gap-2 bg-white rounded-xl shadow-lg px-3 py-1.5 border border-gray-100"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-900 text-sm">4.9</span>
                <span className="text-xs text-gray-500">(25k+ reviews)</span>
              </motion.div>
            </div>

            {/* Main Image Container - Slightly smaller */}
            <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 shadow-md">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/avi.jpeg"
                  alt="Vidyadayini Hero Illustration"
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div 
              className="grid grid-cols-3 gap-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
                <GraduationCap className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                <div className="text-sm font-bold text-gray-900">50k+</div>
                <div className="text-xs text-gray-500">Toppers</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
                <Heart className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                <div className="text-sm font-bold text-gray-900">100%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
              <div className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
                <Sparkles className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                <div className="text-sm font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;