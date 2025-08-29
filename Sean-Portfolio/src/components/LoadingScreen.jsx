import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Loading...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Neon Robot */}
      <div className="relative flex flex-col items-center mb-8">
        {/* Body */}
        <div className="w-24 h-32 bg-gray-800 border-4 border-blue-500 rounded-lg shadow-neon flex flex-col items-center justify-center relative">
          {/* Eyes */}
          <div className="absolute top-6 flex space-x-3">
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
          </div>
          {/* Antenna */}
          <div className="absolute -top-6 w-2 h-6 bg-blue-500 rounded-full"></div>
          <div className="absolute -top-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          {/* Waving Arm */}
          <div className="absolute -left-8 top-10 w-3 h-16 bg-gray-700 rounded-full origin-top animate-wave"></div>
        </div>
      </div>

      {/* Typing Text */}
      <div className="text-3xl font-mono font-bold text-white flex items-center tracking-widest mb-6">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-3 bg-gray-900 border-2 border-blue-500 rounded relative overflow-hidden shadow-neon">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
