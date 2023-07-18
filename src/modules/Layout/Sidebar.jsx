import React from 'react'
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../../assets/logo.svg'
import { Container, Nav, Navbar } from 'react-bootstrap'

const SidebarLayout = ({sidebarPages }) => {
  return (
    <div style={{ minHeight: '10em', display:"flex"}}>
    <Navbar expand="lg" className="flex-column h-100 bg-body-tertiary">
    <Container>
      <Navbar.Brand><Image src={logo} alt="Logo" /></Navbar.Brand>
    </Container>
      <Nav>
            {sidebarPages.map((page)=>{return <Nav.Link key={page} href={page}>{page}</Nav.Link>})}
          </Nav>
  </Navbar>
  </div>
  )
}

export default SidebarLayout