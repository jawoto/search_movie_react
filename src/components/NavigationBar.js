import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navigation" >
        <Container>
          <Navbar.Brand href="/">Jaw's FILM</Navbar.Brand>
          <Nav>
            
            <Nav.Link href="/search">SEARCH</Nav.Link>
            <Nav.Link href="/trending">TRENDING</Nav.Link>
            <Nav.Link href="/superhero">SUPERHIRO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
