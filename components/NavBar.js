import Link from 'next/link'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const NavBar = ({brands}) => {


  console.log(brands);

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


export const getStaticProps = async () =>{
  
 
  var options = {
    method: 'GET',
    url: 'https://v1-sneakers.p.rapidapi.com/v1/brands',
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': '7cfee83871msh67b5e02d5687514p148362jsne793419737e2'
    }
  };

  const res = await axios(options)

  const {results} = await JSON.parse(JSON.stringify(res))

  return {
    props:{
      brands: results
    }
  }
}
