import Prueba from "../components/Prueba";
import { Container } from "react-bootstrap";
import Introduction from "../components/Home/Introduction";
import Timeline from "../components/Home/Timeline";

const HomePage = () => {
  return (
    <Container className="text-white">
      <Introduction />
      <Timeline />
    </Container>
  );
};

export default HomePage;
