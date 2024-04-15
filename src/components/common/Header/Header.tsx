import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import styles from './styles.module.css';
import HeaderBasket from '@components/eCommerce/HeaderBasket/HeaderBasket';

const { headerContainer, headerLogo } = styles;
const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Golden</span>
          <Badge bg="info">Jessy</Badge>
        </h1>
        <HeaderBasket />
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">AboutUs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#home">Register</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
