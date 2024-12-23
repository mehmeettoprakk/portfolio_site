"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card shadow-md rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 text-white p-4">
      <h2 className="text-xl font-semibold mb-2">About Me</h2>
      <p className="text-sm">
        I'm a web developer specializing in React and Next.js. I love creating
        innovative solutions and learning new technologies.
      </p>
      <div className="mt-3 flex justify-end">
        <button className="btn btn-primary btn-sm">Contact Me</button>
      </div>
    </motion.div>
  );
}
