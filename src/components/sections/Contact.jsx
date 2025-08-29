import { useState } from "react";
import { Mail, Phone, MapPin, User, Send } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen relative p-6 flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-gradient-x"></div>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Floating Neon Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border-4 border-cyan-400 rounded-full opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-40 h-40 border-4 border-purple-500 rotate-45 opacity-40"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-amber-400 opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-300 rounded-full"
          style={{
            width: Math.random() * 6 + 4 + "px",
            height: Math.random() * 6 + 4 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: 0.5,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Contact Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
      >
        {/* Left – Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl p-6 space-y-5">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            Contact Me
          </h2>

          <div className="space-y-3 text-white text-sm">
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-300" size={18} />
              <span>seanmanaog22@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-300" size={18} />
              <span>+63 927 956 6746</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-red-300" size={18} />
              <span>Caloocan City, Metro Manila, Philippines</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" size={16} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" size={16} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                placeholder="Your message..."
                className="w-full px-3 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-amber-400 hover:from-amber-400 hover:to-teal-400 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-sm"
            >
              <Send size={16} /> Send Message
            </motion.button>
          </form>
        </div>

        {/* Right – Google Map */}
        <div className="h-[350px] md:h-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.955554587875!2d120.9929469738236!3d14.658463775659932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b684ef88482b%3A0xe776895abd38c026!2s173%20General%20Evangelista%2C%20Bagong%20Barrio%20West%2C%20Caloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1755074266079!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* Background animation keyframes */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
};
