import React from 'react';
import { Award, Trophy, BrainCircuit, Download, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "State Rank 8",
      description: "Pre-University Examination",
      highlight: "98.5%",
      color: "from-yellow-400 to-orange-400",
      file: null
    },
    {
      icon: Award,
      title: "Python Development Internship",
      description: "Completed 4-week internship on Python Programming at SystemTron (MSME certified)",
      highlight: "SystemTron 2025",
      color: "from-purple-400 to-pink-400",
      file: "/certificates/python-internship.png"
    },
    {
      icon: BrainCircuit,
      title: "Qualcomm AI Upskilling Program",
      description: "Advanced AI and ML Upskilling Program covering modern AI technologies",
      highlight: "Qualcomm 2025",
      color: "from-green-400 to-emerald-500",
      file: "/certificates/qualcomm-ai-upskilling.pdf"
    },
    {
      icon: Award,
      title: "Introduction to Generative AI",
      description: "Certification on Generative AI Fundamentals by Google Cloud",
      highlight: "Google Cloud 2025",
      color: "from-pink-400 to-purple-500",
      file: "/certificates/generative-ai.pdf"
    },
    {
      icon: Code2,
      title: "Problem Solving (Basic)",
      description: "The problem solving (basic) certificate signifies successful completion of the HackerRank skill certification test in basic problem solving",
      highlight: "LinkedIn 2025",
      color: "from-blue-400 to-cyan-400",
      file: "/certificates/problem-solving-basic.pdf"
    }
  ];

  const culturalAchievements = [
    {
      icon: "🎭",
      title: "Bharatanatyam",
      level: "Intermediate Level",
      description: "Currently pursuing Advanced level training",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: "🎵",
      title: "Classical Music",
      level: "Foundation Completed",
      description: "Currently pursuing Intermediate level",
      color: "from-purple-400 to-indigo-400"
    }
  ];

  return (
    <section className="min-h-screen pt-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Achievements & Gallery
          </h2>
          <p className="text-gray-400">
            A glimpse into my accomplishments and passions
          </p>
        </motion.div>

        {/* Academic & Professional Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-purple-300">
            Academic & Professional
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center hover-lift"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} p-1`}
                >
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-gray-400 mb-2">{achievement.description}</p>
                <p
                  className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-3`}
                >
                  {achievement.highlight}
                </p>

                {achievement.file && (
                  <a
                    href={achievement.file}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cultural Pursuits */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-pink-300">
            Cultural Pursuits
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {culturalAchievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{item.icon}</div>
                  <div className="flex-1">
                    <h4
                      className={`text-2xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-purple-300 font-semibold mb-2">
                      {item.level}
                    </p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Professional Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">8.1</div>
              <p className="text-gray-400">CGPA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">9+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
              <p className="text-gray-400">GitHub Repositories</p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto border-l-4 border-purple-500">
            <p className="text-xl text-gray-300 italic">
              "Balancing the precision of engineering with the grace of classical arts. Every circuit designed, every algorithm optimized, and every performance perfected is a step toward excellence."
            </p>
            <p className="text-purple-400 font-semibold mt-4">
              - Kavyashree M R
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
