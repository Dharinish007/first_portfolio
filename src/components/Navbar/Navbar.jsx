export const navLinks = [
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 border-b border-slate-200/50 py-4 shadow-sm shadow-slate-100/50">
      <div className="container flex items-center justify-between">
        
        <a href="#" className="text-2xl font-extrabold tracking-tighter text-slate-900 hover:text-indigo-600 transition-colors duration-300">
          Dharinish<span className="text-indigo-600">.</span>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-all duration-300 py-2 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <button className="px-6 py-2.5 rounded-full text-sm font-medium bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 transition-all duration-300">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
