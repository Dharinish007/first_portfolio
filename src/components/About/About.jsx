import { aboutCards } from "../../data/portfolioData";

function About() {
  return (
    <section id="about" className="container py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          About Me
        </h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 leading-relaxed">
          B.Tech IT student passionate about Full Stack Development,
          Data Structures & Algorithms, leadership, and continuous growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutCards.map((card) => (
          <div
            key={card.title}
            className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
              {card.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {card.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;