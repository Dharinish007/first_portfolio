import { heroData, heroStats } from "../../data/portfolioData";
import profile from "../../assets/images/Myimage.jpeg";
import resume from "../../assets/resume/Dharinish_Resume.pdf";

function Hero() {
  return (
    <section className="py-20 md:py-32 container">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left">
          <p className="text-lg md:text-xl font-medium text-indigo-600 mb-2">{heroData.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-4">{heroData.name}</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-6">
            {heroData.role}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all duration-300 text-center"
            >
              View Projects
            </a>
            <a 
              href={resume} 
              download="Dharinish_Resume.pdf" 
              className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:border-indigo-600 hover:text-indigo-600 active:scale-95 transition-all duration-300 text-center shadow-sm"
            >
              Download Resume
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-12 pt-8 border-t border-slate-200/60 w-full">
            {heroStats.map((stat) => (
              <div 
                key={stat}
                className="px-5 py-2.5 bg-white border border-slate-100 rounded-full text-sm font-semibold text-slate-700 shadow-sm"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105 -z-10 transition-transform duration-500"></div>
          <div className="w-64 h-64 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-white transform hover:-translate-y-2 transition-transform duration-500">
            <img
              src={profile}
              alt={heroData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;