"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote, Award, TrendingUp, Users, GraduationCap } from "lucide-react";

const SuccessStoriesPage = () => {
  const stories = [
    {
      id: 1,
      name: "RANJAN VERMA",
      class: "Class 10",
      board: "MATRIC",
      score: "98.6%",
      rank: "State Rank 2",
      review: "TargetBoard completely transformed my preparation. The live classes and doubt support helped me achieve State Rank 2!",
      image: "/student-ranjan.jpg",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      class: "Class 12",
      board: "Science",
      score: "95.6%",
      rank: "State Rank 2",
      review: "The teachers on TargetBoard explain complex topics so simply. I never thought I could score this high in Physics!",
      image: "/student-rahul.jpg",
    },
    {
      id: 3,
      name: "Ananya Mishra",
      class: "Class 12",
      board: "Arts",
      score: "94.2%",
      rank: "State Rank 5",
      review: "The test series was exactly like the board exam. Perfect practice material with detailed solutions.",
      image: "/student-ananya.jpg",
    },
    {
      id: 4,
      name: "Saurabh Singh",
      class: "Class 10",
      board: "Matric",
      score: "93.8%",
      rank: "District Rank 1",
      review: "From average student to State Rank 7 - all because of TargetBoard's structured learning approach.",
      image: "/student-saurabh.jpg",
    },
    {
      id: 5,
      name: "Pooja Kumari",
      class: "Class 12",
      board: "Science",
      score: "93.4%",
      rank: "State Rank 7",
      review: "The doubt support and live classes helped me understand difficult concepts easily. Highly recommended!",
      image: "/student-pooja.jpg",
    },
  ];

  const stats = [
    { icon: Users, value: "2,50,000+", label: "Happy Students" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "94%", label: "Success Rate" },
    { icon: TrendingUp, value: "500+", label: "Top Performers" },
  ];

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
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-orange-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Real results from real students who achieved their dreams with Vidyadayini
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{story.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-900">{story.score}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{story.class} • {story.board}</p>
                    <p className="text-sm text-orange-600 font-medium mb-3">{story.rank}</p>
                    <div className="relative">
                      <Quote className="w-8 h-8 text-orange-100 absolute -top-2 -left-2" />
                      <p className="text-gray-600 text-sm pl-6 italic">"{story.review}"</p>
                    </div>
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

export default SuccessStoriesPage;