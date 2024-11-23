import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { Container, Row, Col } from "react-bootstrap";
import CuidadorForm from "../cuidador/CuidadorForm";

import React from "react";

const Cuidadores = () =>{
    const nomeText = useRef();

    const emailText = useRef();
    const passwordText = useRef();
    const cpfText = useRef();

    const addCuidador = async (e) =>{
        e.preventDefault();

        const nome = nomeText.current;
        const email = emailText.current;
        const password = passwordText.current;
        const cpf = cpfText.current;
        try{
            const response = await api.post("api/v1/cuidadores",
                {
                    nome:nome.value,
                    email:email.value,
                    password:password.value,
                    cpf:cpf.value
                });
    
            //const updatedReviews = [...reviews,{body:rev.value}];
    
             nome.value  = "";
             email.value  = "";
             password.value  = "";
             cpf.value  = "";
             //setReviews(updatedReviews);

        }catch(err){
            console.log(err);
        }
    }
    return (

        <Container>
            <Row>
                <Col><h3>Cadastro Cuidador</h3></Col>
            </Row>
            <Row>
                <Col>
                {
                    <>
                    <Row>
                        <Col>
                            <CuidadorForm 
                            handleSubmit={addCuidador} 
                            nomeText={nomeText}
                            emailText={emailText}
                            passwordText={passwordText}
                            cpfText={cpfText} 
                            labelText="Escreva um review"></CuidadorForm>
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

export default Cuidadores