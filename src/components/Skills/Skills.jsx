import { skills } from "../../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="container py-24 bg-slate-50/50 rounded-[3rem] my-12 border border-slate-100/50">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Skills
        </h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-12">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-slate-900 capitalize mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-normal">✨</span>
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;