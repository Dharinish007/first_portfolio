import { achievements } from "../../data/portfolioData";

function Achievements() {
  return (
    <section id="achievements" className="container mt-32">
      <h2 className="text-4xl font-bold text-center">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {achievements.map((achievement) => (
          <div
            key={achievement}
            className="border rounded-xl p-6"
          >
            <h3 className="font-medium">
              {achievement}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Achievements;