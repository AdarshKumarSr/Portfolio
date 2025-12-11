import React from 'react';
import Project from '../components/project.jsx';

const ProjectPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-12"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <div className="w-full max-w-5xl">
        <h1
          className="text-4xl font-extrabold mb-12 tracking-tight text-left"
          style={{ color: 'var(--text-color)' }}
        >
          My Projects
        </h1>
      </div>

      <div className="max-w-5xl w-full space-y-10">

        {/* Project 1: Burrow */}
        <Project
          title="Burrow – AI-Powered Healthcare Assistant"
          description="Burrow is an AI-driven chatbot that helps patients by identifying possible diseases based on symptoms, recommending relevant doctors, and enabling both online and offline appointment booking. It also supports medicine ordering and at-home test booking based on doctor prescriptions."
          github="https://github.com/AdarshKumarSr/Burrow"
          live="https://burrow-3.onrender.com/"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" />,
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" className="w-10 h-10" />,
          ]}
          color="#AB47BC"
        />

        {/* Project: Smart Recipe Generator */}
        <Project
          title="Smart Recipe Generator – AI-Powered Cooking Assistant"
          description="An intelligent recipe generation and recommendation system built using Spring Boot, React, MongoDB, and Gemini AI. Supports ingredient-based search, advanced filtering, AI fallback recipe generation, and secure authentication with Google OAuth + JWT. Fully cloud deployed with CI-ready architecture."
          github="https://github.com/AdarshKumarSr/Smart-Recipe-Generator-frontend-"
          live="https://smart-recipe-generator-frontend-zoy3.onrender.com/"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" />,
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-10 h-10" />,
          ]}
          color="#4CAF50"
        />

        {/* SoberDevs */}
        <Project
          title="SoberDevs – Software Agency Portfolio Website"
          description="Crafting digital experiences that push boundaries and redefine possibilities."
          github="https://github.com/AdarshKumarSr/SoberDevs"
          live="https://soberdevs.vercel.app/"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-10 h-10" />,
          ]}
          color="#6C63FF"
        />

        {/* Clowder */}
        <Project
          title="Clowder – AI-Powered Learning Platform"
          description="Clowder is an innovative MERN-based e-learning platform that uses AI to personalize student learning. It features adaptive chapter-based testing, an intelligent code compiler, real-time progress tracking, and community-driven motivation tools."
          github="https://github.com/AdarshKumarSr/ClowderMain"
          status="Ongoing"
           note="This is my major project. The repository is private for security reasons."
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" />,
          ]}
          color="#6C63FF"
        />

        {/* Code Analyzer */}
        <Project
          title="Code Analyzer – Java Static Analysis Tool"
          description="A web-based Java code analyzer tool using Spring Boot and React. Supports uploading `.java` files or scanning public GitHub repositories. Uses PMD to detect code quality issues and displays rule violations with precise metadata in a clean UI."
          github="https://github.com/AdarshKumarSr/code-analyzer-"
          status="Ongoing"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-10 h-10" />,
          ]}
          color="#009688"
        />

        {/* Foodie */}
        <Project
          title="Foodie – Random Food Suggestion App"
          description="A fun MERN food suggestion app that gives random dish ideas with a clean UI."
          github="https://github.com/AdarshKumarSr/Foodie"
          live="https://foodie-1-d2yw.onrender.com"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" />,
          ]}
          color="#FF7043"
        />

        {/* Air */}
        <Project
          title="Air – Gesture-Based Writing & Face Filter App"
          description="A computer vision-based app letting users write in the air using gestures & apply face filters."
          github="https://github.com/AdarshKumarSr/Air"
          status="Ongoing"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" />,
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mediapipe.svg" className="w-10 h-10" />,
          ]}
          color="#F9A825"
        />

        {/* Virtual Classroom */}
        <Project
          title="Virtual Classroom – Real-Time Online Learning"
          description="A real-time classroom app using Flask + JS with audio/video, screen share & chat."
          github="https://github.com/AdarshKumarSr/VirtualClassroom"
          status="Ongoing"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10" />,
          ]}
          color="#EF5350"
        />

        {/* Real-Time Tracker */}
        <Project
          title="Real-Time Tracker – Live Location Sharing App"
          description="A real-time map-based tracker using Socket.IO + Leaflet."
          github="https://github.com/AdarshKumarSr/real-time-tracker"
          status="Ongoing"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" className="w-10 h-10" />,
            <img src="https://raw.githubusercontent.com/Leaflet/Leaflet/master/src/images/logo.svg" className="w-10 h-10" />,
          ]}
          color="#26A69A"
        />

      </div>
    </div>
  );
};

export default ProjectPage;
