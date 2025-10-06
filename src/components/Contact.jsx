
/*
import React, { useState } from 'react';
import AppScreen from './AppScreen';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdContentCopy } from 'react-icons/md';

const contactItems = [
  {
    label: 'Email',
    value: 'khetrabasi@example.com',
    icon: <MdEmail className="text-green-500" />,
    canCopy: true,
    animation: { x: -30 }
  },
  {
    label: 'Phone',
    value: '+91 9876543210',
    icon: <MdPhone className="text-blue-500" />,
    canCopy: true,
    animation: { y: 20 }
  },
  {
    label: 'Location',
    value: 'Bangalore, India',
    icon: <MdLocationOn className="text-red-500" />,
    canCopy: false,
    animation: { x: 30 }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Contact = ({ onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <AppScreen title="Contact" onClose={onClose}>
      <motion.ul
        className="text-sm space-y-4 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-between bg-white dark:bg-zinc-800 rounded-xl p-3 shadow-md"
            initial={{ opacity: 0, ...item.animation }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium text-gray-800 dark:text-gray-100">
                <span className="text-green-500">{item.label}:</span> {item.value}
              </span>
            </div>

            {item.canCopy && (
              <button
                onClick={() => handleCopy(item.value, index)}
                className="text-gray-500 hover:text-green-500 transition-colors"
                title="Copy to clipboard"
              >
                {copiedIndex === index ? (
                  <span className="text-green-500 text-sm">Copied!</span>
                ) : (
                  <MdContentCopy size={20} />
                )}
              </button>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </AppScreen>
  );
};

export default Contact;

*/

import React, { useState } from 'react'; import AppScreen from './AppScreen'; import { motion } from 'framer-motion'; import { MdEmail, MdPhone, MdLocationOn, MdContentCopy } from 'react-icons/md';

const contactItems = [{ label: 'Email', value: 'dsahu8338@gmail.com', icon: <MdEmail className="text-green-500" />, canCopy: true, animation: { x: -30 } }, { label: 'Phone', value: '+919692436909', icon: <MdPhone className="text-blue-500" />, canCopy: true, animation: { y: 20 } }, { label: 'Location', value: 'Hyderabad, India', icon: <MdLocationOn className="text-red-500" />, canCopy: false, animation: { x: 30 } }];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };

const Contact = ({ onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (value, index) => { navigator.clipboard.writeText(value); setCopiedIndex(index); setTimeout(() => setCopiedIndex(null), 1500); };

  return (<AppScreen title="Contact" onClose={onClose}> <motion.ul className="text-sm space-y-4 p-4" variants={containerVariants} initial="hidden" animate="visible" > {contactItems.map((item, index) => (<motion.li key={index} className="flex items-center justify-between bg-white dark:bg-zinc-800 rounded-xl p-3 shadow-md" initial={{ opacity: 0, ...item.animation }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} > <div className="flex items-center gap-3"> {item.icon} <span className="font-medium text-gray-800 dark:text-gray-100"> <span className="text-green-500">{item.label}:</span> {item.value} </span> </div>

  
    {item.canCopy && (
      <button
        onClick={() => handleCopy(item.value, index)}
        className="text-gray-500 hover:text-green-500 transition-colors"
        title="Copy to clipboard"
      >
        {copiedIndex === index ? (
          <span className="text-green-500 text-sm">Copied!</span>
        ) : (
          <MdContentCopy size={20} />
        )}
      </button>
    )}
  </motion.li>
  ))}
  </motion.ul>

    {/* Embedded Google Map below contact list */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
      className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700 mt-4"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.477184801543!2d78.43432064186997!3d17.439206206837095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c55bb43183%3A0x1abc135b23ee2703!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1759766767744!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ameerpet Map"
      ></iframe>

     

    </motion.div>
  </AppScreen>
  );
};

export default Contact;
