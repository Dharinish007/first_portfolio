function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/60 bg-white">
      <div className="container py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="font-bold text-2xl tracking-tighter text-slate-900">
          Dharinish<span className="text-indigo-600">.</span>
        </h2>

        <p className="text-slate-500 font-medium text-sm">
          © {new Date().getFullYear()} Dharinish. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;