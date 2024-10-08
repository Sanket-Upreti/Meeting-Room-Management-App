import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SpinnerAnimation = () => {
    return (
        <Container style={{ marginTop: "48px" }}>
            <Row>
                <Col className="text-align-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    );
};

export default SpinnerAnimation;
