import React from 'react';
import { GraduationCap, Briefcase, Code, Cpu, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  const skills = {
    "Hardware Design": ["Verilog", "SystemVerilog", "RTL Design", "Digital Logic Design", "FPGA Prototyping", "Vivado", "Tanner EDA"],
    "Verification": ["Testbench Creation", "Simulation", "Debugging", "Timing Analysis"],
    "Programming": ["Python", "C", "JavaScript", "HTML/CSS", "React.js"],
    "Tools & Technologies": ["Git", "Power BI", "Node.js", "Express.js"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen pt-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Resume
          </h2>
          <p className="text-center text-gray-400 mb-8">My Journey & Skills</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          {/* Education */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-600/30 rounded-xl">
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold text-purple-300">PES University, Bengaluru</h4>
                <p className="text-gray-300">B.Tech in Electronics & Communication</p>
                <p className="text-sm text-gray-400">Minor: Computer Science Engineering</p>
                <p className="text-gray-400 mt-2">2022 - 2026 | <span className="text-purple-400 font-semibold">CGPA: 8.1</span></p>
              </div>
              <div className="border-l-2 border-pink-500 pl-4">
                <h4 className="text-xl font-semibold text-pink-300">Pre-University Education</h4>
                <p className="text-gray-300">Masters PU College, Hassan</p>
                <p className="text-sm text-gray-400">PCMB</p>
                <p className="text-gray-400 mt-2"><span className="text-pink-400 font-semibold">98.5%</span> | 8th Rank in State 🏆</p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-600/30 rounded-xl">
                <Briefcase className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <h4 className="text-xl font-semibold text-purple-300">Python Development Intern</h4>
              <p className="text-gray-300 font-medium">Systemtron, Bengaluru</p>
              <p className="text-sm text-gray-400">Jan 2024 - Mar 2024</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 text-gray-400">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Completed certified internship in Python programming with focus on application development</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Built small-scale Python projects and automation scripts to solve real-world problems</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Gained hands-on experience in software development lifecycle</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-2xl p-8 hover-lift"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-600/30 rounded-xl">
              <Code className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold">Technical Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border-l-2 border-purple-500/50 pl-4">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-purple-600/20 border border-purple-500/50 rounded-full text-sm hover:bg-purple-600/40 hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Projects from Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 glass-effect rounded-2xl p-8 hover-lift"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pink-600/30 rounded-xl">
              <Cpu className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold">Additional Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-2 border-purple-500 pl-4 py-2">
              <h4 className="font-semibold text-purple-300">Debouncing Circuit</h4>
              <p className="text-sm text-gray-400">Vivado, Hardware Implementation</p>
            </div>
            <div className="border-l-2 border-pink-500 pl-4 py-2">
              <h4 className="font-semibold text-pink-300">Mod-10 T-Flipflop Counter</h4>
              <p className="text-sm text-gray-400">Tanner EDA by Mentor Graphics</p>
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <a
            href="/resume.pdf"
            download="Kavyashree_MR_Resume.pdf"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;