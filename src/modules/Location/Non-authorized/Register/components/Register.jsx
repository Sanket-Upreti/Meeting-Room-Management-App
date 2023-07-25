import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';import "bootstrap/dist/css/bootstrap.min.css"
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { RxAvatar, RxIdCard, RxLockClosed } from 'react-icons/rx';
import CustomError from '../../../../../shared/CustomError';
import { useFormik } from 'formik';
import { signupPageValidation } from '../../../../Validations/SignupValidation';

const Register = () => {
  const navigate = useNavigate()
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    teamName: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  }

  // handling submission of form
  const handleSubmit=()=>{
    navigate("/teamname")
  }

  // handling form
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signupPageValidation,
    onSubmit: handleSubmit,
  })
  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group >
        <Form.Label htmlFor="inputText" className="form-label">First Name</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text >
        <RxAvatar />
        </InputGroup.Text>
        <Form.Control name="firstName" value={formik.values.firstName} onChange={formik.handleChange} type="text" className="form-control" id="inputFirstname" placeholder="Type your first name" />
        </InputGroup>
        <CustomError error={formik.errors.firstName} />
        <Form.Label htmlFor="inputText" className="form-label">Last Name</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text >
        <RxAvatar />
        </InputGroup.Text>
        <Form.Control type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} className="form-control" id="inputLastname" placeholder="Type your last name" />
        </InputGroup>
        <CustomError error={formik.errors.lastName} />
        <Form.Label htmlFor="inputUsername" className="form-label">Username</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text>
        <RxAvatar />
        </InputGroup.Text>
        <Form.Control type="text" name="userName" value={formik.values.userName} onChange={formik.handleChange} className="form-control" id="inputUsername" placeholder="Type your username" />
        </InputGroup>
        <CustomError error={formik.errors.userName} />
        <Form.Label htmlFor="teamName" className="form-label">Teamname</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text >
        <RxIdCard />
        </InputGroup.Text>
        <Form.Control type="text" name="teamName" value={formik.values.teamName} onChange={formik.handleChange} className="form-control" id="inputTeamname" placeholder="Type your teamname" />
        </InputGroup>
        <CustomError error={formik.errors.teamName} />
        <Form.Label htmlFor="inputPassword" className="form-label">Password</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text >
        <RxLockClosed />
        </InputGroup.Text>
        <Form.Control type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" id="inputPassword" placeholder="Type your Password" />
        </InputGroup>
        <CustomError error={formik.errors.password} />
        <Form.Label htmlFor="inputPassword" className="form-label">Confirm Password</Form.Label>
        <InputGroup className="mb-2">
        <InputGroup.Text>
        <RxLockClosed />
        </InputGroup.Text>
        <Form.Control type="password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} className="form-control" id="inputConfirmPassword" placeholder="Confirm your Password" />
        </InputGroup>
        <CustomError error={formik.errors.confirmPassword} />
        <Form.Check
        type="checkbox"
        className="form-checkbox"
        id="terms-checkbox"
        label="I agree to the terms and conditions set by Huddle Up"
        name="termsAndConditions" value={formik.values.termsAndConditions} onChange={formik.handleChange}
      />
      <CustomError error={formik.errors.termsAndConditions} />
      </Form.Group>

    <div className="d-grid gap-2">
      <Button className='btn-color' as="input" size="lg" type="submit" value="Register" />
    </div>
             <div className="text-center text-color">
        <small className="custom-text3">Already Signed up? <a rel='noreferrer noopener' className="navigation-link" onClick={()=>navigate("/teamname")}>Go to Login</a> </small> 
      </div>
      </Form>
    </>
  )
}

export default Register