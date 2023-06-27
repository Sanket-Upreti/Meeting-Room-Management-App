import React from 'react'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../../../../assets/logo.svg'

const Login = () => {
  return (
    <>
      <div class="text-center">
    <Image src={logo} alt="Logo" />
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <h3 class="text-center">Welcome</h3>

        <Form>
          <Form.Group class="mb-2">
            <Form.Label for="exampleInputText" class="form-label">Team name</Form.Label>
            <Form.Control type="text" class="form-control" id="inputText" placeholder="Type your team name" />
          </Form.Group>

          <Button type="submit" class="btn mt-5" value="Select Team" />

          <div class="text-center">
            <small class="custom-text3">Don't you have a team name? </small>
          </div>
          <div class="text-center">
            <small class="custom-text3">Request your administrator or <a href="" class="text1">Sign Up here</a></small>
          </div>
        </Form>
      </div>
    </div>
  </div>
    </>
  )
}

export default Login