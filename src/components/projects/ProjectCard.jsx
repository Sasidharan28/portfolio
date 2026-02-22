const ProjectCard = ({ title, description, tech }) => {
  return (
    <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-500 transition-all duration-300 flex flex-col h-full">
      <h3 className="text-lg font-bold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md tracking-wider">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;