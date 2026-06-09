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
    <nav className="sticky top-0 bg-white py-6">
      <div className="container flex items-center justify-between">
        
        <h1 className="text-2xl font-bold">
          Dharinish
        </h1>

    <div className="flex items-center gap-6">
  <ul className="flex gap-8">
  {navLinks.map((link) => (
    <li key={link.name}>
      <a
        href={link.path}
        className="cursor-pointer transition-all duration-200 hover:text-blue-600"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

  <button className="border px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white">
  Resume
</button>
</div>
      </div>
    </nav>
  );
}

export default Navbar;
