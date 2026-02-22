const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-white text-slate-900 py-24 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        
        {/* Simple Professional Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Primary Email - Navigates to Mail App */}
          <a 
            href="mailto:sasi.d9864@gmail.com" 
            className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group"
          >
            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2">Primary Email</p>
            <p className="text-sm md:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              sasi.d9864@gmail.com
            </p>
          </a>

          {/* Secondary Email - Navigates to Mail App */}
          <a 
          
            href="mailto:sasidharanbalu28@gmail.com" 
            className="p-8 border border-slate-100 rounded-3xl bg-slate-50/50 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group"
          >
            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2">Secondary Email</p>
            <p className="text-sm md:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              sasidharanbalu28@gmail.com
            </p>
          </a>

          {/* LinkedIn - Professional Navigation */}
          <a 
            href="https://www.linkedin.com/in/sasidharan28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-8 border border-slate-100 rounded-3xl hover:border-indigo-600 hover:shadow-lg transition-all duration-300 group"
          >
            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2">LinkedIn</p>
            <p className="text-sm md:text-base font-bold text-slate-900 group-hover:text-indigo-600">
              sasidharan28
            </p>
          </a>

          {/* GitHub - Professional Navigation */}
          <a 
            href="https://github.com/Sasidharan28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-8 border border-slate-100 rounded-3xl hover:border-indigo-600 hover:shadow-lg transition-all duration-300 group"
          >
            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2">GitHub</p>
            <p className="text-sm md:text-base font-bold text-slate-900 group-hover:text-indigo-600">
              Sasidharan28
            </p>
          </a>

        </div>

        {/* Professional Footer */}
        <div className="mt-24 text-slate-400 text-sm">
          <p>© 2026 Sasidharan B. Computer Science Student at Panimalar Engineering College.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;