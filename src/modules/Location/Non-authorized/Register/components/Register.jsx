import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

const Register = () => {
  return (
    <>
    <Form>
      <Form.Group >
        <Form.Label for="inputText" className="form-label">First Name</Form.Label>
        <Form.Control type="text" className="form-control form-text" id="inputFirstname" placeholder="Type your first name" />
        <Form.Label for="inputText" className="form-label">Last Name</Form.Label>
        <Form.Control type="text" className="form-control form-text" id="inputLastname" placeholder="Type your last name" />
        <Form.Label for="inputPassword" className="form-label">Username</Form.Label>
        <Form.Control type="text" className="form-control form-text" id="inputUsername" placeholder="Type your username" />
        <Form.Label for="inputPassword" className="form-label">Teamname</Form.Label>
        <Form.Control type="text" className="form-control form-text" id="inputTeamname" placeholder="Type your teamname" />
        <Form.Label for="inputPassword" className="form-label">Password</Form.Label>
        <Form.Control type="password" className="form-control form-text" id="inputPassword" placeholder="Type your Password" />
        <Form.Label for="inputConfirmPassword" className="form-label">Confirm Password</Form.Label>
        <Form.Control type="password" className="form-control form-text" id="inputConfirmPassword" placeholder="Confirm your Password" />
      </Form.Group>

    <div className="d-grid gap-2">
      <Button className='btn-color' as="input" size="lg" type="submit" value="Register" />
    </div>
             <div className="text-center text-color">
        <small class="custom-text3">Already Signed up? <a href="#" rel='noreferrer noopener' className="navigation-link">Go to Login</a> </small> 
      </div>
      </Form>
    </>
  )
}

export default Register