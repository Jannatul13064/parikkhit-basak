"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaJsSquare,
  FaDatabase,
  FaNodeJs,
  FaCloud,
} from "react-icons/fa";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Engr. Parikshit Basak";
  const icons = [FaReact, FaJsSquare, FaDatabase, FaNodeJs, FaCloud];
  const orbitRadius = 200;

  useEffect(() => setMounted(true), []);

  // Typing animation
  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden text-center py-20 px-4"
    >
      {/* === Profile Image === */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden flex items-center justify-center border-[4px] border-white/10 shadow-[0_0_120px_rgba(37,99,235,0.6)]"
      >
        {/* Rotating glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-blue-500/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        {/* Soft pulsing aura */}
        <motion.div
          className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <Image
          src="/images/personal/profile.png"
          alt="Engr. Parikshit Basak"
          fill
          sizes="(max-width: 768px) 280px, 340px"
          className="object-cover rounded-full"
          priority
        />
      </motion.div>

      {/* === Name Typing === */}
      <motion.h1
        className="mt-10 text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {displayedName}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[3px] bg-blue-400 ml-1 h-[1em] align-bottom"
        />
      </motion.h1>

      {/* === Title === */}
      <motion.p
        className="text-blue-300/90 text-lg sm:text-xl font-medium mt-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        Technical Director — Advanced ABC Group
      </motion.p>

      {/* === Description === */}
      <motion.p
        className="text-gray-300 text-base sm:text-lg mt-6 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Passionate about blending engineering precision with creative
        innovation. Expert in full-stack architecture, automation, and AI-driven
        systems — delivering scalable, intelligent, and impactful digital
        solutions.
      </motion.p>

      {/* === Buttons === */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        <Link
          href="/about"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-transform duration-300"
        >
          Discover His Work
        </Link>
        <Link
          href="/cv"
          className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-black font-semibold transition"
        >
          View CV
        </Link>
      </motion.div>
    </motion.section>
  );
}
