import { useContext } from "react";
import { sectionContext } from "../components/utils/Context";
import Prueba from "../components/Prueba";
import { Container } from "react-bootstrap";
const HomePage = () => {
  const references = useContext(sectionContext);
  return (
    <div>
      <Container ref={references.home}>
        <Prueba />
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
    </div>
  );
};

export default HomePage;
