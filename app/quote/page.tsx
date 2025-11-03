"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Quote = {
  text: string;
  author: string;
  arabic?: string; // Optional Arabic translation
  bangla?: string; // Optional Bangla translation
};

export default function Quote() {
  const quotes: Quote[] = [
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      bangla: "নবপ্রবর্তন একজন নেতাকে অনুসারীর থেকে আলাদা করে।",
    },
    {
      text: "Success is the sum of small efforts, repeated day in and day out.",
      author: "Robert Collier",
      bangla:
        "সাফল্য হলো ছোট ছোট প্রচেষ্টার সমষ্টি, যা প্রতিদিন পুনরাবৃত্তি করা হয়।",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
      bangla: "ভবিষ্যৎ পূর্বাভাস করার সর্বোত্তম উপায় হলো এটি তৈরি করা।",
    },
    {
      text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
      author: "Simon Sinek",
      bangla:
        "নেতৃত্ব মানে ক্ষমতায় থাকা নয়, এটি মানে আপনার দায়িত্বে থাকা মানুষদের যত্ন নেওয়া।",
    },
    {
      text: "Excellence is not a skill, it’s an attitude.",
      author: "Ralph Marston",
      bangla: "উৎকৃষ্টতা একটি দক্ষতা নয়, এটি একটি মনোভাব।",
    },
    {
      text: "Dream big, start small, act now.",
      author: "Unknown",
      bangla: "বড় স্বপ্ন দেখুন, ছোট শুরু করুন, এখনই কাজ শুরু করুন।",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-black text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 pb-3">
        Professional Insights
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="relative bg-gray-900/80 p-6 rounded-3xl shadow-2xl border border-gray-800 perspective"
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="absolute top-4 left-4 text-cyan-400 text-2xl">
              <FaQuoteLeft />
            </div>

            <p className="text-lg sm:text-xl italic mb-3 leading-relaxed">
              {quote.text}
            </p>

            {quote.arabic && (
              <p className="text-right text-lg sm:text-xl italic mb-3 leading-relaxed text-emerald-400">
                {quote.arabic}
              </p>
            )}

            {quote.bangla && (
              <p className="text-right text-lg sm:text-xl italic mb-3 leading-relaxed text-yellow-400">
                {quote.bangla}
              </p>
            )}

            <footer className="text-cyan-400 font-semibold flex items-center justify-end gap-2">
              — {quote.author} <FaQuoteRight />
            </footer>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
