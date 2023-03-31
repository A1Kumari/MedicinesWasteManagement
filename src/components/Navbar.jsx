import { Navbar,Nav,Image,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Navbar.css';


function MyNavbar() {
  return (
    <Navbar expand="lg" className='pe-4'>
    <Navbar.Brand href="/">
      <Image src="src\assets\logo.png" height="40" className="d-inline-block align-top" alt="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
      <Nav className="mr-auto">
        <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
        <NavLink exact to="/about" activeClassName="active" className="nav-link">About</NavLink>
        <NavLink exact to="/marketplace" activeClassName="active" className="nav-link">Shop Now</NavLink>
        <NavLink exact to="/faq" activeClassName="active" className="nav-link">FAQ</NavLink>
        <Nav.Link href="/">
          <Button variant='primary' type='submit' >Login</Button>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
