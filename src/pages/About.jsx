import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGlobeAsia, FaPlaneDeparture, FaHandHoldingHeart, FaBullseye, FaHandshake, FaCompass } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';  // Thêm file css để xử lý hover

const About = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-5 text-primary fw-bold">About Us - Travel Booking</h1>

            {/* Phần giới thiệu */}
            <Row className="align-items-center mb-5">
                <Col md={6}>
                    <Card className="shadow-lg border-0 hover-card">
                        <Card.Body>
                            <Card.Title className="text-success fw-bold">
                                <FaGlobeAsia className="me-2" /> Welcome to Travel Booking
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Travel Booking là nền tảng du lịch trực tuyến hàng đầu, giúp bạn dễ dàng khám phá và đặt các chuyến đi mơ ước.
                                Từ vé máy bay, khách sạn, tour trọn gói đến các trải nghiệm địa phương độc đáo - tất cả đều có tại Travel Booking.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="text-center">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Travel Booking"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '350px', objectFit: 'cover' }}
                    />
                </Col>
            </Row>

            {/* Sứ mệnh - Tầm nhìn - Giá trị cốt lõi */}
            <Row className="text-center mb-5">
                <Col md={4}>
                    <Card className="shadow border-0 hover-card">
                        <Card.Body>
                            <FaPlaneDeparture size={50} className="text-info mb-3" />
                            <Card.Title className="fw-bold">Sứ Mệnh</Card.Title>
                            <Card.Text className="text-muted">
                                Kết nối hàng triệu du khách với những điểm đến tuyệt vời trên toàn thế giới.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow border-0 hover-card">
                        <Card.Body>
                            <FaBullseye size={50} className="text-primary mb-3" />
                            <Card.Title className="fw-bold">Tầm Nhìn</Card.Title>
                            <Card.Text className="text-muted">
                                Trở thành nền tảng du lịch trực tuyến hàng đầu Đông Nam Á, được khách hàng tin yêu nhất.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow border-0 hover-card">
                        <Card.Body>
                            <FaHandHoldingHeart size={50} className="text-danger mb-3" />
                            <Card.Title className="fw-bold">Giá Trị Cốt Lõi</Card.Title>
                            <Card.Text className="text-muted">
                                Minh bạch - Tin cậy - Đổi mới - Khách hàng là trung tâm.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Cam kết dịch vụ & Hành trình */}
            <Row className="mb-5">
                <Col md={6}>
                    <Card className="shadow-lg border-0 hover-card">
                        <Card.Body>
                            <Card.Title className="text-success fw-bold">
                                <FaHandshake className="me-2" /> Cam Kết Dịch Vụ
                            </Card.Title>
                            <Card.Text className="text-muted">
                                - Hỗ trợ khách hàng 24/7<br />
                                - Giá tốt nhất, không phí ẩn<br />
                                - Đa dạng dịch vụ từ vé máy bay, khách sạn, tour du lịch<br />
                                - Chính sách hủy và hoàn vé linh hoạt
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="shadow-lg border-0 hover-card">
                        <Card.Body>
                            <Card.Title className="text-primary fw-bold">
                                <FaCompass className="me-2" /> Hành Trình Phát Triển
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Từ một startup nhỏ năm 2015, Travel Booking đã phát triển thành nền tảng du lịch hàng đầu với hàng triệu người dùng.
                                Sự hài lòng của khách hàng là kim chỉ nam cho mọi hoạt động của chúng tôi.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
