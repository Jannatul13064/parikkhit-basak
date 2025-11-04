"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { main } from "framer-motion/client";

// Define the type for each work item
type WorkItem = {
  title: string;
  role: string;
  desc: string;
  img: string;
};

const works: WorkItem[] = [
  {
    title: "Advanced ABC Group",
    role: "Group Managing Director",
    desc: "Leading a diversified conglomerate driving innovation in healthcare, automation, and renewable energy.",
    img: "/images/work/abc-group.png",
  },
  {
    title: "Biomedical Engineers Association of Bangladesh (BEAB)",
    role: "Founder & President",
    desc: "Empowering biomedical professionals and advancing healthcare technology nationwide.",
    img: "/images/work/beab.png",
  },
  {
    title: "IVD & Lab Automation",
    role: "Technical Expert & Project Lead",
    desc: "Directed installation and integration of Siemens, Bio-Rad, and Maglumi analyzers.",
    img: "/images/work/ivd-project.png",
  },
  {
    title: "Sister Concerns Oversight",
    role: "Strategic Leadership",
    desc: "Providing leadership to ABC Corporation, ABC Biotek, SPAR Industries, and more.",
    img: "/images/work/sister-concerns.jpg",
  },
  {
    title: "Renewable Energy Projects",
    role: "Strategic Advisor",
    desc: "Oversaw large-scale solar and renewable energy projects promoting sustainability.",
    img: "/images/work/renewable-energy.jpg",
  },
];

// Reusable interactive Card component
function Card({ title, role, desc, img }: WorkItem) {
  return (
    <motion.div
      className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden w-72 md:w-80 lg:w-96 flex-shrink-0 cursor-pointer"
      initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
      whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div>
        <div className="h-48 w-full relative overflow-hidden rounded-t-3xl">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
            {role}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop continuous scrolling
  useEffect(() => {
    if (isMobile || paused) return;

    const container = containerRef.current;
    if (!container) return;

    const width = container.scrollWidth / 2; // half width for seamless loop
    const duration = width / 100; // adjust speed

    controls.start({
      x: [-width, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [isMobile, paused, controls]);

  // Render reusable cards
  const renderCards = (items: WorkItem[]) =>
    items.map((w, i) => <Card key={i} {...w} />);

  return (
    <section className="relative flex flex-col items-center py-16 px-4 md:px-8 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-center pb-3">
        Leadership
      </h2>

      {/* Mobile Carousel */}
      {isMobile ? (
        <div className="relative w-full max-w-sm h-[500px] mx-auto overflow-hidden rounded-3xl">
          <motion.div
            className="flex w-full h-full gap-4 px-2"
            drag="x"
            dragElastic={0.25}
            dragConstraints={{ left: 0, right: 0 }}
          >
            {renderCards(works)}
          </motion.div>
        </div>
      ) : (
        // Desktop Breaking News ticker
        <div
          ref={containerRef}
          className="relative w-full max-w-6xl overflow-hidden cursor-grab"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={controls}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setPaused(true)}
            onDragEnd={() => setPaused(false)}
          >
            {renderCards([...works, ...works])}{" "}
            {/* duplicated for seamless loop */}
          </motion.div>
        </div>
      )}
    </section>
  );
}
