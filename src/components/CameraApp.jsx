import React, { useEffect, useRef, useState } from 'react';
import AppScreen from './AppScreen';

const CameraApp = ({ onClose }) => {
  const videoRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const stopCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        try {
          track.stop();
        } catch (err) {
          console.error('Error stopping track:', err);
        }
      });
      video.srcObject = null;
    }
  };

  const handleClose = () => {
    stopCamera();
    onClose();
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Camera error:', err);
        setErrorMessage('Camera access denied or unavailable.');
      }
    };

    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <AppScreen title="Camera" onClose={handleClose}>
      {errorMessage ? (
        <div className="text-red-600 dark:text-red-400 text-sm mt-4 text-center">
          {errorMessage}
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full rounded-lg shadow-md border dark:border-gray-600"
        />
      )}
    </AppScreen>
  );
};

export default CameraApp;
