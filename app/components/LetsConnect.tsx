"use client";
import { motion } from "framer-motion";

export default function LetsConnect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="card shadow-md rounded-lg bg-gradient-to-r from-blue-400 to-green-400 text-white p-4">
      <h2 className="text-xl font-semibold mb-2">Let's Connect</h2>
      <p className="text-sm">
        Reach out via my social media or send me a message. I'm always open to
        new ideas!
      </p>
      <div className="mt-3 flex justify-center space-x-3">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-10 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.732 0-.944.784-1.732 1.75-1.732s1.75.788 1.75 1.732c0 .942-.784 1.732-1.75 1.732zm13.5 10.268h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.268c.59-.824 1.617-1.268 2.5-1.268 1.933 0 3.5 1.567 3.5 3.5v5.5z" />
          </svg>
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-neutral btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.223c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.305 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.468-2.381 1.236-3.221-.124-.305-.536-1.53.116-3.188 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.005-.403 1.02.005 2.048.137 3.005.403 2.291-1.552 3.3-1.23 3.3-1.23.653 1.658.241 2.883.118 3.188.768.84 1.236 1.911 1.236 3.221 0 4.61-2.805 5.624-5.475 5.92.431.372.815 1.104.815 2.223v3.293c0 .32.217.694.825.576 4.765-1.588 8.205-6.086 8.205-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
