import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link href='/' > SneakerHub.com </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link href='/newest' >Newest Releases</Link></Nav.Link>
            <NavDropdown title="Brands" id="collasible-nav-dropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
