import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profileimg.png';
import DinoGame from '../components/dino.jsx';


const Home = () => {
  const navigate = useNavigate();

  const roles = [
    "Software Engineer . ",
    "Web Developer . ",
    "Backend Developer . ",
    "Open Source Contributor .",
    "Freelancer ."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === roles.length) {
          // Reset instantly to first real item (index 0) after showing the clone
          setIsAnimating(false);
          setTimeout(() => {
            setIsAnimating(true);
            setCurrentIndex(1);
          }, 50);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const techStackIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdsaOH3LxJisOtkMCdTpqEn-HJmauzZl68A&s", alt: "Postman" },
    { src:"https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018721094449d9901f5875_cff297d7.png", alt: "firebase" },
    { src: "https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg", alt: "Render" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "SQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  ];

  return (
    <div className="min-h-screen z-10 text-gray-900 font-sans">
      <main className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-12">
        <div className="relative mb-10 w-40 h-40">
          <div className="absolute inset-0 rounded-full overflow-hidden z-10">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover border-4 border-purple-500 rounded-full z-10"
            />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold leading-tight">
          hi, I'm Adarsh <br />
          <div className="relative h-24 overflow-hidden mt-4 w-full flex justify-center">
            <div
              className={`absolute w-full ${isAnimating ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{ transform: `translateY(-${currentIndex * 6}rem)` }}
            >
              {[...roles, roles[0]].map((role, idx) => (
                <div
                  key={idx}
                  className="h-24 flex items-center justify-center text-4xl font-bold tracking-tight text-white bg-blue-600"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
          Final-year Computer Science student crafting full-stack solutions with MERN, exploring Spring, and growing through consistent problem-solving in DSA.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-16">
          <button
            onClick={() => navigate('/contact')}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Hire Me!
          </button>
          <div className="flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-full font-medium">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2 glow-dot"></span>
            Available for collaborations
          </div>
        </div>

        <section className="mt-20 max-w-4xl text-left px-4 w-full">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Tech I Use ⚡</h2>
          <div className="relative overflow-hidden w-full">
            <div className="flex gap-6 animate-infinite-scroll">
              {[...techStackIcons, ...techStackIcons].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-gray-50 rounded-lg p-4 min-w-[80px] hover:bg-gray-100 transition-colors duration-300"
                >
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-14 h-14 filter grayscale hover:grayscale-0 hover:contrast-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 max-w-4xl text-left px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            I’m <span className="font-semibold text-gray-700">Adarsh Srivastava</span>, a <span className="font-semibold text-gray-700">final-year B.Tech Computer Science student</span> passionate about building clean, scalable, and impactful web applications.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Over the past few years, I’ve <span className="font-semibold text-gray-700">led three hackathon teams</span> to success, developing innovative solutions under tight deadlines. I thrive in collaborative environments and enjoy tackling <span className="font-semibold text-gray-700">complex engineering challenges</span>.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Beyond coding, I stay active by hitting the gym, exploring music, and writing lyrics that reflect creativity and discipline.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/adarsh-srivastava-39a58b284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              LinkedIn
            </a>{' '}
            and{' '}
            <a
              href="https://www.instagram.com/adarsh_2348/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline font-medium"
            >
              Instagram
            </a>
            .
          </p>
        </section>

        <DinoGame />
      </main>

      <style>
        {`
        .glow-dot {
          animation: glowOnOff 1.8s infinite alternate;
        }

        @keyframes glowOnOff {
          from { opacity: 1; filter: brightness(1.5); }
          to { opacity: 0.3; filter: brightness(0.5); }
        }

        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infiniteScroll 25s linear infinite;
        }

        .transition-none {
          transition: none !important;
        }
        `}
      </style>
    </div>
  );
};

export default Home;
