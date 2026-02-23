const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-white text-slate-900 py-24 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto px-6 w-full">
        
        {/* Unique Side-Aligned Header */}
        <div className="mb-20">
          <p className="text-indigo-600 font-bold tracking-[0.3em] text-xs uppercase mb-3">
            Available for Opportunities
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">
            Let's <span className="italic font-serif text-indigo-600">Connect.</span>
          </h2>
        </div>

        {/* The Unique Interactive List */}
        <div className="space-y-1">
          
          {/* Email One */}
          <a 
            href="mailto:sasi.d9864@gmail.com" 
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-100 hover:px-4 transition-all duration-500 ease-in-out hover:bg-slate-50 rounded-xl"
          >
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">Primary Email</span>
            <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">sasi.d9864@gmail.com</span>
          </a>

          {/* Email Two */}
          <a 
            href="mailto:sasidharanbalu28@gmail.com" 
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-100 hover:px-4 transition-all duration-500 ease-in-out hover:bg-slate-50 rounded-xl"
          >
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">Secondary Email</span>
            <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">sasidharanbalu28@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/sasidharan28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-100 hover:px-4 transition-all duration-500 ease-in-out hover:bg-slate-50 rounded-xl"
          >
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">LinkedIn</span>
            <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight underline decoration-slate-200 decoration-2 underline-offset-8 group-hover:decoration-indigo-500">sasidharan28</span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Sasidharan28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-slate-100 hover:px-4 transition-all duration-500 ease-in-out hover:bg-slate-50 rounded-xl"
          >
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">GitHub</span>
            <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight underline decoration-slate-200 decoration-2 underline-offset-8 group-hover:decoration-indigo-500">Sasidharan28</span>
          </a>

        </div>

        {/* Simplified Footer */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-bold tracking-widest uppercase gap-4">
          <p>© 2026 SASIDHARAN B</p>
          <p>Panimalar Engineering College</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;