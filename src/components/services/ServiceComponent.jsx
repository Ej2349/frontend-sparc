import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SparcAPIServices from '../../api/SparcAPIServices'
import ServiceData from '../../data/ServiceData/ServiceData'
import workout from '../../img/workout.svg'
import './ServiceComponent.scss'
function ServiceComponent() {

  const [services, setServices] = useState(ServiceData);
  const [state, setState] = useState({
    service: []
  })

  // function testFunction() {
  //   <div>
  //   {test.map((it) => (
  //     {it},
  //     console.log(it.text)
  //   ))}
  //   </div>
  // }

  const getAllServices = () => {

    return SparcAPIServices.retriveAllServices().then(res => {
      setState({ service: res.data })
    })
  }

  useEffect(() => {
    getAllServices()
  }, [])

  return (
    <>
      <div className='service-background'>
        <Container>
          <div>
            <Row className='service-title'>
              <h1>Services</h1>
            </Row>
          </div>
          <div >
            <Row>
              <div>
                {services.map((item) => (
                  <div className='service-container' key={item.id}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={workout}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.text}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </div>
            </Row>
          </div>
          <div>
            {/* {
          state.service.map(
            serv => 
            <div className='service-container' key={serv.id}>
            <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={workout}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {serv.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {serv.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
          )
        } */}
          </div>
        </Container>
      </div>
    </>
  )
}

export default ServiceComponent