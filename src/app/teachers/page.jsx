"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, Star, Award, GraduationCap, Mail, Phone, MapPin, Youtube, Twitter, Linkedin } from "lucide-react";

const TeachersPage = () => {
  const teachers = [
    {
      id: 1,
      name: "PRINCE SIR",
      subjects: ["SCIENCE", "S.ST", "HINDI", "SANSKRIT"],
      experience: "7+ years",
      students: "50,000+",
      rating: 4.9,
      courses: 28,
      bio: "प्रिंस सर एक ऐसे शिक्षक हैं जिन्हें बच्चे सबसे अधिक पसंद करते हैं। वे मुख्य रूप से Science, Social Science, हिन्दी और संस्कृत जैसे विषयों को बेहद सरल, रोचक और प्रभावी तरीके से पढ़ाते हैं।",
      image: "/teacher-prince.jpg",
      quote: "जूनून जगा के सीने में जो चला हूँ अपनी मंजिल की ओर",
    },
    {
      id: 2,
      name: "ANAND SIR",
      subjects: ["PHYSICS"],
      experience: "6+ years",
      students: "30,000+",
      rating: 4.8,
      courses: 9,
      bio: "आनन्द सर, जिन्होंने शिक्षा जगत में उत्कृष्ट कार्य किया है। इनके भौतिक विज्ञान पढ़ाने का तरीका बच्चों को खूब आकर्षित करता है।",
      image: "/teacher-anand.jpg",
      quote: "Physics ko samjho, ratto nahi",
    },
    {
      id: 3,
      name: "SAURABH SIR",
      subjects: ["MATH"],
      experience: "5+ years",
      students: "25,000+",
      rating: 4.9,
      courses: 6,
      bio: "Saurabh Sir केवल गणित के शिक्षक नहीं, बल्कि विद्यार्थियों के Guide, Mentor और Motivator भी हैं।",
      image: "/teacher-saurabh.jpg",
      quote: "गणित रटने का नहीं, समझने का विषय है",
    },
    {
      id: 4,
      name: "DEEPAK SIR",
      subjects: ["ENGLISH"],
      experience: "8+ years",
      students: "40,000+",
      rating: 4.8,
      courses: 17,
      bio: "जो अंग्रेजी विषय के सिर्फ एक शिक्षक ही नहीं बल्कि बिहार बोर्ड के बच्चों के लिए प्रेरणा के स्रोत रह चुके हैं।",
      image: "/teacher-deepak.jpg",
      quote: "English ko aasan banao, dar ko bhagao",
    },
    {
      id: 5,
      name: "ABHISHEK SIR",
      subjects: ["BIOLOGY"],
      experience: "7+ years",
      students: "35,000+",
      rating: 4.8,
      courses: 7,
      bio: "अभिषेक सर एक ऐसे शिक्षक हैं जिन्हें छात्र जीवविज्ञान (Biology) के लिए बहुत पसंद करते हैं।",
      image: "/teacher-abhishek.jpg",
      quote: "Biology ko simple aur interesting banayein",
    },
    {
      id: 6,
      name: "VIVEK SIR",
      subjects: ["CHEMISTRY"],
      experience: "5+ years",
      students: "20,000+",
      rating: 4.7,
      courses: 9,
      bio: "Vivek Sir chemistry ke concepts ko real-life examples ke saath samjhate hain.",
      image: "/teacher-vivek.jpg",
      quote: "Chemistry hai toh life hai",
    },
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
            Our Expert Teachers
          </motion.h1>
          <motion.p 
            className="text-orange-100 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Learn from India's most experienced and trusted educators
          </motion.p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  <div className="flex flex-col items-center justify-center h-full text-white">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <GraduationCap className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold">{teacher.name}</h3>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{teacher.rating}</span>
                      <span className="text-white/70 text-sm">({teacher.students} students)</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {teacher.subjects.map((subject, i) => (
                      <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {teacher.bio}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span>{teacher.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4 text-orange-500" />
                        <span>{teacher.courses} courses</span>
                      </div>
                    </div>
                    <Link href={`/teachers/${teacher.id}`}>
                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                        View Profile →
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

export default TeachersPage;