const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white text-slate-900 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
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
              <p>• Currently pursuing B.E. at Panimalar Engineering College</p>
              <p>• Maintaining a strong academic record with 8.45 CGPA</p>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Profile Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-100 border-8 border-slate-50 shadow-inner overflow-hidden">
                <img 
                  src="/Profile.jpg"
                  alt="Sasidharan B"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CGPA Badge */}
              <div className="absolute -bottom-2 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md">
                <p className="text-xs font-bold uppercase">CGPA</p>
                <p className="text-lg font-bold leading-none text-center">8.45</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;