import {Form, Button, Row, Col} from 'react-bootstrap';

const CuidadorForm = ({handleSubmit, nomeText, emailText, passwordText, cpfText, labelText, defaultValue}) =>{
    return (
        <Form>
            <Form.Group className='mb-3' controlId='bemcuidarForm.ControlTextArea1'>
                <Row>
                    <Col><Form.Label>Nome</Form.Label></Col>
                    <Col><Form.Control type="text" ref={nomeText} defaultValue={defaultValue} /></Col>
                </Row>
                <Row>
                    <Col><Form.Label>Email</Form.Label></Col>
                    <Col><Form.Control type="email" ref={emailText} defaultValue={defaultValue} /></Col>
                </Row>
                <Row>
                    <Col><Form.Label>Password</Form.Label></Col>
                    <Col><Form.Control type="text" ref={passwordText} defaultValue={defaultValue} /></Col>
                </Row>
                <Row>
                    <Col><Form.Label>CPF</Form.Label></Col>
                    <Col><Form.Control type="text" ref={cpfText} defaultValue={defaultValue} /></Col>
                </Row>
            </Form.Group>
            <Button variant='outline-info' style={{"background" : "#008EDA", "color":"white"}} onClick={handleSubmit}>Submeter</Button>
        </Form>
    )
}

export default CuidadorForm