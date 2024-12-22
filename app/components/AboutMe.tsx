export default function AboutMe() {
  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-4xl shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-primary">
            About Me
          </h2>
          <p className="text-gray-700 text-lg">
            I'm a passionate web developer with a love for creating beautiful
            and functional web applications. I specialize in frontend
            technologies like React, Next.js, and Tailwind CSS, and I enjoy
            learning new skills to keep up with the ever-evolving tech
            landscape.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            In my free time, I love to explore new places, read books, and
            experiment with new coding projects.
          </p>
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Contact Me</button>
            <button className="btn btn-outline">View My Work</button>
          </div>
        </div>
      </div>
    </section>
  );
}
