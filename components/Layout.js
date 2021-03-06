import { Container } from 'react-bootstrap'
import NavBar from './NavBar'

const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <Container className='p-5 text-center' >
            {
                children
            }
            </Container>
        </div>
    )
}

export default Layout


