// import React from 'react'
// import PhoneFrame from './components/PhoneFrame'
// import AppGrid from './components/AppGrid'
// const App = () => {
//   return (
//     <PhoneFrame>
//       <AppGrid />
//     </PhoneFrame>
//   )
// }

// export default App


import React, { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import AppGrid from './components/AppGrid';

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import LinkedIn from './components/LinkedIn';
import GitHub from './components/GitHub';
import Resume from './components/ResumeApp';
import Education from './components/EducationApp';
import Technologies from './components/Technologies';
import ProjectApp from './components/ProjectApp';
import ThemeToggle from './components/ThemeToggle';
// import ThemeCustomizer from './components/ThemeCustomizer';
import CameraApp from './components/CameraApp';

const App = () => {
  const [activeApp, setActiveApp] = useState(null);

  const closeApp = () => setActiveApp(null);

  const renderActiveApp = () => {
    switch (activeApp) {
      case 'About Me':
        return <AboutMe onClose={closeApp} />;
      case 'Contact':
        return <Contact onClose={closeApp} />;
      case 'LinkedIn':
        return <LinkedIn onClose={closeApp} />;
      case 'GitHub':
        return <GitHub onClose={closeApp} />;
      case 'Resume':
        return <Resume onClose={closeApp} />;
      case 'Education':
        return <Education onClose={closeApp} />;
      case 'Technologies':
        return <Technologies onClose={closeApp} />;
      case 'Project App':
        return <ProjectApp onClose={closeApp} />;
      case 'Theme Toggle':
        return <ThemeToggle onClose={closeApp} />;
      // case 'Theme Customizer':
      //   return <ThemeCustomizer onClose={closeApp} />;
      case 'Camera':
        return <CameraApp onClose={closeApp} />;
      default:
        return <AppGrid onAppClick={(appName) => setActiveApp(appName)} />;
    }
  };

  return <PhoneFrame>{renderActiveApp()}</PhoneFrame>;
};

export default App;
