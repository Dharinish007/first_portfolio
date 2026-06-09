import { projects } from "../../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="container py-24 bg-slate-50/50 rounded-[3rem] my-12 border border-slate-100/50 px-4 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Projects
        </h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 leading-relaxed">
          Some of the projects I have built while learning and growing as a developer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-50/50 border border-indigo-100 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-auto pt-6 border-t border-slate-100">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-xl text-sm font-medium transition-colors duration-300"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center px-4 py-2.5 bg-slate-900 text-white hover:bg-indigo-600 rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:shadow-indigo-500/20 active:scale-95 transition-all duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;