import '../../css/footer.css';
import airplane from '../img/plane.png';
import { NavLink } from 'react-router-dom';
import fblogo from '../img/facebook.png';
import inslogo from '../img/instagram.png';
import tiktoklogo from '../img/tiktok.png';
import telelogo from '../img/telegram.png';
import { Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={4} className="mb-3 mb-md-0">
                        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                            <Image src={airplane} alt="logo" width={40} className="me-2" />
                            <span className="fs-5 fw-bold">Travel Booking</span>
                        </Navbar.Brand>
                    </Col>

                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 className="text-uppercase">Sản phẩm</h5>
                    </Col>

                    <Col md={4}>
                        <h5 className="text-uppercase">Về chúng tôi</h5>
                        <div className="d-flex flex-column gap-2">
                            <div className="d-flex align-items-center">
                                <Image src={fblogo} alt="Facebook" width={24} className="me-2" />
                                <p className="mb-2">Facebook</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <Image src={inslogo} alt="Instagram" width={24} className="me-2" />
                                <p className="mb-2">Instagram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <Image src={telelogo} alt="Telegram" width={24} className="me-2" />
                                <p className="mb-2">Telegram</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <Image src={tiktoklogo} alt="Tiktok" width={24} className="me-2" />
                                <p className="mb-2">Tiktok</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-4 p-3 text-white"> <hr />&copy; 2024 Travel App. All Rights Reserved.</Row>
            </Container>
        </footer>
    );
};

export default Footer;
