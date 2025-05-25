import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Github, Code, Send } from 'lucide-react';
import { social } from '../constants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      'service_q9v8btc',       // Replace with your actual service ID
      'template_zeppb8a',      // Replace with your actual template ID
      {
        from_name: formState.name,
        reply_to: formState.email,
        message: formState.message,
      },
      'bwYWoy-z5yQT3j99A'        // Replace with your actual public key (not secret)
    )
    .then(
      () => {
        alert('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
      }
    );
};


  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'github':
        return <Github size={18} />;
      case 'code':
        return <Code size={18} />;
      default:
        return <Code size={18} />;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Feel free to reach out if you have any questions, opportunities, or just want to connect!
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-8 rounded-xl flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">arunbarik.kjr143@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+91 9337553407</p>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {social.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-dark-700 transition-colors"
                  >
                    {getSocialIcon(item.icon)}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-dark-800 rounded-lg border border-dark-700">
              <h4 className="text-lg font-semibold mb-2">Resume</h4>
              <p className="text-sm text-gray-300 mb-3">Download my resume to learn more about my experience and skills.</p>
              <a 
                href="/resume.pdf" 
                download="resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-white text-sm transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;