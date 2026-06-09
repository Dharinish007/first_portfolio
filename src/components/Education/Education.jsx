import { education } from "../../data/portfolioData";

function Education() {
  return (
    <section id="education" className="container py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Education
        </h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 group-hover:bg-indigo-500 transition-colors duration-300"></div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          {education.degree}
        </h3>

        <p className="text-lg md:text-xl text-slate-700 font-medium mb-1">
          {education.college}
        </p>

        <p className="text-sm font-semibold text-indigo-600 bg-indigo-50 inline-block px-4 py-1.5 rounded-full mt-4">
          {education.year}
        </p>
      </div>
    </section>
  );
}

export default Education;