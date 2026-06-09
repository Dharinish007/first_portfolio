import { experiences } from "../../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="container mt-32">
      <h2 className="text-4xl font-bold text-center">
        Leadership & Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="border rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold">
              {exp.role}
            </h3>

            <p className="text-gray-600 mt-3">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;