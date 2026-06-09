import { personalInfo } from "../../data/portfolioData";
function Hero() {
  return(
    <>
    <h1>Hero</h1>
    <h1><b>Name : "{personalInfo.name}"</b></h1>
    </>
  );
}

export default Hero;
