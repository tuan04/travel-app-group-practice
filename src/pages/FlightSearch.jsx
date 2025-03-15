import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function FlightSearchForm() {
  return (
    <div className="container mt-3">
      <Form className="border p-3">
        <h2 className="text-start mb-4">Tìm chuyến bay</h2>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formFrom" className="mb-3 text-start">
              <Form.Label><strong>Từ</strong></Form.Label>
              <Form.Control type="text" placeholder="Jakarta (IKTA)" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTo" className="mb-3 text-start">
              <Form.Label><strong>Đến</strong></Form.Label>
              <Form.Control type="text" placeholder="Surabaya (SUB)" />
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
            <Form.Group controlId="formPassengers" className="mb-3 text-start">
              <Form.Label><strong>Số hành khách</strong></Form.Label>
              <Form.Control as="select">
                <option>1 Người lớn, 0 Trẻ em, 0 Em bé</option>
                <option>2 Người lớn, 0 Trẻ em, 0 Em bé</option>
                <option>1 Người lớn, 1 Trẻ em, 0 Em bé</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formSeatClass" className="mb-3 text-start">
              <Form.Label><strong>Hạng ghế</strong></Form.Label>
              <Form.Control as="select">
                <option>Phổ thông</option>
                <option>Thương gia</option>
                <option>Hạng nhất</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="text-start">
          Tìm chuyến bay
        </Button>
      </Form>
    </div>
  );
}

export default FlightSearchForm;