const About = () => {
  // Add new certificates here to keep your portfolio updated
  const myCertifications = [
    { name: "Front End Web Developer Certification", org: "Infosys Springboard", date: "Sept 2025" },
    { name: "Programming in Java (Elite)", org: "NPTEL", date: "Oct 2024" },
    { name: "OCI Generative AI Professional", org: "Oracle", date: "July 2024" },
    { name: "Cybersecurity Analysis & Design", org: "NASSCOM", date: "June 2024" },
    { name: "Introduction to Machine Learning", org: "NPTEL", date: "Sept 2025" },
    { name: "Career Essentials in Generative AI", org: "Microsoft & LinkedIn", date: "Aug 2025" },
    { name: "OCI AI Foundations Associate", org: "Oracle", date: "Aug 2025" },
    { name: "Introduction to Artificial Intelligence", org: "Great Learning", date: "July 2024" }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white text-slate-900 py-10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* items-center ensures both columns stay perfectly level at the center of the screen */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Professional Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                About <span className="text-indigo-600">Me</span>
              </h2>
              <div className="h-1.5 w-16 bg-indigo-600 rounded-full mt-2"></div>
            </div>

            <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                I am a 3rd-year Computer Science Engineering student at 
                <span className="text-slate-900 font-bold"> Panimalar Engineering College</span>. 
                I specialize in building responsive React applications and robust backend systems[cite: 4, 16].
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                  <span>Frontend Intern at <span className="font-bold text-slate-800">QSpiders</span>[cite: 15].</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                  <span>Currently maintaining an <span className="font-bold text-slate-900 text-indigo-600">8.45 CGPA</span>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                  <span>Committed to writing clean, maintainable code for scalable projects[cite: 5].</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: Centered Certification Panel */}
          <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 lg:p-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 border-l-4 border-indigo-600 pl-4">
              Certifications
            </h3>

            {/* Scrollable container for future growth */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {myCertifications.map((cert, i) => (
                <div key={i} className="group flex justify-between items-center py-3 border-b border-slate-200 last:border-0 hover:border-indigo-300 transition-colors">
                  <div className="pr-4">
                    <p className="font-bold text-slate-800 text-sm md:text-base group-hover:text-indigo-600 transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                      {cert.org}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;