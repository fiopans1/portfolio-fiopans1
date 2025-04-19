import { useContext } from "react";
import { sectionContext } from "../components/utils/Context";
import Prueba from "../components/Prueba";
import { Container } from "react-bootstrap";
import Introduction from "../components/Introduction";

const HomePage = () => {
  const references = useContext(sectionContext);
  return (
    <Container className="text-white">
      <Container fluid>
        <Introduction reference={references.home}/>
      </Container>
      <Container ref={references.about}>
        <Prueba />
      </Container>
      <Container ref={references.projects}>
        <Prueba />
      </Container>
      <Container ref={references.contact}>
        <Prueba />
      </Container>
    </Container>
  );
};

export default HomePage;
