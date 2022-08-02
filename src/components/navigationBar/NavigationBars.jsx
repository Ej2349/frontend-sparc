import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../img/logo.svg';
import sparc from '../../img/sparc.svg';
import './navigationBars.scss'
class NavigationBars extends Component {

  render() {
    return (
      <>
        <nav>
          <div>
            <Navbar bg='light' variant='light'>
              <Container>
                <Navbar.Brand href='/'><img className='logo' src={logo} alt='logo' /><img className='sparc' src={sparc} alt= 'sparc'/></Navbar.Brand>
                <Nav className='justify-content-end '>
                  <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/about'>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/services'>Services</Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Link href='/' className='nav-link'>Home</Nav.Link>
                  <Nav.Link href='/about' className='nav-link'>About</Nav.Link>
                  <Nav.Link href='/services' className='nav-link'>Services</Nav.Link> */}
                </Nav>
              </Container>
            </Navbar>
          </div>
        </nav>
      </>
    )
  }
}

export default NavigationBars;