import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/teamName.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { teamnameValidation } from "../../../../Validations/TeamNameValidation";
import CustomError from "../../../../../shared/CustomError";

const TeamName = () => {
    const navigate = useNavigate();
    const initialState = {
        teamName: "",
    };

    // handling submit
    const handleSubmit = () => {
        navigate("/login");
    };

    // using formik for handling forms
    const formik = useFormik({
        initialValues: initialState,
        validationSchema: teamnameValidation,
        onSubmit: handleSubmit,
    });

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        {/* form for teamname */}
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-2">
                                <Form.Label
                                    htmlFor="exampleInputText"
                                    className="form-label"
                                >
                                    Team name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.teamName}
                                    name="teamName"
                                    className="form-control form-text"
                                    id="inputText"
                                    placeholder="Type your team name"
                                />
                                <CustomError error={formik.errors.teamName} />
                            </Form.Group>

                            {/* button to navigate */}
                            <div className="d-grid gap-2">
                                <Button
                                    className="btn-color"
                                    as="input"
                                    size="lg"
                                    type="submit"
                                    value="Select Team"
                                />
                            </div>

                            {/* footer */}
                            <div className="text-center text-color">
                                <small className="custom-text3">
                                    Don't have a team name?{" "}
                                </small>{" "}
                                <br />
                                <small className="custom-text3">
                                    Request your administrator or{" "}
                                    <a
                                        rel="noreferrer noopener"
                                        onClick={() => navigate("/register")}
                                        className="navigation-link"
                                    >
                                        Sign Up here
                                    </a>
                                </small>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TeamName;
