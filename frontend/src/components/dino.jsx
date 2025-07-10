import React, { useState, useEffect, useRef } from 'react';
import profile from '../assets/profileimg.png'; // 👈 make sure the path is correct

const DinoGame = () => {
  const [jump, setJump] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const obstacleRef = useRef(null);
  const dinoRef = useRef(null);

  // Handle Jump
  useEffect(() => {
    const handleSpace = (e) => {
      if (e.code === 'Space' && !jump && !isGameOver) {
        setJump(true);
        setTimeout(() => setJump(false), 500);
      }
    };
    window.addEventListener('keydown', handleSpace);
    return () => window.removeEventListener('keydown', handleSpace);
  }, [jump, isGameOver]);

  // Score counter
  useEffect(() => {
    let interval;
    if (!isGameOver) {
      interval = setInterval(() => {
        setScore((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameOver]);

  // Collision detection
  useEffect(() => {
    const checkCollision = setInterval(() => {
      if (dinoRef.current && obstacleRef.current && !isGameOver) {
        const dino = dinoRef.current.getBoundingClientRect();
        const obstacle = obstacleRef.current.getBoundingClientRect();

        if (
          dino.bottom > obstacle.top &&
          dino.top < obstacle.bottom &&
          dino.right > obstacle.left &&
          dino.left < obstacle.right
        ) {
          setIsGameOver(true);
        }
      }
    }, 50);

    return () => clearInterval(checkCollision);
  }, [isGameOver]);

  // Restart game
  const restartGame = () => {
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div className="mt-20 w-full flex flex-col items-start px-4 max-w-4xl">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        🏃 Adarsh Run <span className="text-sm font-normal">(Press Space to Jump)</span>
      </h3>

      <div className="relative w-full h-40 bg-gray-100 rounded-lg border overflow-hidden">
        {/* Dino (Adarsh's logo) */}
        <img
          ref={dinoRef}
          src={profile}
          alt="Adarsh"
          className={`absolute bottom-2 left-10 w-10 h-10 rounded-full border-2 border-purple-500 object-cover transition-transform duration-300 ${
            jump ? '-translate-y-24' : ''
          }`}
        />

        {/* Obstacle */}
        {!isGameOver && (
          <div
            ref={obstacleRef}
            className="absolute bottom-2 right-0 w-6 h-6 bg-red-500 rounded-md animate-obstacle"
          ></div>
        )}

        {/* Game Over Overlay */}
        {isGameOver && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-2xl font-bold">💥 Game Over</p>
            <button
              onClick={restartGame}
              className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition"
            >
              Restart
            </button>
          </div>
        )}
      </div>

      <p className="mt-2 text-lg text-gray-600">Score: {score}</p>

      <style>
        {`
          @keyframes obstacleMove {
            0% { right: -10%; }
            100% { right: 100%; }
          }
          .animate-obstacle {
            animation: obstacleMove 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default DinoGame;
