"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-center text-center text-base-content">
      <h1 className="text-5xl font-bold">
        Hello,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          I'm
        </span>
      </h1>
      <h2 className="text-4xl font-bold mt-4">
        <Typewriter
          words={["Web Developer", "Frontend Engineer", "Creative Coder"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <Link
        href="/projects"
        className="mt-8 btn btn-primary px-6 py-3 rounded-lg transition duration-300">
        Projelerimi Gör
      </Link>
    </section>
  );
}
