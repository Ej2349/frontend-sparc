import { Formik, Field, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import SparcAPIServices from '../../api/SparcAPIServices'
import './AppointmentComponent.scss'

function AppointmentComponent() {
    let navigate = useNavigate();
    let ids = useParams.id;
    let his = History;
    const [state, setState] = useState(
        {
            id: ids,
            name: '',
            email: '',
            phoneNum: '',
            location: ''
        }
    )

    // useEffect(() => {
        
    //     SparcAPIServices.createTodo()
    //     .then(res => setState({
    //         name: res.data.name,
    //         email: res.data.email,
    //         phoneNum: res.data.phoneNum,
    //         location: res.data.location
    //     }))
    // })
    

    let { name, email, phoneNum, location } = state

    function onSubmitForm(values) {
        let service = {
            id: ids,
            name: values.name,
            email: values.email,
            phoneNum: values.phoneNum,
            location: values.location
        }
        SparcAPIServices.createAppointment(values)
        .then(response => {
            // response.headers('Access-Control-Allow-Origin', 'http://127.0.0.2:8000/appointment')
            console.log('employee added successfully', response.data)
          
        }).catch(
            console.log(
                "Error"
            )
        )
    }

    return (
        <>
            <div className='appointment-background'>
                <Container>
                    <Col className='appointment-col' sm={4}>
                        <Formik
                            initialValues={{ name, email, phoneNum, location }}
                            onSubmit={onSubmitForm}
                            // validateOnChange={false}
                            // validateOnBlur={false}
                            // validate={validate}
                            // enableReinitialize={true}>
                            >
                            {() => (
                                <Form className='appointment-box'>
                                    <fieldset className='form-group'>
                                        <label>Name</label>
                                        <Field className='form-control' type="text" name="name" />
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Email</label>
                                        <Field className='form-control' type="email" name="email" />
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Phone Number</label>
                                        <Field className='form-control' type="text" name="phoneNum" />
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Location</label>
                                        <Field className='form-control' type="text" name="location" />
                                    </fieldset>
                                    <br/>
                                    {/* <Button variant='primary' onClick={onSubmitForm} type='submit'>Save</Button> */}
                                    <button className='btn btn-primary' type='submit'>Save</button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default AppointmentComponent