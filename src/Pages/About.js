import AboutCompny from "../AboutComponents/About-compny/AboutCompny";
import AboutBenner from "../AboutComponents/Aboutbenner/Aboutb";
import Discover from "../AboutComponents/Discover/Discover";
import Team from "../AboutComponents/Team/Team";
import Footer from "../Footer/Footer";

function About() {
  return (
    <>
      <AboutBenner />
      <div className="bg-blor-abuot">
        <AboutCompny />
        <Discover />
      </div>
      <Team />
      <Footer />
    </>
  )

}

export default About;