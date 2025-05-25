import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../constants';

const SkillProgress = ({ name, percentage, color }: { name: string; percentage: number; color: string }) => {
  const circumference = 2 * Math.PI * 38;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col items-center gap-2 w-28"
    >
      <div className="relative w-20 h-20">
        <svg width="84" height="84" viewBox="0 0 84 84" className="progress-ring">
          <circle
            cx="42"
            cy="42"
            r="38"
            stroke="#1e293b"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="42"
            cy="42"
            r="38"
            stroke={color || '#38bdf8'}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
          {percentage}%
        </div>
      </div>
      <p className="text-center text-sm">{name}</p>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div ref={ref} className="glassmorphism p-8 rounded-2xl">
          <p className="text-center text-gray-300 mb-10">
            I specialize in Java backend development with expertise in various technologies and frameworks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {skills.map((skill, index) => (
              <SkillProgress
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;