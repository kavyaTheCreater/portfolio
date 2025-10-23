import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen pt-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 shadow-2xl hover-lift"
          >
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-1 animate-gradient">
                <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center text-6xl">
                  👩‍💻
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Kavyashree M R
              </h1>
              <p className="text-purple-300 text-xl mb-6">ECE Engineer • Developer</p>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">kavyashreemr1@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">+91 6363932799</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Bengaluru, Karnataka</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <a 
                  href="https://github.com/kavyaTheCreater" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-purple-600 hover:bg-purple-500 rounded-full transition-all transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kavyashreemr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-600 hover:bg-purple-500 rounded-full transition-all transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              🚀 Hey there! I'm an <span className="text-purple-400 font-semibold">ECE Engineering</span> student bridging the gap between hardware and software!
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently pursuing my Bachelor's degree in <span className="text-purple-300 font-medium">Electronics and Communication Engineering</span> with a minor in <span className="text-pink-300 font-medium">Computer Science</span> at <span className="font-semibold text-white">PES University, Bengaluru</span> (CGPA: 8.1).
            </p>

            <p className="text-gray-400 leading-relaxed">
              With a passion for problem-solving and innovation, I thrive on <span className="text-purple-300">embedded systems</span>, <span className="text-pink-300">VLSI design</span>, <span className="text-purple-300">RTL design</span>, and <span className="text-pink-300">machine learning</span>. My technical arsenal includes Verilog, SystemVerilog, Python, and modern web technologies ✨.
            </p>

            <div className="glass-effect rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                Beyond Engineering
              </h3>
              <p className="text-gray-400">
                When I'm not coding at 3 AM or debugging circuits, you'll find me pursuing my passion for <span className="text-pink-300 font-medium">Bharatanatyam</span> (Intermediate level) and <span className="text-purple-300 font-medium">Classical Music</span> (Foundation completed). I believe in the perfect harmony between technology and art! 🎭🎵
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 border border-purple-500/30">
              <p className="text-gray-300 italic">
                "Bridging the analog and digital worlds, one line of code at a time. From hardware circuits to software solutions, I'm on a mission to create innovative tech that makes a difference!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;