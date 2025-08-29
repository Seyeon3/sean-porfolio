import { useEffect, useState } from "react";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="text-center z-10 px-4 max-w-3xl">
        <h1
          className={`text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-snug
            transform transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
            `}
          style={{
            backgroundSize: "200% auto",
            animation: "text-shift 4s linear infinite",
          }}
        >
          Hi, I'm Sean Michael!
        </h1>

        <p
          className={`text-gray-400 text-lg mb-8 mx-auto max-w-lg
            transition-opacity duration-1000 delay-300 ease-out
            ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          A passionate developer with a love for creating innovative solutions.
        </p>

        <div
          className={`flex justify-center space-x-4
            transition-opacity duration-1000 delay-500 ease-out
            ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <a
            href="/CV-MANAOG.pdf" // Place your resume.pdf in the "public" folder
            download="CV-MANAOG.pdf"
            className="bg-blue-500 text-white py-3 px-8 rounded font-medium relative overflow-hidden 
                    hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
                     transition transform duration-300"
          >
            Download Resume
          </a>

          <a
            href="Contact.jsx"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
