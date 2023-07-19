import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';import "bootstrap/dist/css/bootstrap.min.css"
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { RxAvatar, RxIdCard, RxLockClosed } from 'react-icons/rx';

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
    <Form>
      <Form.Group >
        <Form.Label htmlFor="inputText" className="form-label">First Name</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text>
        <RxAvatar />
        </InputGroup.Text>
        <Form.Control type="text" className="form-control" id="inputFirstname" placeholder="Type your first name" />
        </InputGroup>
        <Form.Label htmlFor="inputText" className="form-label">Last Name</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text>
        <RxAvatar />
        </InputGroup.Text>
        <Form.Control type="text" className="form-control" id="inputLastname" placeholder="Type your last name" />
        </InputGroup>
        <Form.Label htmlFor="inputPassword" className="form-label">Username</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text>
        <RxAvatar />
        </InputGroup.Text>
        <Form.Control type="text" className="form-control" id="inputUsername" placeholder="Type your username" />
        </InputGroup>
        <Form.Label htmlFor="inputPassword" className="form-label">Teamname</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text>
        <RxIdCard />
        </InputGroup.Text>
        <Form.Control type="text" className="form-control" id="inputTeamname" placeholder="Type your teamname" />
        </InputGroup>
        <Form.Label htmlFor="inputPassword" className="form-label">Password</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text>
        <RxLockClosed />
        </InputGroup.Text>
        <Form.Control type="password" className="form-control" id="inputPassword" placeholder="Type your Password" />
        </InputGroup>
        <Form.Label htmlFor="inputPassword" className="form-label">Confirm Password</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text>
        <RxLockClosed />
        </InputGroup.Text>
        <Form.Control type="password" className="form-control" id="inputPassword" placeholder="Confirm your Password" />
        </InputGroup>
        <Form.Check
        type="checkbox"
        className="form-checkbox"
        id="terms-checkbox"
        label="I agree to the terms and conditions set by Huddle Up"
      />
      </Form.Group>

    <div className="d-grid gap-2">
      <Button className='btn-color' as="input" size="lg" type="submit" onClick={()=> navigate("/teamname")} value="Register" />
    </div>
             <div className="text-center text-color">
        <small className="custom-text3">Already Signed up? <a rel='noreferrer noopener' className="navigation-link" onClick={()=>navigate("/teamname")}>Go to Login</a> </small> 
      </div>
      </Form>
    </>
  )
}

export default Register