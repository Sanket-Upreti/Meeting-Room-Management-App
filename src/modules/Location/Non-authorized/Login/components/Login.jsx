import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
  return (
    <>
    <Form>
      <Form.Group class="mb-2">
        <Form.Label for="inputText" className="form-label">Username</Form.Label>
        <Form.Control type="text" className="form-control form-text" id="inputText" placeholder="Type your username" />
        <Form.Label for="inputPassword" className="form-label">Password</Form.Label>
        <Form.Control type="password" className="form-control form-text" id="inputText" placeholder="Type your Password" />
        <Form.Label for="selectRole" className="form-label">Role</Form.Label>
        <Form.Select className="form-control form-text">
          <option value="2">Attendee</option>
          <option value="1">Admin</option>
          <option value="3">Host</option>
        </Form.Select>
      </Form.Group>

    <div className="d-grid gap-2">
      <Button className='btn-color' as="input" size="lg" type="submit" value="Login" />
    </div>
             <div className="text-center text-color">
             <small><a href="#" rel='noreferrer noopener' className="navigation-link non-text-decoration">Forget Password?</a></small><br/>
        <small class="custom-text3">Don't have an account? <a href="#" rel='noreferrer noopener' className="navigation-link">Sign Up</a> </small> 
      </div>
      </Form>
    </>
  )
}

export default Login