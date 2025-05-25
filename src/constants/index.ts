import { NavLink, Experience, Skill, Project, Education, Achievement, Social } from '../types';

export const navLinks: NavLink[] = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'contact', title: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'Java 8', percentage: 90, color: '#E76F00' },
  { name: 'Spring Boot', percentage: 85, color: '#6DB33F' },
  { name: 'Hibernate', percentage: 80, color: '#59666C' },
  { name: 'C/C++', percentage: 90, color: '#659AD2' },
  { name: 'Python', percentage: 90, color: '#366B98' },
  { name: 'React', percentage: 75, color: '#61DAFB' },
  { name: 'MySQL', percentage: 85, color: '#00758F' },
  { name: 'MongoDB', percentage: 80, color: '#13AA52' },
  { name: 'Git', percentage: 85, color: '#F1502F' },
  { name: 'DSA', percentage: 90, color: '#5E35B1' },
  { name: 'Excel', percentage: 85, color: '#217346' },
  { name: 'Visio', percentage: 75, color: '#3955A3' },
  { name: 'PowerPoint', percentage: 80, color: '#B7472A' },
  { name: 'MS Office', percentage: 85, color: '#D83B01' },
];

export const experiences: Experience[] = [
  {
    title: 'Java Backend Development Intern',
    company: 'INCTURE',
    location: 'Bhubaneswar, Odisha',
    date: 'February 2025 - Present',
    description: [
      'Gained hands-on experience in Java 8, Spring, and Hibernate for backend development.',
      'Developed and optimized RESTful APIs and implemented database interactions using Hibernate.',
      'Worked on debugging, performance optimization, and system scalability in enterprise applications.'
    ],
    icon: 'code',
  },
  {
    title: 'Teaching Assistant',
    company: 'APNA COLLEGE',
    location: 'Remote',
    date: 'June 2024 - September 2024',
    description: [
      'Mentored 5000 students as a Teaching Assistant for Java DSA, ensuring conceptual clarity and application.',
      'Resolved 1068 student queries with an average satisfaction rating of 4.12, showcasing strong problem-solving and communication skills.'
    ],
    icon: 'graduation-cap',
  },
];

export const projects: Project[] = [
  {
    id: 'movie-recommender',
    title: 'Movie Recommender System',
    description: 'Designed a personalized Movie Recommender System using collaborative and content-based filtering techniques. Achieved high accuracy by optimizing model parameters and testing on real-world datasets like tmdb5000.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Numpy', 'NLP'],
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/Arun-Kumar-Barik/Movies-Recommender-System2',
  },
  {
    id: 'talk-a-tive',
    title: 'Talk-A-Tive (Full Stack Modern Chatting App)',
    description: 'Talk-A-Tive is a full-stack chatting application built to enable real-time communication using Socket.io. The app features an intuitive interface for seamless user interaction and prioritizes security by storing user details in an encrypted format within a MongoDB database.',
    technologies: ['React JS', 'Node JS', 'MongoDB', 'Socket.io'],
    image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    github: 'https://github.com/Arun-Kumar-Barik/Talk-A-Tive',
  },
];

export const education: Education[] = [
  {
    institution: 'C.V. Raman Global University',
    degree: 'Bachelor of Technology',
    date: '2021 - 2025',
    gpa: '8.75/10',
    courses: [
      'Object-Oriented Programming',
      'Database Management System',
      'Operating System',
      'Computer Networking'
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Perfect Score in ICSE',
    description: 'Scored 100/100 in ICSE Board Exam (OOPs with Java)',
    icon: 'trophy',
  },
  {
    title: 'Coding Problems Solver',
    description: 'Solved 650+ coding problems of Data Structures and Algorithms across platforms like LeetCode, HackerRank, and GeeksforGeeks',
    icon: 'code',
  },
  {
    title: 'Top Performing TA',
    description: 'Top Performing Teaching Assistant at Alpha Plus batch By Apna College (DSA with Java)',
    icon: 'award',
  },
];

export const social: Social[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arun-kumar-barik/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Arun-Kumar-Barik',
    icon: 'github',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Arun-Kumar-Barik/',
    icon: 'code',
  },
];