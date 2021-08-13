import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row, Col } from 'react-bootstrap'
//import Loader from '../components/Loader'
//import Message from '../components/Message'

import SurveyList from './SurveyList'

const HomeScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    //console.log(userInfo.name);  // console.log(userLogin.userInfo.name); 

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])


    return (
        <div>

            <Row>
                <Col> <h1>Uraan Software</h1></Col>
                <Col>
                    <Link to='survey'>
                        <Button variant='success' className='mt-2 btnfloat'>

                            <i className='fas fa-plus'></i>
                        </Button>
                    </Link>
                </Col>
            </Row>


            <SurveyList />
        </div>
    )
}

export default HomeScreen
