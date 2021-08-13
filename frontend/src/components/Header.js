import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
    Form,
    Button,
    Nav,
    Navbar,
    Container, Row,
    Col, FormControl, NavDropdown
} from 'react-bootstrap'

import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'





const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Row className='menu'>
            <Col>
                <Navbar variant="dark" expand='lg'>
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href="/">Uraan Software</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle area-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav' >
                            <Form style={{ display: 'flex', marginRight: 'auto' }}>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Nav className="ml-auto">

                                {userInfo ? (
                                    <NavDropdown title={userInfo.name} id='username'>

                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link>
                                            <i className='fas fa-user'></i> Sign In
                                        </Nav.Link>
                                    </LinkContainer>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header
