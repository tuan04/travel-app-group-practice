import { Col, Image, Row, Container, Button, Card } from "react-bootstrap";
import ks1 from '../img/ks1.webp'
import ks2 from "../img/ks2.webp"
import ks3 from "../img/ks3.webp"
import ks4 from "../img/ks4.webp"
import { useParams } from "react-router-dom";

const hotels= [
    {id: 1, "name": "Le House Boutique Hotel", "rate": 8.7, "price": 370.101, src: ks1, description: "Le House Boutique Hotel toạ lạc tại khu vực / thành phố Phước Mỹ. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào. Nếu cần giúp đỡ xin hãy liên hệ đội ngũ tiếp tân, chúng tôi luôn sẵn sàng hỗ trợ quý khách. Sóng WiFi phủ khắp các khu vực chung của khách sạn cho phép quý khách luôn kết nối với gia đình và bè bạn."},
    {id: 2, "name": "The Herriott Hotel & Suitel", "rate": 8.8, "price": 474.986, src: ks2, description: "The Herriott Hotel & Suite toạ lạc tại khu vực / thành phố An Hải Bắc. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào. Nếu cần giúp đỡ xin hãy liên hệ đội ngũ tiếp tân, chúng tôi luôn sẵn sàng hỗ trợ quý khách. Sóng WiFi phủ khắp các khu vực chung của khách sạn cho phép quý khách luôn kết nối với gia đình và bè bạn."},
    {id: 3, "name": "Brown Bean Hotel", "rate": 8.4, "price": 57.950, src: ks3, description: "Lưu trú tại Brown Bean Hotel là một lựa chọn đúng đắn khi quý khách đến thăm Hòa Cường Bắc. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào. Nếu cần giúp đỡ xin hãy liên hệ đội ngũ tiếp tân, chúng tôi luôn sẵn sàng hỗ trợ quý khách. Sóng WiFi phủ khắp các khu vực chung của khách sạn cho phép quý khách luôn kết nối với gia đình và bè bạn."},
    {id: 4, "name": "Cicilia Danang Hotels & Spa Powered by ASTON", "rate": 8.4, "price": 873.016, src: ks4, description: "Lưu ý: khách sạn trước đây mang tên Cicilia Danang Hotel & Spa Powered by ASTON Cicilia Danang Hotels & Spa Powered by ASTON toạ lạc tại khu vực / thành phố Mỹ An. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào. Nếu cần giúp đỡ xin hãy liên hệ đội ngũ tiếp tân, chúng tôi luôn sẵn sàng hỗ trợ quý khách. Sóng WiFi phủ khắp các khu vực chung của khách sạn cho phép quý khách luôn kết nối với gia đình và bè"},
] 
const HotelDetail = () => {
    const {id} =useParams();
    const hotel = hotels.find((h) => h.id === parseInt(id))
    if(!hotel){return <h2>Not found</h2>}
    return(
        <Container className='mt-3 wrapper'>
            <Row>
                <Col md={4}><Image src={hotel.src} width={400} rounded ></Image></Col>
                <Col>
                    <Row className="justify-content-end"> 
                        <Col md={2} className='text-primary fw-bold m-0 p-0'>Rate: {hotel.rate}/10 </Col>
                        <Col md={3}  className='text-danger fw-bold m-0 p-0'>Price: {hotel.price}K / Đêm VND</Col>
                        <Col md={2} className="m-0 p-0"><Button>Book Now</Button></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={5}>
                            <Card>
                                <Card.Body className="">
                                    <Card.Title className="text-start">Tiện ích</Card.Title>
                                    <Card.Text className="text-dark text-start">
                                        <ul>
                                            <li>Nhà hàng</li>
                                            <li>máy lạnh</li>
                                            <li>Hồ bơi</li>
                                            <li>Thang máy</li>
                                            <li>Wifi</li>
                                            <li>Lễ tân 24h</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-start">Mô tả</Card.Title>
                                    <Card.Text className="text-dark text-start">{hotel.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default HotelDetail