import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Dosya İndirme Yöneticisi",
      description:
        "Java ve eş zamanlı programlama kullanılarak geliştirilmiş bir dosya indirme yöneticisi.",
      link: "https://github.com/mehmeettoprakk/Downloader",
    },
    {
      title: "Youtube Sentiment Analysis",
      description:
        "Python ve yapay sinir ağları kullanılarak geliştirilmiş bir duygu analizi uygulaması.",
      link: "https://github.com/mehmeettoprakk/youtube_sentiment_analysis",
    },
    {
      title: "Flappy Bird",
      description:
        "C# ve Unity kullanılarak geliştirilmiş bir Flappy Bird klonu.",
      link: "https://github.com/mehmeettoprakk/Flappy-Bird",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Projelerim</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
