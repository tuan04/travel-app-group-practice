import { Row, Col, Image, Container, Card, Button, ButtonGroup } from 'react-bootstrap'
import baner from '../img/baner.png'
import './pages.css'
import { useState } from 'react'
import ks1 from "../img/ks1.webp"
import ks2 from "../img/ks2.webp"
import ks3 from "../img/ks3.webp"
import ks4 from "../img/ks4.webp"

const khachSans = [
    { id: 1, "name": "Le House Boutique Hotel", "rate": 8.7, "price": 370.101, src: ks1 },
    { id: 2, "name": "The Herriott Hotel & Suitel", "rate": 8.8, "price": 474.986, src: ks2 },
    { id: 3, "name": "Brown Bean Hotel", "rate": 8.4, "price": 57.950, src: ks3 },
    { id: 4, "name": "Brown Bean Hotel", "rate": 8.4, "price": 57.950, src: ks4 },
]

const Home = () => {
    const [activeButton, setActiveButton] = useState("Nha Trang");
    const cities = ["Nha Trang", "Đà Nẵng", "BangKok", "Singapore", "Seoul"];
    return (
        <Container className='mt-0 wrapper'>
            <Col className='mb-3'>
                <div className="text-start fs-3 fw-bold">Đi chơi cuối tuần</div>
                <div className='text-start'>Giảm đến 500K</div>
                <Image src={baner} alt="" className='w-100' />
            </Col>
            <Col className='w-100'>
                <div className="text-start fs-3 fw-bold">Đa dạng lựa chọn khách sạn</div>
                <div className='d-flex gap-2 align-items-start justify-content-start'>
                    {cities.map((city) => (
                        <Button
                            key={city}
                            variant={city === activeButton ? "primary" : "outline-primary"}
                            onClick={() => setActiveButton(city)}
                        >
                            {city}
                        </Button>
                    ))}
                </div>
                <div className='d-flex gap-2 m-2'>
                    {khachSans.map((item) => {
                        return (
                            <Col key={item.id} md={3} className="mb-3">
                                <Card>
                                    <Card.Img variant="top" src={item.src} className="img-fluid" style={{ height: "200px", objectFit: "cover" }} />
                                    <Card.Body>
                                        <Card.Title className='text-start'>{item.name}</Card.Title>
                                        <Card.Text>
                                            <p className='text-primary'>{item.rate}/10 </p> <br />
                                            <p className='text-primary'>{item.price.toLocaleString()} VND</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </div>
            </Col>
        </Container>
    );
}
export default Home