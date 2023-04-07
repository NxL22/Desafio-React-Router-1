import { Container, Nav, NavBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <>
        <NavBar bg='dark' variant='dark'>
            <Container>
                <NavBar.Brand>ReactRouter</NavBar.Brand>
                <Nav className='me-auto'>
                <Link cLassName='text-white ms-3 text-decoration-none' to='/'>Home</Link>
                <Link cLassName='text-white ms-3 text-decoration-none' to='/'>Contacto</Link>
                </Nav>
            </Container>
            </NavBar>
        </>
    )
}