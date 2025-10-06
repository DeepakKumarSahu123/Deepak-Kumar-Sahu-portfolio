import React from 'react';
import AppScreen from './AppScreen';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Chat Application",
    description: "A real-time chat application with authentication and cloud storage. Built with React.js and Firebase.",
    features: [
      "Firebase Authentication & Firestore",
      "Real-time updates",
      "Responsive UI"
    ],
    link: "#",
  },
  {
    title: "Bookstore Management",
    description: "A CRUD-based bookstore management system using Spring Boot, Hibernate, and MySQL.",
    features: [
      "REST APIs",
      "User authentication",
      "Transaction tracking"
    ],
    link: "#",
  },
  {
    title: "YouTube Bookmarker",
    description: "A Chrome extension to bookmark YouTube videos with timestamps. Built with React.js and Chrome Extensions API.",
    features: [
      "User-friendly UI",
      "Local storage",
      "Chrome API integration"
    ],
    link: "#",
  },
  {
    title: "Grilli: Restaurant Website",
    description: "A fully responsive restaurant website built with modern design principles.",
    features: [
      "Responsive layout with CSS Grid & Flexbox",
      "Interactive components using JavaScript",
      "Engaging UI with dynamic elements"
    ],
    link: "#",
  },
  {
    title: "CodePen Editor Clone",
    description: "A React-based clone of the CodePen editor with dynamic UI components.",
    features: [
      "React hooks (useState, useEffect)",
      "State management",
      "Modular and reusable components"
    ],
    link: "#",
  },
  {
    title: "Simple Calculator",
    description: "A lightweight and user-friendly web-based calculator.",
    features: [
      "Basic arithmetic operations",
      "Intuitive interface",
      "Efficient JavaScript logic"
    ],
    link: "#",
  },
  {
    title: "NASA APOD Viewer",
    description: "A web app fetching NASA's Astronomy Picture of the Day via API.",
    features: [
      "NASA APOD API integration",
      "Dynamic rendering of daily images",
      "Responsive UI"
    ],
    link: "#",
  },
  {
    title: "ReactJS To-Do List",
    description: "A task management app built using React for dynamic task handling.",
    features: [
      "Task addition and deletion",
      "State management with React hooks",
      "Local storage integration"
    ],
    link: "#",
  },
  {
    title: "E-commerce Website",
    description: "A fully responsive front-end for an online shopping experience.",
    features: [
      "Product browsing and cart functionality",
      "Responsive design",
      "Future integration with authentication and payments"
    ],
    link: "#",
  },
  {
    title: "Login Authentication System",
    description: "A secure login system using Java Servlets, JSP, and MySQL.",
    features: [
      "User authentication & session management",
      "Secure database storage for user credentials",
      "Access control for protected pages"
    ],
    link: "#",
  }
];

const ProjectApp = ({ onClose }) => {
  return (
    <AppScreen title="Projects" onClose={onClose}>
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div key={idx} className="p-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:text-white bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="font-semibold text-md">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-400 mb-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub Repo <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </AppScreen>
  );
};

export default ProjectApp;
