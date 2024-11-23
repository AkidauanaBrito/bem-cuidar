import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "usuario@bemcuidar.com" && password === "12345") {
            toast.success("Login realizado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        } else {
            toast.error("Email ou senha incorretos.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <ToastContainer />
            <Row className="w-100">
                <Col className="text-center">
                    <img
                        src="https://via.placeholder.com/150x50?text=Bem+Cuidar" // Altere a URL para a sua imagem real
                        alt="Bem Cuidar"
                        className="mb-4"
                    />
                    
                    <h3 className="mb-4">Login</h3>

                    <Form onSubmit={handleLogin} className="p-4 border rounded shadow-sm">
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Entrar
                        </Button>
                    </Form>

                    <div className="mt-3">
                        <Link to="/cadastro">
                            <Button variant="link">Não tem uma conta? Cadastre-se</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;