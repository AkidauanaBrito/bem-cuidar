import { useRef, useState, useEffect } from "react";
import api from '../../api/axiosConfig';
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import CuidadorForm from "../cuidador/CuidadorForm";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";

const Cuidadores = () => {
    const [cuidadores, setCuidadores] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const nomeText = useRef();
    const emailText = useRef();
    const passwordText = useRef();
    const cpfText = useRef();

    const fetchCuidadores = async () => {
        try {
            const response = await api.get("api/v1/cuidadores");
            setCuidadores(response.data);
        } catch (err) {
            console.error("Erro ao buscar cuidadores:", err);
            toast.error("Erro ao buscar cuidadores.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        }
    };

    const addCuidador = async (e) => {
        e.preventDefault();

        const nome = nomeText.current.value;
        const email = emailText.current.value;
        const password = passwordText.current.value;
        const cpf = cpfText.current.value;

        try {
            const response = await api.post("api/v1/cuidadores", {
                nome,
                email,
                password,
                cpf,
            });

            setCuidadores([...cuidadores, response.data]);

            nomeText.current.value = "";
            emailText.current.value = "";
            passwordText.current.value = "";
            cpfText.current.value = "";

            setShowModal(false);

            toast.success("Cuidador cadastrado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        } catch (err) {
            console.error("Erro ao cadastrar cuidador:", err);
            toast.error("Erro ao cadastrar cuidador.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        }
    };

    useEffect(() => {
        fetchCuidadores();
    }, []);

    return (
        <Container className="mt-4">
            <ToastContainer />

            <Row className="mb-3">
                <Col>
                    <h3>Lista de Cuidadores</h3>
                </Col>
                <Col className="text-end">
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                        Cadastrar Novo Cuidador
                    </Button>
                </Col>
            </Row>
            <hr />

            <Row>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>CPF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cuidadores.length > 0 ? (
                                cuidadores.map((cuidador) => (
                                    <tr key={cuidador.id}>
                                        <td>{cuidador.nome}</td>
                                        <td>{cuidador.email}</td>
                                        <td>{cuidador.cpf}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">
                                        Nenhum cuidador cadastrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Novo Cuidador</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CuidadorForm
                        handleSubmit={addCuidador}
                        nomeText={nomeText}
                        emailText={emailText}
                        passwordText={passwordText}
                        cpfText={cpfText}
                        labelText="Cadastrar Cuidador"
                    />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Cuidadores;