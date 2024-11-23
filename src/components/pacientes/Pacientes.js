import { useState, useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import PacienteForm from "../paciente/PacienteForm";

import React from "react";

const Pacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

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
            console.log(err);
        }
    };

    const addPaciente = async (e) => {
        e.preventDefault();

        const nome = nomeText.current.value;
        const email = emailText.current.value;
        const password = passwordText.current.value;
        const weight = pesoText.current.value;
        const height = alturaText.current.value;

        try {
            const response = await api.post("api/v1/pacientes", {
                nome,
                email,
                password,
                weight,
                height,
            });

            nomeText.current.value = "";
            emailText.current.value = "";
            passwordText.current.value = "";
            pesoText.current.value = "";
            alturaText.current.value = "";

            setPacientes([...pacientes, response.data]);
            setMostrarFormulario(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPacientes();
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Pacientes</h3>
                </Col>
                <Col className="text-end">
                    <Button
                        variant="primary"
                        onClick={() => setMostrarFormulario(!mostrarFormulario)}
                    >
                        {mostrarFormulario ? "Voltar à Lista" : "Cadastrar Novo Paciente"}
                    </Button>
                </Col>
            </Row>
            <hr />

            {mostrarFormulario ? (
                <Row>
                    <Col>
                        <PacienteForm
                            handleSubmit={addPaciente}
                            nomeText={nomeText}
                            emailText={emailText}
                            passwordText={passwordText}
                            alturaText={alturaText}
                            pesoText={pesoText}
                            labelText="Cadastrar Paciente"
                        />
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col>
                        <Table striped bordered hover>
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
                                            Nenhum paciente cadastrado
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Pacientes;