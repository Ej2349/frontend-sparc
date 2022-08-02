import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './AboutComponent.scss';
function AboutComponent() {
  return (
    <>
      <div className='about-box'>
        <Container>
          <div>
            <Col className='about-section' lg={6}>
              <h1 className='about-title' >We believe healthy habits improves your life</h1>
            </Col>
          </div>

          <Row className='about-detail'>
            <Col lg={4}>
              <h5>2022</h5>
              <p>Founded</p>
            </Col>
            <Col lg={4}>
              <h5>14+</h5>
              <p>Services</p>
            </Col>
            <Col lg={4}>
              <h5>900+ patients</h5>
              <p>Cured</p>
            </Col>
          </Row>
        </Container>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>

      <div className='about-box-2'>
        <Container>
          <Row>
            <Col lg={3}>
              <p className='about-header'>About Shrey</p>
            </Col>
            <Col lg={9} className='about-shrey-text  about-box-container'>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </Col>

          </Row>
          <div className='about-body-1'>
            <div>
              <Row className='about-vision'>
                <Col lg={3}></Col>
                <Col lg={3}>
                  <h3 className='text-wrw'>Our Vision</h3>
                </Col>
                <Col lg={6}>
                  <div className='about-shrey-text about-box-container'>
                    <p>In coming years we will provide in service and international level physio service to our all generation people.</p>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className='about-vision'>
              <Col lg={3}></Col>
              <Col lg={6}>
                <div className='about-box-container'>
                  <p>In coming years we will provide in service and international level physio service to our all generation people.</p>
                </div>
              </Col>
              <Col lg={3} className='col-wrw'>
                <h3 className='text-wrw'>Who are we?</h3>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AboutComponent;