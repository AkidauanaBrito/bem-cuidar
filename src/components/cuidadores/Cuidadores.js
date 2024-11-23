import { useRef } from "react";
import api from '../../api/axiosConfig';
import { Container, Row, Col } from "react-bootstrap";
import CuidadorForm from "../cuidador/CuidadorForm";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";

const Cuidadores = () => {
    const nomeText = useRef();
    const emailText = useRef();
    const passwordText = useRef();
    const cpfText = useRef();

    const addCuidador = async (e) => {
        e.preventDefault();

        const nome = nomeText.current;
        const email = emailText.current;
        const password = passwordText.current;
        const cpf = cpfText.current;

        try {
            await api.post("api/v1/cuidadores", {
                nome: nome.value,
                email: email.value,
                password: password.value,
                cpf: cpf.value,
            });

            toast.success("Cuidador cadastrado com sucesso!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });

            nome.value = "";
            email.value = "";
            password.value = "";
            cpf.value = "";
        } catch (err) {
            console.error(err);
            toast.error("Erro ao cadastrar o cuidador.", {
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
        <Container>
            <Row>
                <Col><h3>Cadastro Cuidador</h3></Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <CuidadorForm
                                handleSubmit={addCuidador}
                                nomeText={nomeText}
                                emailText={emailText}
                                passwordText={passwordText}
                                cpfText={cpfText}
                                labelText="Escreva um review"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default Cuidadores;