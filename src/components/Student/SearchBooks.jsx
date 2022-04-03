import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function SearchBooks(props) {
  return (
    <div className="mt-3">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <form className="form">
              <div className="form-group">
                <input
                  type="search"
                  placeholder="Search Books..."
                  className="form-control"
                />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
