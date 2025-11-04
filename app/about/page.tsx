"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaIndustry, FaAward, FaUsersCog, FaGlobeAsia } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";

export default function About() {
  const features = [
    {
      icon: <FaIndustry />,
      title: "Engineering Leadership",
      description:
        "Over 15 years of expertise in electrical and electronic engineering, leading large-scale industrial operations and production excellence.",
      color: "text-blue-400",
    },
    {
      icon: <FaUsersCog />,
      title: "Team Development",
      description:
        "Empowering multidisciplinary teams through strategic mentoring, technical training, and performance optimization.",
      color: "text-emerald-400",
    },
    {
      icon: <FaAward />,
      title: "Operational Excellence",
      description:
        "Recognized for driving efficiency, quality, and compliance with ISO 9001 & 14001 standards in high-tech manufacturing environments.",
      color: "text-yellow-400",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Global Vision",
      description:
        "Advancing ABC Corporation’s international reputation through innovation, sustainability, and world-class engineering practices.",
      color: "text-purple-400",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === Profile Image === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="absolute inset-0 rounded-full scale-125" />
          <Image
            src="/images/personal/profile.png"
            alt="Parikshit Basak"
            width={350}
            height={350}
            className="rounded-2xl border-4 border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.4)] object-cover"
            priority
          />
        </motion.div>

        {/* === Bio Information === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r  from-cyan-300 to-purple-400 bg-clip-text text-transparent pb-4">
            Parikshit Basak
          </h1>

          <h2 className="text-xl text-blue-400 font-semibold mb-6">
            Technical Director — ABC Corporation
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            Dynamic engineering professional with more than{" "}
            <span className="text-emerald-400 font-semibold">
              15 years of industrial experience
            </span>{" "}
            in production management, process optimization, and
            technology-driven growth. Skilled in{" "}
            <span className="text-blue-400 font-semibold">
              electrical & electronic engineering, HR leadership, and strategic
              planning
            </span>
            , delivering consistent excellence through innovation and teamwork.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/work"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View His Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-black font-semibold transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* === Feature Highlights === */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="bg-gray-900/70 p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500/50 cursor-pointer flex flex-col items-center text-center"
          >
            <div className={`text-4xl mb-4 ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
