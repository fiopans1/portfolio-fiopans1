import { Container } from "react-bootstrap";
import Introduction from "../components/Home/Introduction";
import Timeline from "../components/Home/Timeline";
import AboutMe from "../components/Home/AboutMe";
import SkillsProgress from "../components/Home/SkillsProgress";
import Contact from "../components/Home/Contact";
import Github from "../components/Home/Github";

const HomePage = () => {
  return (
    <Container className="text-white">
      <Introduction />
      <Timeline />
      <AboutMe/>
      <SkillsProgress/>
      <Github/>
      <Contact/>
    </Container>
  );
};

export default HomePage;
