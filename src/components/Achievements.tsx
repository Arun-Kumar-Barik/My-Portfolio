import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../constants';
import { Award, Code, Trophy } from 'lucide-react';

const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-8 h-8 text-accent-400" />;
      case 'code':
        return <Code className="w-8 h-8 text-secondary-400" />;
      case 'trophy':
        return <Trophy className="w-8 h-8 text-primary-400" />;
      default:
        return <Trophy className="w-8 h-8 text-primary-400" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glassmorphism p-6 rounded-xl h-full"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full p-3 bg-dark-800 border border-dark-700">
          {getIcon(achievement.icon)}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
          <p className="text-gray-300">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="achievements" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;