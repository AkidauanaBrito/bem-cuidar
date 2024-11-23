import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserDoctor, faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import  Button  from "react-bootstrap/Button"
import  Container  from "react-bootstrap/Container"
import  Navbar  from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" expand="lg">
            <Container fluid>
                <Navbar.Brand jref="/" style={{"color" : "#008EDA"}}>
                    <FontAwesomeIcon icon={faUserDoctor}/>Bem Cuidar
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{maxHeight:'100px'}}
                        navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info">Cadastrar</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header