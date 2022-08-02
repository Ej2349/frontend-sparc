import { Field, Formik, Form } from 'formik'
import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { useParams } from 'react-router';
import CustomerDetailsAPIServices from '../../api/CustomerDetailsAPIServices'

function CustomerDetail() {

    let ids = useParams.id;
    const [state, setState] = useState(
        {
            id: ids,
            customerName: 'iroj',
            customerGender: '',
            customerPhoneNum: '',
            customerEmail: '',
        })
        let { customerName, customerGender, customerEmail, customerPhoneNum } = state
                
        function onSubmitCustomerForm(values) {
            let service = {
                id: ids,
                customerName: values.customerName,
                customerGender: values.customerGender,
                customerPhoneNum: values.customerPhoneNum,
                customerEmail: values.customerEmail
            }
            CustomerDetailsAPIServices.createCustomer(values)
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
            <div className='container'>
                <Col className='appointment-col' sm={4}>
                    <Formik
                        initialValues={{ customerName, customerGender, customerPhoneNum, customerEmail}}
                        onSubmit={onSubmitCustomerForm}
                    // validateOnChange={false}
                    // validateOnBlur={false}
                    // validate={validate}
                    // enableReinitialize={true}>
                    >
                        {() => (
                            <Form className='appointment-box'>
                                <fieldset className='form-group'>
                                    <label>Name</label>
                                    <Field className='form-control' type="text" name="customerName" />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <label>Gender</label>
                                    <Field className='form-control' type="text" name="customerGender" />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <label>Phone Number</label>
                                    <Field className='form-control' type="text" name="customerPhoneNum" />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <label>Email</label>
                                    <Field className='form-control' type="email" name="customerEmail" />
                                </fieldset>
                                <br />
                                {/* <Button variant='primary' onClick={onSubmitForm} type='submit'>Save</Button> */}
                                <button className='btn btn-primary' type='submit'>Save</button>
                            </Form>
                        )}
                    </Formik>
                </Col>

            </div>
        </>
    )
}

export default CustomerDetail