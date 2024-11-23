import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserDoctor, faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import  Button  from "react-bootstrap/Button"
import  Container  from "react-bootstrap/Container"
import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" style={{"color" : "#008EDA"}}>
                    <FontAwesomeIcon icon={faUserDoctor} /> Bem Cuidar
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Cuidadores">Cuidador</Nav.Link>
                        <Nav.Link as={Link} to="/Pacientes">Paciente</Nav.Link>
                    </Nav>

                    <div className="d-flex">
                        {/* Alteração aqui para o Link */}
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