import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserDoctor, faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import  Button  from "react-bootstrap/Button"
import  Container  from "react-bootstrap/Container"
import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import { Link, useNavigate } from 'react-router-dom'; // Importando useNavigate

const Header = () => {
    const navigate = useNavigate(); // Hook de navegação

    const handleCadastrarClick = () => {
        navigate('/cuidadores'); // Redireciona para a página de cadastro
    };

    return (
        <Navbar bg="light" data-bs-theme="light" expand="lg">
            <Container fluid>
                <Navbar.Brand jref="/" style={{"color" : "#008EDA"}}>
                    <FontAwesomeIcon icon={faUserDoctor}/>Bem Cuidar
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    {/* Alterando o botão para usar a navegação */}
                    <Button variant="outline-info" onClick={handleCadastrarClick}>Cadastrar</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;