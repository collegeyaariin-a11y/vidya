"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Globe, 
  Star, 
  Shield, 
  Sparkles,
  ChevronRight,
  Quote,
  BookOpen,
  Trophy,
  Rocket,
  Tree,
  Infinity,
  Compass
} from "lucide-react";

const VisionPage = () => {
  const values = [
    {
      icon: Heart,
      title: "With Love & Care",
      description: "Every student is unique. We nurture individual potential with personalized attention and genuine care.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Modern teaching methods, smart classrooms, and technology-driven learning experiences.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest guidance and transparent education.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Creating a supportive community where students, teachers, and parents grow together.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "World-class education with local relevance. Preparing students for global opportunities.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Infinity,
      title: "Lifelong Learning",
      description: "Instilling curiosity and love for learning that extends beyond exams and degrees.",
      color: "from-red-500 to-orange-500",
    },
  ];

  const milestones = [
    { year: "2024", title: "The Beginning", description: "Started with 100 students and a vision to transform education", number: "100+" },
    { year: "2025", title: "Rapid Growth", description: "Reached 50,000+ students across 5 states", number: "50K+" },
    { year: "2026", title: "Major Milestone", description: "2,50,000+ students trust Vidyadayini", number: "2.5L+" },
    { year: "2027", title: "The Vision", description: "Targeting 10 lakh students pan-India", number: "10L+" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 pt-24 pb-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Eye className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">Our Vision & Mission</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Shaping the Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Education in India
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                "संकल्प से सिद्धि तक — हर सपना होगा साकार"
              </p>
              
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                At Vidyadayini, we believe every child deserves access to quality education. 
                Our mission is to democratize learning and make board exam success achievable for every student, 
                regardless of their background or location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-orange-100 mb-4 leading-relaxed">
                To provide accessible, affordable, and quality education to every student in India, 
                empowering them to achieve their dreams and excel in board examinations.
              </p>
              <ul className="space-y-2 text-sm text-orange-100">
                <li className="flex items-center gap-2">✓ 2.5 Lakh+ Students Empowered</li>
                <li className="flex items-center gap-2">✓ 150+ Expert Teachers</li>
                <li className="flex items-center gap-2">✓ 94% Success Rate</li>
              </ul>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                To become India's most trusted and loved education platform, where learning knows no barriers 
                and every student discovers their true potential.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">🌟 10 Lakh+ Students by 2027</li>
                <li className="flex items-center gap-2">🌟 Presence in 15+ States</li>
                <li className="flex items-center gap-2">🌟 98% Success Rate Target</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">What We Believe In</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Our Core Values
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                These values guide everything we do at Vidyadayini
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                <Trophy className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Milestones Achieved
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                From a small dream to a movement — our incredible journey so far
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">{milestone.number}</div>
                <div className="text-sm text-orange-500 font-semibold mb-1">{milestone.year}</div>
                <div className="font-bold text-gray-900 mb-1">{milestone.title}</div>
                <div className="text-xs text-gray-500">{milestone.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-4xl mx-auto leading-relaxed">
              "Education is not just about scoring marks. It's about building character, confidence, and a brighter future for every child."
            </p>
            <p className="text-orange-200 text-lg">— Team Vidyadayini</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Be a Part of Our Vision
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already achieving their dreams with Vidyadayini
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Start Learning Today
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VisionPage;