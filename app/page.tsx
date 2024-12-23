import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import LetsConnect from "./components/LetsConnect";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-8 px-4 py-8">
      {/* Hero Bölümü */}
      <Hero />

      {/* About Me ve Let's Connect */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-4xl">
        <AboutMe />
        <LetsConnect />
      </section>
    </main>
  );
}
