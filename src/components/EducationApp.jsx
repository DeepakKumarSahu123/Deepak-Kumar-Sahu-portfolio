
import React from 'react'; import AppScreen from './AppScreen'; import { motion } from 'framer-motion'; import { FaUniversity, FaGraduationCap } from 'react-icons/fa'; import { MdLocationOn } from 'react-icons/md';

const educationData = [{ degree: 'Bachelor of Technology (B.Tech)', branch: 'Computer Science and Engineering', college: 'Vignan Institute of Technology and Management (VITAM)', location: 'Brahmapur, Odisha', year: '2020 - 2024', icon: <FaGraduationCap className="text-purple-500" />, animation: { x: -40 } },
  { degree: '12th - Higher Secondary', branch: 'Science', college: 'CHSE Board, Odisha', location: 'Odisha', year: '2020', icon: <FaUniversity className="text-indigo-500" />, animation: { y: 20 } },
  { degree: '10th - Matriculation', branch: 'General', college: 'BSE Board, Odisha', location: 'Odisha', year: '2018', icon: <FaUniversity className="text-green-500" />, animation: { x: 40 } }];

const Education = ({ onClose }) => {
  return (<AppScreen title="Education" onClose={onClose}> <motion.ul className="text-sm space-y-4 p-4" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }} > {educationData.map((edu, index) => (<motion.li key={index} className="flex items-start gap-4 bg-white dark:bg-zinc-800 rounded-xl p-4 shadow-md" initial={{ opacity: 0, ...edu.animation }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} > <div className="mt-1">{edu.icon}</div> <div> <h3 className="font-semibold text-gray-800 dark:text-white"> {edu.degree} </h3> <p className="text-gray-600 dark:text-gray-300">{edu.branch}</p> <p className="text-sm text-gray-500 dark:text-gray-400"> {edu.college} </p> <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500"> <MdLocationOn /> {edu.location}  |  {edu.year} </div> </div> </motion.li>))} </motion.ul>
    {/* Google Map of VITAM */}
    <motion.div
      className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700 mt-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4973142606136!2d84.75919327489443!3d19.173469248906006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d43300403e685%3A0xe8146dad111e82da!2sVignan%20Institute%20of%20Technology%20And%20Management(VITAM)%2C%20Brahmapur!5e0!3m2!1sen!2sin!4v1744696244026!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="VITAM College Map"
      ></iframe>
    </motion.div>
  </AppScreen>
  );
};

export default Education;