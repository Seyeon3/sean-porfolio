import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link, isVisible, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg overflow-hidden group hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/30 transform transition-all duration-700"
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors duration-300 shadow-md"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

export const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Tailwind CSS.",
      image: "/portfolio.jpg",
      link: "https://yourportfolio.com",
    },
    {
      title: "BerdeVentures Travel Booking",
      description: "An online travel agency booking system",
      image: "/travel.jpg",
      link: "https://seyeon3.github.io/Travel-Website/",
    },
    {
      title: "Philippine National Bank",
      description: "an online banking system with admin and user roles",
      image: "/PNB.jpg",
      link: "https://yourblogplatform.com",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="project"
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-gradient-x"></div>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Floating Neon Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-28 h-28 border-4 border-cyan-400 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-32 h-32 border-4 border-purple-500 rotate-45 opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-amber-300 rounded-full"
          style={{
            width: Math.random() * 5 + 3 + "px",
            height: Math.random() * 5 + 3 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: 0.5,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-white relative"
        >
          <span className="relative z-10 drop-shadow-[0_0_10px_#3b82f6]">
            Projects
          </span>
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              link={proj.link}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background animation keyframes */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 18s ease infinite;
        }
      `}</style>
    </section>
  );
};
