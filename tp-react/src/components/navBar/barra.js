import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Barra() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="#">To Do List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
            <Nav.Link href="test">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

