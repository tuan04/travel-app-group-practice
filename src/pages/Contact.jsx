import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';  // Tận dụng CSS có sẵn để xử lý hover

const Contact = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-5 text-primary fw-bold">Contact Us</h1>

            {/* Thông tin liên hệ */}
            <Row className="mb-5">
                <Col md={4}>
                    <Card className="shadow border-0 hover-card">
                        <Card.Body>
                            <FaPhone size={50} className="text-info mb-3" />
                            <Card.Title className="fw-bold">Số điện thoại liên hệ</Card.Title>
                            <Card.Text className="text-muted">+84 123 456 789</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow border-0 hover-card">
                        <Card.Body>
                            <FaEnvelope size={50} className="text-primary mb-3" />
                            <Card.Title className="fw-bold">Địa chỉ email</Card.Title>
                            <Card.Text className="text-muted">support@travelbooking.com</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow border-0 hover-card">
                        <Card.Body>
                            <FaMapMarkerAlt size={50} className="text-danger mb-3" />
                            <Card.Title className="fw-bold">Địa chỉ</Card.Title>
                            <Card.Text className="text-muted">12 Nguyễn Văn Bảo, Phường 1, Quận Gò Vấp, Tp.Hồ Chí Minh</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Giờ làm việc & Hỗ trợ khách hàng */}
            <Row className="mb-5">
                <Col md={6}>
                    <Card className="shadow-lg border-0 hover-card">
                        <Card.Body>
                            <Card.Title className="text-success fw-bold">
                                <FaClock className="me-2" /> Giờ làm việc
                            </Card.Title>
                            <Card.Text className="text-muted">
                                - Thứ hai - thứ sáu: 8:00 AM - 6:00 PM<br />
                                - Thứ bảy: 9:00 AM - 4:00 PM<br />
                                - Chủ nhật: Đóng cửa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="shadow-lg border-0 hover-card">
                        <Card.Body>
                            <Card.Title className="text-primary fw-bold">
                                <FaHeadset className="me-2" /> Chăm sóc khách hàng
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Nhóm của chúng tôi sẵn lòng hỗ trợ bạn 24/7 với mọi thắc mắc.
                                Liên hệ với chúng tôi bất cứ lúc nào để được hỗ trợ.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;