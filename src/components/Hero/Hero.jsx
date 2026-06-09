import { heroData,heroStats } from "../../data/portfolioData";
import profile from "../../assets/images/Myimage.jpeg";
import resume from "../../assets/resume/Dharinish_Resume.pdf";
function Hero(){
    return(
      <>
      <section className="mt-20 container">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="w-1/2">
        <p className="text-lg text-gray-600">{heroData.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold mt-2">{heroData.name}</h1>
        <h2 className="text-xl md:text-3xl text-blue-600 mt-4">{heroData.role}</h2>
        <p className="mt-6 text-gray-600 max-w-xl leading-8 text-lg">{heroData.description}</p>
        <div className="flex gap-4 mt-8">
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          View Projects
        </a>
        <a href="resume" download="Dharinish_Resume.pdf" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Download Resume
        </a>
      </div>
      
        <div className="flex flex-wrap gap-8 mt-10">
        {
          heroStats.map((stat)=>(
            <div key={stat}
            className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">{stat}</div>
          ))
        }
      </div>
      </div>

     <div className = "w-1/2 flex justify-center">
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg">
  <img
    src={profile}
    alt="Dharinish"
    className="w-full h-full object-cover"
  />
</div>
      </div>

      </div>
      </section>
      </>
    );
}

export default Hero;