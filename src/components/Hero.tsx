import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );

    // Create floating effect on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      gsap.to(nameRef.current, {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: 'power2.out',
      });
      
      gsap.to(roleRef.current, {
        x: x * 10,
        y: y * 10,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen mx-auto flex flex-col items-center justify-center hero-gradient overflow-hidden"
      ref={heroRef}
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-950 to-dark-950"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center">
        <h1 
          ref={nameRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 text-gradient"
        >
          Arun Kumar Barik
        </h1>
        
        <p 
          ref={roleRef}
          className="text-lg md:text-xl lg:text-2xl text-secondary-300 text-center mb-8"
        >
          Java Backend Developer | Software Engineer
        </p>
        
        <div 
          ref={ctaRef} 
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glassmorphism px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 border border-primary-500/50 shadow-neon transition-all duration-300"
          >
            <Mail size={18} />
            Contact Me
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            download="resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glassmorphism px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 border border-secondary-500/50 shadow-neon-secondary transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary-500/50 flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-secondary-400"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;