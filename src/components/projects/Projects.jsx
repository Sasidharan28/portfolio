import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Network Performance Analyzer",
      description: "System to monitor network performance by analyzing latency, packet loss, and bandwidth usage.",
      tech: ["Networking", "Analysis"]
    },
    {
      title: "Hub Music App",
      description: "Full-stack music application with secure user authentication and firewall-based backend.",
      tech: ["React", "Security"]
    },
    {
      title: "Portfolio Website",
      description: "Professional portfolio built using React and Tailwind CSS to showcase academic credentials.",
      tech: ["React", "Tailwind"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-white py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Simple Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Projects
          </h2>
          <div className="h-1 w-12 bg-indigo-600 rounded-full mt-2"></div>
        </div>

        {/* Compact 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>

        {/* Planned empty space below for future growth */}
      </div>
    </section>
  );
};

export default Projects;