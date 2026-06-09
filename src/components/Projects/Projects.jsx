import { projects } from "../../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="container mt-32">
      <h2 className="text-4xl font-bold text-center">
        Projects
      </h2>

      <p className="text-center text-gray-600 mt-4">
        Some of the projects I have built while learning and growing as a developer.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-600 mt-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border rounded-lg"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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