import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand className="fw-bold mb-2 text-uppercase" href="#home">Chef Hut</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }} to='/'>Home</Link>
              <Link style={{ color: 'black', textDecoration: 'none' }} to='/blog'>Blog</Link>


            </Nav>
            <Nav>
              <Link style={{ color: 'black', textDecoration: 'none' }} to='/login'>LogIn</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;