"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, Star, Users, Clock, ChevronRight, GraduationCap, 
  Filter, Search, Trophy, Award, TrendingUp, Sparkles,
  Play, Eye, ThumbsUp, Calendar, ExternalLink
} from "lucide-react";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "10th Crash Course For 2026 Exam",
      instructor: "PRINCE SIR",
      description: "Complete syllabus coverage with live classes, test series, and doubt support. Perfect for board exam preparation.",
      originalPrice: "₹699",
      discountedPrice: "₹188",
      discount: "73% OFF",
      students: "15,000+",
      lessons: "120+",
      duration: "3 months",
      rating: 4.9,
      reviews: "2,500+",
      tag: "Bestseller",
      board: "All Boards",
      category: "Crash Course",
      features: ["Live Classes", "Test Series", "Doubt Support", "Study Material"],
    },
    {
      id: 2,
      title: "12th Science Crash Course 2026 Exam",
      instructor: "PRINCE SIR",
      description: "Physics, Chemistry, Biology complete preparation. Live classes and recorded lectures available 24/7.",
      originalPrice: "₹999",
      discountedPrice: "₹388",
      discount: "61% OFF",
      students: "12,000+",
      lessons: "150+",
      duration: "4 months",
      rating: 4.8,
      reviews: "1,800+",
      tag: "Popular",
      board: "All Boards",
      category: "Crash Course",
      features: ["Live Classes", "Recorded Lectures", "PYQ Discussion", "Mock Tests"],
    },
    {
      id: 3,
      title: "Class 12th Arts Crash Course",
      instructor: "PRINCE SIR",
      description: "History, Geography, Political Science, Economics complete preparation for board exams.",
      originalPrice: "₹999",
      discountedPrice: "₹388",
      discount: "61% OFF",
      students: "8,000+",
      lessons: "100+",
      duration: "3 months",
      rating: 4.7,
      reviews: "1,200+",
      tag: "New",
      board: "All Boards",
      category: "Crash Course",
      features: ["Live Classes", "Notes PDF", "Chapter-wise Test", "Doubt Session"],
    },
    {
      id: 4,
      title: "TOPPER 3.0 Batch - 10th Exam 2026",
      instructor: "PRINCE SIR",
      description: "All subjects covered. Special doubt sessions, mock tests, and previous year paper discussion.",
      originalPrice: "₹1,999",
      discountedPrice: "₹499",
      discount: "75% OFF",
      students: "20,000+",
      lessons: "200+",
      duration: "6 months",
      rating: 4.9,
      reviews: "3,200+",
      tag: "Top Rated",
      board: "All Boards",
      category: "Batch Program",
      features: ["Live Classes", "Recorded Lectures", "Test Series", "Doubt Support"],
    },
    {
      id: 5,
      title: "Vardaan Batch - 12th Science 2025-26",
      instructor: "PRINCE SIR",
      description: "Complete year-long program for science students. Includes NCERT solutions and PYQs.",
      originalPrice: "₹1,999",
      discountedPrice: "₹749",
      discount: "63% OFF",
      students: "10,000+",
      lessons: "250+",
      duration: "12 months",
      rating: 4.8,
      reviews: "1,500+",
      tag: "Most Sold",
      board: "All Boards",
      category: "Batch Program",
      features: ["Live Classes", "Recorded Lectures", "Test Series", "Doubt Support"],
    },
    {
      id: 6,
      title: "Safalta Batch - 11th & 12th Science",
      instructor: "PRINCE SIR",
      description: "Two-year integrated program for 11th and 12th science students. Foundation to advanced.",
      originalPrice: "₹4,999",
      discountedPrice: "₹2,899",
      discount: "42% OFF",
      students: "5,000+",
      lessons: "400+",
      duration: "24 months",
      rating: 4.7,
      reviews: "800+",
      tag: "Best Value",
      board: "All Boards",
      category: "Batch Program",
      features: ["Live Classes", "Recorded Lectures", "Test Series", "Doubt Support"],
    },
  ];

  const categories = ["All", "Crash Course", "Batch Program", "Foundation", "Test Series"];
  const boards = ["All Boards", "Bihar Board", "UP Board", "MP Board", "CBSE"];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Courses
          </motion.h1>
          <motion.p 
            className="text-orange-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Handpicked courses by India's top educators. Choose your course and start your journey to success.
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {course.discount}
                    </span>
                  </div>
                  {course.tag && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {course.tag}
                      </span>
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                    <div className="flex items-center justify-center h-full">
                      <GraduationCap className="w-20 h-20 text-white/30" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">P</span>
                    </div>
                    <span className="text-xs text-gray-600">{course.instructor}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{course.rating}</span>
                      <span className="text-xs text-gray-400">({course.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors text-lg">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-3 mb-3 text-gray-500 text-xs">
                    <div className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students}</div>
                    <div className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.lessons}</div>
                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {course.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xl font-bold text-gray-900">{course.discountedPrice}</span>
                      <span className="text-xs text-gray-400 line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <button className="px-4 py-1.5 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-semibold rounded-lg hover:shadow-md transition-all">
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;