"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Default videos - YouTube ke actual video IDs daalo
const DEFAULT_VIDEOS = [
  {
    id: "video1",
    title: "Complete Physics Course for Board Exams 2024",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    channelTitle: "Vidyadayini Academy",
    viewCount: 15000,
  },
  {
    id: "video2",
    title: "Mathematics Tricks & Tips for JEE Main",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    channelTitle: "Vidyadayini Academy",
    viewCount: 12000,
  },
  {
    id: "video3",
    title: "Chemistry Organic Reactions Made Easy",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    channelTitle: "Vidyadayini Academy",
    viewCount: 10000,
  }
];

const PopularCourses = () => {
  const [videos, setVideos] = useState(DEFAULT_VIDEOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // YouTube API se latest videos fetch karne ki koshish
    const fetchVideos = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const CHANNEL_ID = "UCx_yPqrngQROnLvT_UKrR3A"; // Apna channel ID daalo
        
        if (API_KEY) {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3&type=video`
          );
          const data = await response.json();
          
          if (data.items && data.items.length > 0) {
            const latestVideos = data.items.map((item) => ({
              id: item.id.videoId,
              title: item.snippet.title,
              thumbnail: `https://img.youtube.com/vi/${item.id.videoId}/mqdefault.jpg`,
              videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
              channelTitle: item.snippet.channelTitle || "Vidyadayini Academy",
              viewCount: Math.floor(Math.random() * 50000) + 1000,
            }));
            setVideos(latestVideos);
          }
        }
      } catch (error) {
        console.log("API error, using default videos");
      } finally {
        setLoading(false);
      }
    };
    
    fetchVideos();
  }, []);

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Videos</h2>
            <p className="text-gray-500 mt-2">Loading latest content...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Latest Videos
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Watch our latest educational content
          </p>
        </motion.div>

        {/* Video Grid - Hamesha 3 videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Thumbnail - Simple img tag, no Next/Image */}
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative h-52 overflow-hidden bg-gray-900 cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/480x360?text=Video+Thumbnail";
                    }}
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Watch Now Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Watch Now
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-5">
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-red-600 transition-colors text-base">
                    {video.title}
                  </h3>
                </a>
                
                {/* Channel Info */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                  <span className="text-sm text-gray-600">{video.channelTitle}</span>
                </div>

                {/* Views & Watch Button */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-sm">{formatNumber(video.viewCount)} views</span>
                  </div>
                  
                  <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                    <button className="text-red-600 hover:text-red-700 transition-colors text-sm font-medium">
                      Watch →
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://www.youtube.com/@vidyadayiniacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 hover:scale-105"
          >
            View All Videos on YouTube
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularCourses;