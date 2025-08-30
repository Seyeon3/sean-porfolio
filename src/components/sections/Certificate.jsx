import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "PostgreSQL Course",
    img: "/postgreSql.jpg",
    desc: "Completed a comprehensive course in PostgreSQL.",
  },
  {
    id: 2,
    title: "Fundamentals of Statistics with MS Excel",
    img: "/EXCEL.jpg",
    desc: "Certified in statistics using Microsoft Excel.",
  },
  {
    id: 3,
    title: "Cisco HTML Eessentials",
    img: "/HTML.jpg",
    desc: "Certified in HTML essentials by Cisco.",
  },
];

export default function Certificate() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // ⏳ Auto-slide every 8 seconds (mas mabagal)
  useEffect(() => {
    const next = () =>
      setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

    timeoutRef.current = setInterval(next, 8000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="certificates"
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 pt-16 pb-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-gradient-x" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Floating Neon Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-28 h-28 border-4 border-cyan-400 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-24 right-16 w-32 h-32 border-4 border-purple-500 rotate-45 opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-2xl md:text-3xl font-bold mb-10 drop-shadow-[0_0_8px_#3b82f6] flex items-center gap-2"
      >
        <Award className="text-yellow-400" /> My Certificates
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={certificates[current].id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-5 flex flex-col items-center"
          >
            <img
              src={certificates[current].img}
              alt={certificates[current].title}
              className="w-full h-[360px] object-contain rounded-lg shadow-lg bg-white/5"
            />
            <h3 className="text-lg font-semibold mt-4 text-cyan-300">
              {certificates[current].title}
            </h3>
            <p className="text-gray-300 text-sm mt-1 text-center px-2">
              {certificates[current].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-cyan-500/80 hover:bg-cyan-600 text-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-cyan-500/80 hover:bg-cyan-600 text-white p-2 rounded-full shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex gap-2 mt-6">
        {certificates.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border border-white cursor-pointer transition-all ${
              index === current
                ? "bg-cyan-400 scale-125 shadow-[0_0_6px_#22d3ee]"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 20s ease infinite;
        }
      `}</style>
    </section>
  );
}
