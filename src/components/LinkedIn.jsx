import React, { useEffect } from 'react';
import AppScreen from './AppScreen';

const LinkedInApp = ({ onClose }) => {
  useEffect(() => {
    window.open("https://www.linkedin.com/in/deepak-kumar-sahu-036342231/", "_blank");

    setTimeout(() => {
      onClose();
    }, 1000);// close the app screen after opening
  }, []);

  return (
    <AppScreen title="LinkedIn" onClose={onClose}>
      <div className="p-4 text-center">
        <p className="text-gray-600">Opening LinkedIn Profile...</p>
      </div>
    </AppScreen>
  );
};

export default LinkedInApp;
