import React from 'react'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import workout from '../../img/workout.svg';
import './HomeComponent.scss';
export default function HomeComponent() {

  let navigate = useNavigate();

  function clickAbout() {
    navigate('/appointment')
  }

  function clickCustomer() {
    navigate('/customer')
  }
  

  return (
    <>
      <div className='home-background'>
        <Container>
          <div>
            <Row>
              <Col md={6} lg={6} className='homepage_line'>
                <div >
                  <h1>When it comes to your health its always our priority.</h1>
                  <p>we are the team of professional expertise in everyform of physical treatment and diet maintenece.</p>
                  <button onClick={clickAbout} className='btn-apt'><span>Book an appointment</span></button>
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <img className='workout' src={workout} alt='workout'/>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div>
          <div className='card-info-1'>
            <Container className='card-info-1-1'>
              <Row className='card-row'>
                <Col md={6} lg={3}>
                  <Card className='card-1'>
                    <Card.Img className='card-img' variant="top" src={workout} />
                    <Card.Body>
                      <Card.Title>Development</Card.Title>
                      <Card.Text className='card-text'>
                        We do search for a better way to treat our patient and this constant search for next gen treatment is always right way for caring.
                      </Card.Text>
                      <Button className='button' variant="primary">More info</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3}>
                  <Card className='card-1'>
                    <Card.Img className='card-img' variant="top" src={workout} />
                    <Card.Body>
                      <Card.Title>Personal Treatments</Card.Title>
                      <Card.Text className='card-text'>
                        We focus on one to one care and success of providing personalized care.
                      </Card.Text>
                      <Button className='button' variant="primary">More info</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3}>
                  <Card className='card-1'>
                    <Card.Img className='card-img' variant="top" src={workout} />
                    <Card.Body>
                      <Card.Title>Professional Therapist</Card.Title>
                      <Card.Text className='card-text'>
                        We are highest levels of honesty and professionalism at all times.
                      </Card.Text>
                      <Button className='button' variant="primary">More info</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3}>
                  <Card className='card-1'>
                    <Card.Img className='card-img' variant="top" src={workout} />
                    <Card.Body>
                      <Card.Title>News</Card.Title>
                      <Card.Text className='card-text'>
                        Connect with us and get the latest news about physical therapy and keep yourself healthy.
                      </Card.Text>
                      <Button className='button' variant="primary">More info</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <Container>
            <div className='card-info-2'>
              <Row className='card-info-2-1'>
                <Col md={3}>
                  <h1>Our Mission</h1>
                </Col>
                <Col md={5}>
                  <p>At Results Physiotherapy we believe that people should not have to live with pain. We are committed to clinical excellence through professional development and industry-leading continuing education, supported by a culture of friendship.</p>
                </Col>
              </Row>
              <Row className='card-info-2-1'>
                <Col md={5}>
                  <p>At Results Physiotherapy, you'll receive world-class, personalized service from leading clinicians that will help you get back to your normal life. </p>
                  <Button variant='danger'>Read More</Button>
                </Col>
                <Col md={3}>
                  <h2>Our Mission 2</h2>
                </Col>
              </Row>
            </div>

          </Container>
        </div>
        <div className='card-info-3'>
          <Container className='card-info-3-1'>
            <Row>
              <Col>
                <h3>Why Choose us?</h3>
              </Col>
            </Row>
            <div>
              <Row>
                <Col lg={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Therapies Spectrum</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Long Experience</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>300+ Satisfied patients</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>300+ Satisfied patients</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <div>
                <Row>
                  <Col lg={3}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Creative team</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Best Equipments</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card onClick={clickAbout}>
                      <Card.Body>
                        <Card.Title>Affordable Prices</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={3}>
                  <Card>
                    <Card.Body>
                      <Card.Title>300+ Satisfied patients</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
