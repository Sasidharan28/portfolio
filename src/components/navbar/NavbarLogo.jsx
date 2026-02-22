const NavbarLogo = () => {
  return (
    <div className="group cursor-pointer">
      <h1 className="text-xl font-black tracking-tighter text-slate-900">
        SASIDHARAN <span className="text-indigo-600">B.</span>
      </h1>
      <div className="h-1 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></div>
    </div>
  );
};

export default NavbarLogo;