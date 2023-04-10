import { Container, Row, Col } from 'react-bootstrap';
import './home.css';

export default function Home() {
    return (
        <div className='home-class'>
            <Container>
                <Row>
                    <Col>
                        <h1>¡Adopta un gatito!</h1>
                        <p>En nuestra organización tenemos muchos gatitos que necesitan un hogar amoroso. ¿Quieres ser su dueño?</p>
                        <button className="btn btn-primary">Ver gatitos disponibles</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
