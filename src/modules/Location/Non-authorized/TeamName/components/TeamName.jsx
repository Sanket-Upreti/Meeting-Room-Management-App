import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/teamName.css'

const TeamName = () => {
  return (
    <>
    <Container>
    <Row>
        <Col xs={12}>
    <Form>
      <Form.Group class="mb-2">
        <Form.Label for="exampleInputText" class="form-label">Team name</Form.Label>
        <Form.Control type="text" className="form-control form-text" id="inputText" placeholder="Type your team name" />
      </Form.Group>

    <div className="d-grid gap-2">
      <Button className='btn-color' as="input" size="lg" type="submit" value="Select Team" />
    </div>

      <div className="text-center text-color">
        <small class="custom-text3">Don't have a team name? </small> <br/>
        <small class="custom-text3">Request your administrator or <a href="#" rel='noreferrer noopener' className="navigation-link">Sign Up here</a></small>
      </div>
    </Form>
    </Col>
    </Row>
    </Container>
</>
  )
}

export default TeamName