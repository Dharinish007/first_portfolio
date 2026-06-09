import { skills } from "../../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="container mt-32">
      <h2 className="text-4xl font-bold text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold capitalize mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full"
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