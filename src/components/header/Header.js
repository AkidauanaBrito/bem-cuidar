import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" style={{ color: "#008EDA", fontWeight: 'bold' }}>
                    <FontAwesomeIcon icon={faUserDoctor} /> Bem Cuidar
                </Navbar.Brand>
                {/* Botão responsivo para o menu */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Cuidadores">Cuidadores</Nav.Link>
                        <Nav.Link as={Link} to="/Pacientes">Pacientes</Nav.Link>
                    </Nav>

                    <div className="d-flex">
                        {/* Botão de login ajustado */}
                        <Link to="/login">
                            <Button variant="outline-info" className="me-2">
                                Login
                            </Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;