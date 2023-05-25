import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  
  return (
    <div className="myBG">
      <Container >
        <Row >
          <Col className="nonton">
            <div className="title">
              Nonton Gratis 
            </div>
            <div className="title">
              Ga Pake Karcis
            </div>
            <div className="introButton mt-4 text-center">
          <Button variant="dark" href="/search">
            Lihat List
          </Button>
        </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
