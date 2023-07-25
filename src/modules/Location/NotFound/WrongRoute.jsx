import React from 'react'
import HeaderNonAuthorizedLayout from '../../Layout/HeaderNonAuthorized'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const WrongRoute = () => {
  const navigate = useNavigate();

  // displaying wrong route navigation page for the user
  return (
    <>
    <HeaderNonAuthorizedLayout />
    <Container className='content-wrapper'>
    <Row>
    <Col xs={12} style={{textAlign: "center", fontWeight:"bolder"}}>
        <div style={{fontSize: "48px"}}>404 ERROR</div>
        <br />
        <div>Oh snap! You visited a wrong route</div>
    </Col>
    </Row>
    </Container>
    <div className='p-t text-center'>
    <a style={{cursor: "pointer"}} onClick={()=>navigate("/register")} rel='noreferrer noopener' className="navigation-link non-text-decoration">Let's get you back. Click here</a><br/>
        </div>
    </>
  )
}

export default WrongRoute