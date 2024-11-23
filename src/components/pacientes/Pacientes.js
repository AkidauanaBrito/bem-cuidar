import { useState, useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { Container, Row, Col, Button, Card, ListGroup, ToggleButton, Table, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import PacienteForm from "../paciente/PacienteForm";
import axios from "axios";

import React from "react";

const Pacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const nomeText = useRef();
    const emailText = useRef();
    const passwordText = useRef();
    const pesoText = useRef();
    const alturaText = useRef();

    const fetchPacientes = async () => {
        try {
            const response = await api.get("api/v1/pacientes");
            setPacientes(response.data);
        } catch (err) {
            console.error("Erro ao buscar pacientes:", err);
            toast.error("Erro ao buscar pacientes.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        }
    };

    const addPaciente = async (e) => {
        e.preventDefault();

        const nome = nomeText.current.value;
        const email = emailText.current.value;
        const password = passwordText.current.value;
        const peso = pesoText.current.value;
        const altura = alturaText.current.value;

        try {
            const response = await api.post("/api/v1/pacientes", {
                nome,
                email,
                password,
                weight: peso,
                height: altura,
            });

            setPacientes([...pacientes, response.data]);

            nomeText.current.value = "";
            emailText.current.value = "";
            passwordText.current.value = "";
            pesoText.current.value = "";
            alturaText.current.value = "";

            setShowModal(false);

            toast.success("Paciente cadastrado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        } catch (err) {
            console.error("Erro ao cadastrar paciente:", err);
            toast.error("Erro ao cadastrar paciente.", {
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
        fetchPacientes();
    }, []);

    return (
        <Container className="mt-4">
            <ToastContainer />

            <Row className="mb-3">
                <Col>
                    <h3>Lista de Pacientes</h3>
                </Col>
                <Col className="text-end">
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                        Cadastrar Novo Paciente
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
                                <th>Peso (kg)</th>
                                <th>Altura (m)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientes.length > 0 ? (
                                pacientes.map((paciente) => (
                                    <tr key={paciente.id}>
                                        <td>{paciente.nome}</td>
                                        <td>{paciente.email}</td>
                                        <td>{paciente.weight}</td>
                                        <td>{paciente.height}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        Nenhum paciente cadastrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Modal para cadastrar novo paciente */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Novo Paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PacienteForm
                        handleSubmit={addPaciente}
                        nomeText={nomeText}
                        emailText={emailText}
                        passwordText={passwordText}
                        alturaText={alturaText}
                        pesoText={pesoText}
                        labelText="Cadastrar Paciente"
                    />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Pacientes;