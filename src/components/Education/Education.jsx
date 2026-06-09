import { education } from "../../data/portfolioData";

function Education() {
  return (
    <section id="education" className="container mt-32">
      <h2 className="text-4xl font-bold text-center">
        Education
      </h2>

      <div className="mt-12 border rounded-xl p-8">
        <h3 className="text-2xl font-semibold">
          {education.degree}
        </h3>

        <p className="text-gray-600 mt-2">
          {education.college}
        </p>

        <p className="text-gray-500 mt-2">
          {education.year}
        </p>
      </div>
    </section>
  );
}

export default Education;