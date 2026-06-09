import { experiences } from "../../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="container py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Leadership & Experience
        </h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm text-indigo-600 text-xl font-bold shrink-0">
                {exp.role.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {exp.role}
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed flex-grow">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;