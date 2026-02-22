const Skills = () => {
  const skillGroups = [
    {
      category: "Frontend & Web",
      items: "HTML, CSS, JavaScript, React, Tailwind CSS",
      icon: "🌐"
    },
    {
      category: "Programming",
      items: "Java, C",
      icon: "💻"
    },
    {
      category: "Database & Tools",
      items: "MySQL, Git, VS Code, MS Excel",
      icon: "🛠️"
    },
    {
      category: "Advanced Focus",
      items: "Generative AI, Machine Learning, Cybersecurity",
      icon: "🚀"
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-white text-slate-900 py-20 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Heading & Context */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Technical <span className="text-indigo-600">Expertise</span>
              </h2>
              <div className="h-1.5 w-16 bg-indigo-600 rounded-full mt-2"></div>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-md">
              My technical foundation is built on modern web technologies and 
              strong core programming logic developed through academic projects 
              and professional certifications.
            </p>

            <div className="p-6 bg-slate-50 border-l-4 border-indigo-600 rounded-r-2xl">
              <p className="text-sm text-slate-500 uppercase font-bold tracking-widest mb-1">
                Primary Stack
              </p>
              <p className="text-lg font-bold text-slate-800">
                React.js & Java Developer
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Skill Cards */}
          <div className="grid gap-6">
            {skillGroups.map((group, index) => (
              <div 
                key={index}
                className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{group.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <p className="text-lg font-semibold text-slate-700">
                      {group.items}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;