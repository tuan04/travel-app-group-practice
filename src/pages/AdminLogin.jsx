import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"
import Back from "../components/Back"
import { Container, InputGroup } from 'react-bootstrap';



function AdminLogin() {
    return (
        <>

            <Row>
                <Col md="auto">
                    <Back />
                </Col>
            </Row>
            <h3 className="text-center mb-4 text-black">Đăng nhập</h3>

            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={5} className="p-4 border rounded shadow-sm bg-light">
                        <Form>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="text-center">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Nhập email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Nhập mật khẩu"
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Đăng nhập
                            </Button>
                        </Form>
                        <p className="text-center mt-3">
                            Chưa có tài khoản? <NavLink to="/register">Đăng ký</NavLink>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default AdminLogin
