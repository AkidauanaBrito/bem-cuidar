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

        if (email === "akidauana@bemcuidar.com" && password === "123456") {
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
        <Container
            fluid
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                backgroundImage: "url('/bemcuidar2.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <ToastContainer />
            <Row className="w-100 d-flex justify-content-center">
                <Col
                    xs={12}
                    sm={10}
                    md={8}
                    lg={5}
                    xl={4}
                    className="text-center bg-white p-4 rounded shadow"
                    style={{ maxWidth: "400px" }}
                >
                    <h3 className="mb-4">Login</h3>

                    <Form onSubmit={handleLogin}>
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