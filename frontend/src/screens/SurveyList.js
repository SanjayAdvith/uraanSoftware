import React, { useEffect } from 'react'
//import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listSurvey } from '../actions/userActions'

const SurveyList = ({ history }) => {
    const dispatch = useDispatch()

    const surveyList = useSelector((state) => state.surveyList)
    const { loading, error, survey } = surveyList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo) {
            dispatch(listSurvey())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])



    return (
        <>
            <center><h2>All Survey List</h2></center>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>

                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>Number</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {survey.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </td>

                                <td>
                                    {user.mobile}
                                </td>

                                <td>
                                    {user.message}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default SurveyList
