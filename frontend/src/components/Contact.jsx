import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="min-h-screen pt-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Contact Me
          </h2>
          <p className="text-gray-400">I'd love to hear from you! Feel free to reach out below.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Get in Touch</h3>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <a href="mailto:kavyashreemr1@gmail.com" className="hover:text-purple-400">
                  kavyashreemr1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>+91 6363932799</span> {/* Replace with your number if you want */}
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span>Jayanagar 5th block, Karnataka, India</span>
              </li>
            </ul>

            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/kavyaTheCreater"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kavyashreemr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-pink-300">Send a Message</h3>
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-3 focus:outline-none focus:border-purple-500 text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-3 focus:outline-none focus:border-purple-500 text-white"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-3 focus:outline-none focus:border-purple-500 text-white"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-3 focus:outline-none focus:border-purple-500 text-white resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>

              {status === 'success' && (
                <p className="text-green-400 mt-2 text-center">✅ Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 mt-2 text-center">❌ Failed to send message. Try again later.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
