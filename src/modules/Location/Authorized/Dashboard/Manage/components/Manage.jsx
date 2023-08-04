import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import ContentHeader from "../../../../../../shared/ContentHeader";
import { RxPencil1, RxTrash } from "react-icons/rx";
import ConfirmationModal from "../../../../../../shared/ConfirmationModal";

const Manage = () => {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [variant, setVariant] = useState(null);

    let data = {
        firstname: "Sanket",
        lastname: "Upreti",
        username: "Sanket Upreti",
        role: "host",
        room: "white",
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleDeleteRoom = () => {
        const deleteModalContent = (
            <p>Are you sure you want to delete this room?</p>
        );
        setModalContent(deleteModalContent);
        setVariant("danger");
        handleShow();
    };

    const handleEditRoom = () => {
        const editModalContent = (
            <div className="room-status">
                <div className="room-features">
                    <Form.Group
                        className="mb-3 d-flex label-room"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label
                            style={{ textAlign: "center", marginRight: "16px" }}
                            className="label"
                        >
                            <b>Room Name</b>
                        </Form.Label>
                        <Form.Control type="text" maxLength={30} />
                    </Form.Group>
                </div>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Group
                        className="mb-3 d-flex label-room"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label
                            style={{ textAlign: "center", marginRight: "16px" }}
                            className="label"
                        >
                            <b>Total Members Allowed</b>
                        </Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <div>
                        <Form.Label className="label">
                            <b>Facilities</b>
                        </Form.Label>
                    </div>
                    <div>
                        <Form.Control as="textarea" rows={3} />
                    </div>
                </Form.Group>
            </div>
        );
        setVariant("primary");
        setModalContent(editModalContent);
        handleShow();
    };

    const changeUserRole = () => {
        const changeUserRole = (
            <p>Are you sure you want to change this user's role?</p>
        );
        setModalContent(changeUserRole);
        setVariant("danger");
        handleShow();
    };

    return (
        <div style={{ padding: "24px 0px 0px 0px", height: "100vh" }}>
            <ContentHeader maxWidth="95" textAlign="left" title="All Members" />
            <br />
            <div className="room-status meeting-room-booked mb-5 feed-width">
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Id</th>
                                <th>Member</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ textAlign: "center" }}>
                                <td>1</td>
                                <td>Utsav Pyakurel</td>
                                <td>
                                    <Form.Select
                                        onChange={(event) =>
                                            changeUserRole(event.target.value)
                                        }
                                    >
                                        <option value="attendee">
                                            Attendee
                                        </option>
                                        <option value="host">Host</option>
                                        <option value="admin">Admin</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                <td>2</td>
                                <td>Manish Shrestha</td>
                                <td>
                                    <Form.Select
                                        onChange={(event) =>
                                            changeUserRole(event.target.value)
                                        }
                                    >
                                        <option value="host">Host</option>
                                        <option value="attendee">
                                            Attendee
                                        </option>
                                        <option value="admin">Admin</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                <td>3</td>
                                <td>Praphulla Ghimire</td>
                                <td>
                                    <Form.Select
                                        onChange={(event) =>
                                            changeUserRole(event.target.value)
                                        }
                                    >
                                        <option value="attendee">
                                            Attendee
                                        </option>
                                        <option value="host">Host</option>
                                        <option value="admin">Admin</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                <td>4</td>
                                <td>Sohan Sah</td>
                                <td>
                                    <Form.Select
                                        onChange={(event) =>
                                            changeUserRole(event.target.value)
                                        }
                                    >
                                        <option value="attendee">
                                            Attendee
                                        </option>
                                        <option value="host">Host</option>
                                        <option value="admin">Admin</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            <ContentHeader maxWidth="95" textAlign="left" title="All Rooms" />
            <br />
            <div className="room-status meeting-room-booked mb-5 feed-width">
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Id</th>
                                <th>Room Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ textAlign: "center" }}>
                                <td>1</td>
                                <td>Red</td>
                                <td>
                                    <RxPencil1
                                        style={{ cursor: "pointer" }}
                                        onClick={handleEditRoom}
                                    />
                                    <span>
                                        <RxTrash
                                            onClick={handleDeleteRoom}
                                            style={{
                                                cursor: "pointer",
                                                color: "red",
                                                marginLeft: "8px",
                                            }}
                                        />
                                    </span>
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                <td>2</td>
                                <td>White</td>
                                <td>
                                    <RxPencil1
                                        style={{ cursor: "pointer" }}
                                        onClick={handleEditRoom}
                                    />
                                    <span>
                                        <RxTrash
                                            onClick={handleDeleteRoom}
                                            style={{
                                                cursor: "pointer",
                                                color: "red",
                                                marginLeft: "8px",
                                            }}
                                        />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            <ConfirmationModal
                data={data}
                show={show}
                onHide={handleClose}
                content={modalContent}
                btnVariant={variant}
            />
        </div>
    );
};

export default Manage;
