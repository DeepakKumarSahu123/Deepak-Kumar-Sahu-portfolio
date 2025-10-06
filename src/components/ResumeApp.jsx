import React from 'react';
import AppScreen from './AppScreen';
import { useEffect } from 'react';

const ResumeApp = ({ onClose }) => {

  useEffect(() => {
      window.open("/deepak-resume.pdf", "_blank");
      setTimeout(() => {
        onClose();
      }, 1000);// close the app screen after opening
    }, []);

  return (
    <AppScreen title="Resume" onClose={onClose}>
       <div className="p-4 text-center">
        <p className="text-gray-600">Opening Resume...</p>
      </div>
    </AppScreen>
  );
};

export default ResumeApp;
