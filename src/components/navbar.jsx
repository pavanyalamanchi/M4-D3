import { Navbar, Nav } from 'react-bootstrap'
import {Component} from 'react'

class NavBar extends Component{
    render(){
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    }
}

export default NavBar