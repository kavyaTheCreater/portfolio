import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding FPGA Design Flow",
      excerpt: "A comprehensive guide to FPGA development from RTL to bitstream generation...",
      date: "2024-10-01",
      readTime: "8 min",
      category: "Hardware",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Machine Learning in Healthcare",
      excerpt: "How I built a cardiovascular mortality prediction model with 85% accuracy...",
      date: "2024-09-15",
      readTime: "12 min",
      category: "Machine Learning",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "React Best Practices in 2024",
      excerpt: "Modern patterns and techniques for building scalable React applications...",
      date: "2024-08-20",
      readTime: "10 min",
      category: "Web Development",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-5xl font-bold mb-4 gradient-text">Blog</h2>
      <p className="text-xl text-gray-400 mb-12">
        Thoughts on hardware, software, and everything in between
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article 
            key={index}
            className="card-hover bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border-2 border-slate-700"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <span className="text-xs bg-purple-900 text-purple-300 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <button className="text-purple-400 hover:text-purple-300 flex items-center font-semibold">
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;