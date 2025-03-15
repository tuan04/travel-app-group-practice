import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function BusShuttleForm() {
  return (
    <div className="container mt-3">
      <Form className="border p-3">
        <h2 className="text-start">Xe buýt & Xe đưa đón</h2>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formFrom" className="mb-3 text-start">
              <Form.Label><strong>Từ</strong></Form.Label>
              <Form.Control type="text" placeholder="Nhập thành phố, nhà ga hoặc các điểm khác" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTo" className="mb-3 text-start">
              <Form.Label><strong>Đến</strong></Form.Label>
              <Form.Control type="text" placeholder="Nhập thành phố, nhà ga hoặc các điểm khác" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formDepartureDate" className="mb-3 text-start">
              <Form.Label><strong>Ngày khởi hành</strong></Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formReturnDate" className="mb-3 text-start">
              <Form.Label><strong>Khứ hồi</strong></Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formSeats" className="mb-3 text-start">
              <Form.Label><strong>Số ghế</strong></Form.Label>
              <Form.Control as="select">
                <option>1 Ghế</option>
                <option>2 Ghế</option>
                <option>3 Ghế</option>
                <option>4 Ghế</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="text-start">
          Tìm kiếm
        </Button>
      </Form>
    </div>
  );
}

export default BusShuttleForm;