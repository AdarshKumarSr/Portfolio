import React from 'react';
import Project from '../components/Project';

const ProjectPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight text-left">
          My Projects
        </h1>
      </div>

      <div className="max-w-5xl w-full space-y-10">

        {/* Project 1: Burrow */}
        <Project
          title="Burrow – AI-Powered Healthcare Assistant"
          description="Burrow is an AI-driven chatbot that helps patients by identifying possible diseases based on symptoms, recommending relevant doctors, and enabling both online and offline appointment booking. It also supports medicine ordering and at-home test booking based on doctor prescriptions."
          github="https://github.com/AdarshKumarSr/Burrow"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10 object-contain" />,
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="AI/ML" className="w-10 h-10 object-contain" />,
          ]}
          color="#AB47BC"
        />

        {/* Project 2: Clowder */}
        <Project
          title="Clowder – AI-Powered Learning Platform"
          description="Clowder is an innovative MERN-based e-learning platform that uses AI to personalize student learning. It features adaptive chapter-based testing, an intelligent code compiler, real-time progress tracking, and community-driven motivation tools."
          status="Ongoing"
          timeline="2024 – Present"
          github="https://github.com/your-username/clowder"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 object-contain" />,
          ]}
          color="#6C63FF"
        />

        {/* Project 3: Code Analyzer */}
        <Project
          title="Code Analyzer – Java Static Analysis Tool"
          description="A web-based Java code analyzer tool using Spring Boot and React. Supports uploading `.java` files or scanning public GitHub repositories. Uses PMD to detect code quality issues and displays rule violations with precise metadata in a clean UI."
          github="https://github.com/AdarshKumarSr/code-analyzer-"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-10 h-10 object-contain" />,
          ]}
          color="#009688"
        />

        {/* Project 4: Air Writing */}
        <Project
          title="Air – Gesture-Based Writing & Face Filter App"
          description="A computer vision-based app enabling users to write in the air using hand gestures and apply face filters. Built with OpenCV and MediaPipe for hand/face tracking, it includes color selection and canvas-clearing features."
          github="https://github.com/AdarshKumarSr/Air"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10 object-contain" />,
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" alt="OpenCV" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mediapipe.svg" alt="MediaPipe" className="w-10 h-10 object-contain" />,
          ]}
          color="#F9A825"
        />

        {/* Project 5: Virtual Classroom */}
        <Project
          title="Virtual Classroom – Real-Time Online Learning"
          description="A virtual classroom built using Flask, HTML, and JS with ZEGOCLOUD integration for real-time audio/video. Features include live conferencing, screen sharing, chat, and a user-friendly interface for remote learning."
          github="https://github.com/AdarshKumarSr/VirtualClassroom"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Flask" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10 object-contain" />,
          ]}
          color="#EF5350"
        />

        {/* Project 6: Real-Time Tracker */}
        <Project
          title="Real-Time Tracker – Live Location Sharing App"
          description="A real-time location sharing app built with Socket.IO and Leaflet. Allows users to share live locations and view others on an interactive map, using browser geolocation and real-time broadcasting via WebSockets."
          github="https://github.com/AdarshKumarSr/real-time-tracker"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 object-contain" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.IO" className="w-10 h-10 object-contain" />,
            <img src="https://raw.githubusercontent.com/Leaflet/Leaflet/master/src/images/logo.svg" alt="Leaflet" className="w-10 h-10 object-contain" />,
          ]}
          color="#26A69A"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
