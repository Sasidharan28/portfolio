const NavbarLinks = () => {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <ul className="flex gap-4">
      {navItems.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 text-sm font-semibold text-slate-600 rounded-xl transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;