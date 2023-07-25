import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../utils/auth';
import { useFormik } from 'formik';
import { loginValidation } from '../../../../Validations/LoginValidation';
import CustomError from '../../../../../shared/CustomError';

const Login = () => {
  const initialState = {
    username: '',
    password: '',
    role: 'attendee'
  }

  const [user, setUser] = useState(initialState)
  const navigate = useNavigate()
  const auth = useAuth()

  const redirectPath = "/dashboard" || '/login'

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]: value})
  }

  const handleLogin = () => {
  const data = {
    username: "Sanket Upreti",
    role: "admin",
    token: Math.floor(Math.random() * 7) 
  }
    auth.login(data.token)
    navigate(redirectPath , {replace: true})
  }

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: loginValidation,
    onSubmit: handleLogin,
  })

  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="inputText" className="form-label">Username</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text>
        <BsFillPersonFill />
        </InputGroup.Text>
        <Form.Control type="text" name="username" onChange={formik.handleChange} value={formik.values.username} className="form-control" id="inputText" placeholder="Type your username" />
        </InputGroup>
        <CustomError error={formik.errors.username} />
        <Form.Label htmlFor="inputPassword" className="form-label">Password</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text>
        <BsFillLockFill />
        </InputGroup.Text>
        <Form.Control type="password" name="password" onChange={formik.handleChange} value={formik.values.password} className="form-control" id="inputPassword" placeholder="Type your Password" />
        </InputGroup>
        <CustomError error={formik.errors.password} />
        <Form.Label htmlFor="selectRole" className="form-label">Role</Form.Label>
        <InputGroup className="mb-4">
        <InputGroup.Text>
        <BsFillPersonBadgeFill />
        </InputGroup.Text>
        <Form.Select name="role" onChange={handleChange} className="form-control" >
          <option value="2">Attendee</option>
          <option value="1">Admin</option>
          <option value="3">Host</option>
        </Form.Select>
        </InputGroup>
      </Form.Group>

    <div className="d-grid gap-2">
      <Button className='btn-color' as="input" size="lg" type="submit" value="Login" />
    </div>
             <div className="text-center text-color">
             <small><a href="#" rel='noreferrer noopener' className="navigation-link non-text-decoration">Forget Password?</a></small><br/>
        <small className="custom-text3">Don't have an account? <a onClick={()=>navigate("/register")} rel='noreferrer noopener' className="navigation-link cursor-pointer">Sign Up</a> </small> 
      </div>
      </Form>
    </>
  )
}

export default Login