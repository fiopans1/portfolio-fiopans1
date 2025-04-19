import Prueba from "../components/Prueba";
import { Container } from "react-bootstrap";
import Introduction from "../components/Introduction";

const HomePage = () => {
  return (
    <Container className="text-white">
      <Container fluid>
        <Introduction/>
      </Container>
      <Container>
        <Prueba />
      </Container>
      <Container>
        <Prueba />
      </Container>
      <Container>
        <Prueba />
      </Container>
    </Container>
  );
};

export default HomePage;
