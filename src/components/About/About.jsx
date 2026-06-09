import { aboutCards } from "../../data/portfolioData";

function About() {
  return (
    <section id="about" className="container mt-32">
      <h2 className="text-4xl font-bold text-center">
        About Me
      </h2>

      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        B.Tech IT student passionate about Full Stack Development,
        Data Structures & Algorithms, leadership, and continuous growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {aboutCards.map((card) => (
          <div
            key={card.title}
            className="p-6 border rounded-xl"
          >
            <div className="text-3xl mb-4">
              {card.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {card.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;