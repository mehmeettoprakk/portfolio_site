interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-medium transition">
        Projeyi Görüntüle
      </a>
    </div>
  );
}
