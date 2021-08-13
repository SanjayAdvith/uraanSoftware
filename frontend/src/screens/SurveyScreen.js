import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { survey } from '../actions/userActions'

const SurveyScreen = ({ history }) => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [age, setAge] = useState(10)
    const [occupation, setOccupation] = useState('')
    const [mobile, setMobile] = useState()
    const [pin, setPin] = useState()
    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [state, setState] = useState('')
    const [message, setMessage] = useState('')

    const userSurvey = useSelector((state) => state.userSurvey)
    const { surveyInfo } = userSurvey

    useEffect(() => {

    }, [history, surveyInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(survey(name, email, age, occupation, mobile, pin, address, district, state, message))
    }



    return (
        <div>
            <FormContainer>
                <h1>Survey Page</h1>
                <Form onSubmit={submitHandler}>

                    <Row>
                        <Col md={6}>

                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    required
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='occupation'>
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control
                                    type='occupation'
                                    required
                                    placeholder='Enter occupation'
                                    value={occupation}
                                    onChange={(e) => setOccupation(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='age'>
                                <Form.Label>Age</Form.Label>
                                <Form.Control

                                    type='age'
                                    required
                                    placeholder='Enter age'
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control
                                    type='email'
                                    required
                                    placeholder='email'
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='message'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    type='message'
                                    required
                                    placeholder='Enter Message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                        </Col>


                        <Col md={6}>
                            <Form.Group controlId='address'>
                                <Form.Label>address</Form.Label>
                                <Form.Control
                                    type='address'
                                    required
                                    placeholder='Enter Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='district'>
                                <Form.Label>District</Form.Label>
                                <Form.Control
                                    type='qualification'
                                    required
                                    placeholder='Enter District'
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                ></Form.Control>
                            </Form.Group>


                            <Form.Group controlId='state'>
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type='Enter State'
                                    required
                                    placeholder='state'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='mobile'>
                                <Form.Label>Mobile no.</Form.Label>
                                <Form.Control
                                    type='number'
                                    required
                                    placeholder='Enter Mobile'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='pin'>
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control
                                    type='pin'
                                    required
                                    placeholder='Enter Pincode'
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                ></Form.Control>
                            </Form.Group>


                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <Button type='submit' variant='primary' className='mt-2'>
                                Register
                            </Button>

                        </Col>
                    </Row>




                </Form>

            </FormContainer>
        </div >
    )
}

export default SurveyScreen
