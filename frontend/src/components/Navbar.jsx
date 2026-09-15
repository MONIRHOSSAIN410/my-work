import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const linkBase =
  "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-gradient bg-[length:200%_200%] animate-gradient-move shadow-lg">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-white font-bold text-lg sm:text-xl tracking-tight"
        >
          Search<span className="text-brand-200">&</span>Contact
        </motion.div>

        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-white text-brand-700 shadow"
                  : "text-white/90 hover:bg-white/15"
              }`
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-white text-brand-700 shadow"
                  : "text-white/90 hover:bg-white/15"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
