const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white text-slate-900 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Professional Content */}
          <div className="space-y-6">
            <p className="text-indigo-600 font-bold tracking-wider text-sm uppercase">
              Computer Science Engineering Student
            </p>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
              Sasidharan B
            </h1>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Seeking opportunities to enhance my technical skills in 
              <span className="font-semibold text-slate-900"> Java</span>, 
              <span className="font-semibold text-slate-900"> React</span>, and 
              <span className="font-semibold text-slate-900"> Frontend Development</span>.
            </p>

            <div className="flex flex-col space-y-2 text-slate-500">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                Currently pursuing B.E. at Panimalar Engineering College
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                Maintaining a strong academic record with 8.45 CGPA
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Unique Student-Professional Profile Design */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              
              {/* Subtle Static Background Glow */}
              <div className="absolute inset-0 bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10 scale-125"></div>

              {/* Profile Image with Thin Gradient Border */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-200 to-slate-200 shadow-2xl">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white border-[6px] border-white overflow-hidden">
                  <img 
                    src="/Profile.jpg"
                    alt="Sasidharan B"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* High-Contrast CGPA Badge */}
              <div className="absolute -bottom-2 right-8 bg-slate-900 text-white px-6 py-2.5 rounded-2xl shadow-xl border border-slate-800">
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-0.5">Current CGPA</p>
                <p className="text-2xl font-black leading-none text-center tracking-tight">8.45</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;