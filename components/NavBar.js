import Link from 'next/link'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const NavBar = ({ brands }) => {

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
              <NavDropdown.Item ><Link href='/brand/ASICS'  >
                ASICS
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/ALEXANDER MCQUEEN'  >
              ALEXANDER MCQUEEN
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/BALENCIAGA'  >
              BALENCIAGA
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/BURBERRY'  >
              BURBERRY
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/CHANEL'  >
              CHANEL
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/COMMON PROJECTS'  >
              COMMON PROJECTS
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/CONVERSE'  >
              CONVERSE
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/CROCS'  >
              CROCS
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/DIADORA'  >
              DIADORA
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/DIOR'  >
              DIOR
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/GUCCI'  >
              GUCCI
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/JORDAN'  >
              JORDAN
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/LI-NING'  >
              LI-NING
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/LOUIS VUITTON'  >
              LOUIS VUITTON
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/NEW BALANCE'  >
              NEW BALANCE
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/NIKE'  >
                Nike
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/OFF-WHITE'  >
              OFF-WHITE
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/OTHER'  >
              OTHER
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/PRADA'  >
              PRADA
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/PUMA'  >
              PUMA
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/REEBOK'  >
              REEBOK
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/SAINT LAURENT'  >
              SAINT LAURENT
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/SAUCONY'  >
              SAUCONY
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/UNDER ARMOUR'  >
              UNDER ARMOUR
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/VANS'  >
              VANS
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/VERSACE'  >
              VERSACE
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/YEEZY'  >
              YEEZY
              </Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href='/brand/ADIDAS'  >
              ADIDAS
              </Link></NavDropdown.Item>        
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar


export const getStaticProps = async () => {



  var options = {
    method: 'GET',
    url: 'https://v1-sneakers.p.rapidapi.com/v1/brands',
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': '7cfee83871msh67b5e02d5687514p148362jsne793419737e2'
    }
  };


  const res = await axios(options)

  const results = await JSON.parse(JSON.stringify(res.data))

  console.log(results);

  return {
    brands: results
  }

}