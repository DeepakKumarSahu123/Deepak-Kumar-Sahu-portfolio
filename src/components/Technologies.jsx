

import React from 'react';
import AppScreen from './AppScreen';

const techCategories = {
  Frontend: [
    { name: 'HTML', image: 'techImages/html-img.png' },
    { name: 'CSS', image: 'techImages/css-img.png' },
    { name: 'JavaScript', image: 'techImages/java-script-img.png' },
    { name: 'React', image: 'techImages//react-img.png' },
    // { name: 'Tailwind CSS', image: 'techImages/tailwind-css-img.png' },
    { name: 'Bootstrap', image: 'techImages/bootstrap-img.png' },
  ],
  Backend: [
    { name: 'Java', image: 'techImages/java-img.png' },
    { name: 'Spring Boot', image: 'techImages/spring-boot-img.png' },
    { name: 'Hibernate', image: 'techImages/hibernate-ar21.svg' }, // if you add
    { name: 'JPA', image: 'techImages/jpa-img.jpg' },             // if you add
    { name: 'JDBC', image: 'techImages/jdbc-img.webp' },           // if you add
    { name: 'MySQL', image: 'techImages/mysql-img.png' },
    { name: 'REST API', image: 'techImages/restapi-img.png' },    // if you add
  ],
  Tools: [
    { name: 'Git', image: 'techImages/git-img.png',},
    { name: 'Postman', image: 'techImages/postman-img.png'},
    { name: 'ChatGPT', image: 'techImages/chatgpt-img.svg'}
  ]
};

const Technologies = ({ onClose }) => {
  return (
    <AppScreen title="Tech Stack" onClose={onClose}>
      {Object.entries(techCategories).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="text-md font-semibold dark:text-white mb-2">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {items.map(({ name, image }, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-20 text-center"
              >
                <img
                  src={image}
                  alt={name}
                  className="cursor-pointer w-10 h-10 object-contain mb-1 transition-transform duration-300 hover:scale-110"
                />
                <span className="text-xs dark:text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AppScreen>
  );
};

export default Technologies;

