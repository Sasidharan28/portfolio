import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Section */}
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden md:block">
          <NavbarLinks />
        </div>

        {/* Action Button: Resume */}
        {/* Action Button: Resume Download */}
<div className="hidden md:block">
  <a 
    href="/SasidharanResume.pdf" 
    download="/SasidharanResume.pdf"
    className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-indigo-100 flex items-center gap-2"
  >
     Resume
  </a>
</div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900 text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;