import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PacienteForm from "../paciente/PacienteForm";

import React from "react";

const Pacientes = () =>{
    const nomeText = useRef();

    const emailText = useRef();
    const passwordText = useRef();
    const pesoText = useRef();
    const alturaText = useRef();

    const addPaciente = async (e) =>{
        e.preventDefault();

        const nome = nomeText.current;
        const email = emailText.current;
        const password = passwordText.current;
        const weight = pesoText.current;
        const height = alturaText .current;
        try{
            const response = await api.post("api/v1/pacientes",
                {
                    nome:nome.value,
                    email:email.value,
                    password:password.value,
                    weight:weight.value,
                    height:height.value
                });
    
    
             nome.value  = "";
             email.value  = "";
             password.value  = "";
             weight.value  = "";
             height.value  = "";

        }catch(err){
            console.log(err);
        }
    }
    return (

        <Container>
            <Row>
                <Col><h3>Cadastro Paciente</h3></Col>
            </Row>
            <Row>
                <Col>
                {
                    <>
                    <Row>
                        <Col>
                            <PacienteForm 
                            handleSubmit={addPaciente} 
                            nomeText={nomeText}
                            emailText={emailText}
                            passwordText={passwordText}
                            alturaText={alturaText} 
                            pesoText={pesoText} 
                            labelText="Escreva um review"></PacienteForm>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr/>
                        </Col>
                    </Row>
                    </>
                }
                </Col>
            </Row>

        </Container>
    )
}

export default Pacientes