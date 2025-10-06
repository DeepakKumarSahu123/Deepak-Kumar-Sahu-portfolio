import React from 'react';
import AppScreen from './AppScreen';
import { useEffect } from 'react';
const GitHub = ({ onClose }) => {
    useEffect(() => {
       window.open("https://github.com/DeepakKumarSahu123", "_blank");
       setTimeout(() => {
         onClose();
       }, 1000);// close the app screen after opening
     }, []);


  return (
    <AppScreen title="GitHub" onClose={onClose}>
      <div className="p-4 text-center">
        <p className="text-gray-600">Opening GitHub Profile...</p>
      </div>
    </AppScreen>
  );
};

export default GitHub;
