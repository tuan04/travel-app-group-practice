import React from 'react';

import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import Back from '../components/Back';

function Resgister() {
    return (
        <>
            <Back />

            <Container className="mt-5">

                <Row className="justify-content-md-center">
                    <h3 className="text-center mb-4 text-black">Đăng ký</h3>

                    <Col md={5} className="p-4 border rounded shadow-sm bg-light">
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Họ và Tên</Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ và tên" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <InputGroup>
                                    <Form.Control type="password" placeholder="Nhập mật khẩu" required />
                                    <Button variant="outline-secondary">
                                        <EyeSlash />
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Nhập lại mật khẩu</Form.Label>
                                <InputGroup>
                                    <Form.Control type="password" placeholder="Nhập lại mật khẩu" required />
                                    <Button variant="outline-secondary">
                                        <EyeSlash />
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Button variant="success" type="submit" className="w-100">
                                Đăng ký
                            </Button>
                        </Form>
                        <p className="text-center mt-3">
                            Đã có tài khoản? <NavLink to="/login">Đăng nhập</NavLink>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Resgister;