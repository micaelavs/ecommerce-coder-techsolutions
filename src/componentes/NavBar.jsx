import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import logo from '../assets/logo.jpg'; 
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand as={NavLink} to='/' className="d-flex align-items-center"> <img
          src={logo}
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-top me-2"
        />Tech Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/novedades'>Novedades</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/promociones'>Promociones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/mas solicitados'>
                Más solicitados
              </NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/hot sale'>
                Hot Sale
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;