import React, { useState } from "react";
import { useAuth } from "../../../../../../utils/auth";
import Form from "react-bootstrap/Form";
import { Alert, Button } from "react-bootstrap";
import "../css/admin.css";
import ContentHeader from "../../../../../../shared/ContentHeader";
import Table from "react-bootstrap/Table";
import { abbreviateNames } from "../../../../../../helpers/AbbrvName";
import { latestDate } from "../../../../../../shared/LatestDate";

const AdminDashboard = () => {
    const auth = useAuth();

    const [isAlert, setIsAlert] = useState(false);

    let data = {
        firstname: "Manish",
        lastname: "Shrestha",
        username: "Sanket Upreti",
        role: "admin",
    };

    const handleAnnouncementPost = () => {
        setIsAlert(true);

        setTimeout(() => {
            setIsAlert(false);
        }, 1000);
    };

    return (
        <>
            {isAlert && (
                <Alert key={"success"} variant={"success"}>
                    Successfully Posted
                </Alert>
            )}

            <div className="admin-announcement">
                <Form.Control
                    as="textarea"
                    maxLength={300}
                    placeholder="Post an announcement"
                    rows={3}
                />
                <div className="m-t admin-button">
                    <Button
                        className="btn-color"
                        onClick={() => handleAnnouncementPost()}
                        as="input"
                        size="lg"
                        type="submit"
                        value="Post"
                    />
                </div>
            </div>
            <div className="admin-feed">
                <div className="admin-feed-left">
                    <ContentHeader title="All Announcements" />
                    <br />
                    <div className="room-status feed-width">
                        <div className="announcement-by">
                            <div className="announcement-threads">
                                <div>
                                    <div className="avatar-for-threads">
                                        <div className="avatar threads-avatar">
                                            <div className="arrow threads-arrow">
                                                <div className="threads-avatar index-999 tooltip-avatar">
                                                    <p
                                                        style={{
                                                            color: "black",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {data.firstname}{" "}
                                                        {data.lastname}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="abbrv-name">
                                                {abbreviateNames(
                                                    `${data.firstname} ${data.lastname}`
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Meeting at room Red today! Please be
                                        there everyone.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <ContentHeader title="Assign Hosts" />
                    <br />
                    <div className="room-status feed-width">
                        <Form.Select aria-label="Default select example">
                            <option value="1">Praphulla Ghimire</option>
                            <option value="2">Sohan Sah</option>
                            <option value="3">Utsav Pyakurel</option>
                        </Form.Select>
                        <div className="m-t admin-button">
                            <Button
                                className="btn-color"
                                onClick={() => handleAssignMentors()}
                                as="input"
                                size="lg"
                                type="submit"
                                value="Assign"
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <ContentHeader title="Add Rooms" />
                    <br />
                    <div className="room-status feed-width">
                        <div className="room-features d-flex">
                            <Form.Group
                                className="mb-3 d-flex label-room"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label className="label">
                                    <b>Room Name</b>
                                </Form.Label>
                                <Form.Control htmlSize={3} type="text" />
                            </Form.Group>
                            <Form.Group
                                className="mb-3 d-flex label-room"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label
                                    style={{
                                        textAlign: "center",
                                        marginRight: "16px",
                                    }}
                                    className="label"
                                >
                                    <b>Total Members Allowed</b>
                                </Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </div>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <div>
                                <Form.Label className="label">
                                    <b>Facilities</b>
                                </Form.Label>
                            </div>
                            <div>
                                <Form.Control as="textarea" rows={3} />
                            </div>
                        </Form.Group>
                        <div className="m-t admin-button">
                            <Button
                                className="btn-color"
                                onClick={() => handleRoomAddition()}
                                as="input"
                                size="lg"
                                type="submit"
                                value="Add"
                            />
                        </div>
                    </div>
                </div>
                <div className="admin-feed-right">
                    <div className="room-status meeting-room-booked">
                        <ContentHeader
                            maxWidth="100"
                            textAlign="center"
                            title="Room Status"
                        />
                        <br />
                        <div className="primary-text-color mb-2">
                            {latestDate()}
                        </div>
                        <div>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>Room Name</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Hosted by</th>
                                    </tr>
                                </thead>
                                <tbody style={{ textAlign: "center" }}>
                                    <tr>
                                        <td>Red</td>
                                        <td>10:00</td>
                                        <td>14:00</td>
                                        <td>Manish</td>
                                    </tr>
                                    <tr>
                                        <td>White</td>
                                        <td>12:00</td>
                                        <td>13:00</td>
                                        <td>Manish</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
