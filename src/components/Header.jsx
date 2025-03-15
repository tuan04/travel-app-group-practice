import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import airplane from "../img/plane.png";
import userLogo from "../img/user.png";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
    return (
        <div className='header'>
            <Navbar expand="lg" bg="primary" className="py-3">
        
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                        <img src={airplane} alt="logo" width={40} className="me-2" />
                        <span className="fs-5 fw-bold text-white">Travel Booking</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/" className="text-white">Trang chủ</Nav.Link>
                            <Nav.Link as={NavLink} to="/flysearch" className="text-white">Vé máy bay</Nav.Link>
                            <Nav.Link as={NavLink} to="bus" className="text-white">Vé xe khách</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="text-white">Liên hệ</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="text-white">About</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center ms-lg-3 gap-3">
                            <Button as={NavLink} to="/adminlogin" variant="light" className="d-flex align-items-center">
                                <img src={userLogo} alt="user" width={20} className="me-2" /> Đăng nhập
                            </Button>
                            <Button as={NavLink} to="/register" variant="warning">Đăng ký</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div >
    );

}

export default Header;