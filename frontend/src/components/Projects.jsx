import React, { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "AI-Bot",
      description: "Hackezee Project - Intelligent AI bot implementation with advanced natural language processing capabilities and real-time response generation",
      tech: ["JavaScript", "AI/ML", "Node.js", "Natural Language Processing"],
      github: "https://github.com/kavyaTheCreater/AI-Bot",
      category: "ai",
      featured: true
    },
    {
      title: "Inventory Dashboard",
      description: "Modern inventory management system with real-time updates, analytics dashboard, and comprehensive CRUD operations",
      tech: ["TypeScript", "React", "Dashboard", "Real-time Updates"],
      github: "https://github.com/kavyaTheCreater/inventory-dashboard",
      category: "web",
      featured: true
    },
    {
      title: "To-Do List App",
      description: "Feature-rich task management application with state management, local storage, and intuitive user interface",
      tech: ["TypeScript", "React", "State Management", "Local Storage"],
      github: "https://github.com/kavyaTheCreater/todolist",
      category: "web",
      featured: false
    },
    {
      title: "Cardiovascular Mortality Prediction",
      description: "Machine learning pipeline using stratified 10-fold cross-validation with AdaBoost classifier achieving 85.4% accuracy and 91% AUC",
      tech: ["Python", "Machine Learning", "AdaBoost", "Cross-Validation"],
      github: null,
      category: "ml",
      featured: true
    },
    {
      title: "Debouncing Circuit",
      description: "Hardware implementation of debouncing circuit using Vivado and FPGA prototyping for reliable digital signal processing",
      tech: ["Verilog", "Vivado", "FPGA", "Hardware Design"],
      github: null,
      category: "hardware",
      featured: false
    },
    {
      title: "Mod-10 T-Flipflop Counter",
      description: "Designed and analyzed a counter circuit that counts 10 numbers and resets, implemented using Tanner EDA",
      tech: ["Digital Logic", "Tanner EDA", "Circuit Design"],
      github: null,
      category: "hardware",
      featured: false
    },
    // --- Newly Added Projects ---
    {
      title: "eCourts Scraper",
      description: "CLI-based automation tool to fetch and download cause lists from the eCourts India website using advanced web scraping and data parsing techniques.",
      tech: ["Python", "BeautifulSoup", "Requests", "Argparse", "Automation"],
      github: "https://github.com/kavyaTheCreater/eCourtsScraper",
      category: "automation",
      featured: false
    },
    {
      title: "Binance Futures Bot",
      description: "Automated Binance Futures trading bot with a CLI, real-time trade execution, and position tracking using Binance API integration.",
      tech: ["Python", "Binance API", "CCXT", "CLI", "JSON"],
      github: "https://github.com/kavyaTheCreater/binance-futures-bot",
      category: "fintech",
      featured: true
    },
    {
      title: "Credit Approval System",
      description: "AI-powered credit approval prediction system using machine learning models trained on financial and demographic data.",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas", "Machine Learning"],
      github: "https://github.com/kavyaTheCreater/credit_approval_system",
      category: "ai",
      featured: true
    }
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'web', name: 'Web Development' },
    { id: 'fintech', name: 'FinTech' },
    { id: 'automation', name: 'Automation' },
    { id: 'hardware', name: 'Hardware' }
  ];

  return (
    <section className="min-h-screen pt-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Projects
          </h2>
          <p className="text-gray-400">
            Showcasing my work across AI, Web, Hardware, and Automation domains
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'glass-effect text-gray-300 hover:text-white hover:border-purple-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`glass-effect rounded-2xl p-6 hover-lift relative overflow-hidden ${
                project.featured
                  ? 'border-2 border-purple-500/50'
                  : 'border border-purple-500/20'
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3 text-purple-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 min-h-[60px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-600/20 border border-purple-500/50 rounded-full text-xs hover:bg-purple-600/40 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-all group"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg text-gray-400">
                  <span className="text-sm">Academic Project</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/kavyaTheCreater"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Github className="w-6 h-6" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
