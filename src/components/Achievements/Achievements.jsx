import { achievements } from "../../data/portfolioData";

function Achievements() {
  return (
    <section id="achievements" className="container py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Achievements
        </h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((achievement) => (
          <div
            key={achievement}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
          >
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 leading-snug pt-1.5">
              {achievement}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;