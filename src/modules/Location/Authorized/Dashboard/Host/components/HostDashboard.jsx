import React, { useState } from 'react'
import { useAuth } from '../../../../../../utils/auth'
import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import '../css/host.css'
import ContentHeader from '../../../../../../shared/ContentHeader';
import Table from 'react-bootstrap/Table';
import { abbreviateNames } from '../../../../../../helpers/AbbrvName';
import Modal from 'react-bootstrap/Modal';
import { RxPencil1, RxTrash, RxPerson } from "react-icons/rx";
import ConfirmationModal from '../../../../../../shared/ConfirmationModal';
import { latestDate } from '../../../../../../shared/LatestDate';

const HostDashboard = () => {
  const [isAlert, setIsAlert] = useState(false)
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [variant, setVariant] = useState(null);

  let data = {
    firstname: "Sanket",
    lastname: "Upreti",
    username: "Sanket Upreti",
    role: "host",
    room: "white"
} 

const handleClose = () => {
  setShow(false);
    
  setTimeout(()=>{
    setIsAlert(false)
  }, 1000)
}

const handleShow = () => {
  setShow(true)
};

const handleDeleteBooking = () =>{
  const deleteModalContent = (
    <p>Are you sure you want to delete this booking?</p>
  )
  setModalContent(deleteModalContent)
  setVariant("danger")
  handleShow()
}

const handleEditBooking = () =>{
  const editModalContent = (
    <div className='room-status'>
    <div className='room-features'>
    <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
<Form.Label className='label'><b>Select a room</b></Form.Label>
<Form.Select aria-label="Select a room">
<option value="1">Red</option>
<option value="2">White</option>
<option value="3">Orange</option>
</Form.Select>
</Form.Group>
<div className='d-flex'>
<Form.Group md="9" className="mb-3 flex-together label-room" controlId="exampleForm.ControlInput1">
<Form.Label className='label'><b>From</b></Form.Label>
<Form.Control className='max-width' maxLength="5" type="text" />
</Form.Group>
<Form.Group className="mb-3 flex-together label-room" controlId="exampleForm.ControlInput1">
<Form.Label className='label'><b>To</b></Form.Label>
<Form.Control className='max-width' maxLength="5" type="text" />
</Form.Group>
</div>
    </div>
    <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
<Form.Label style={{textAlign: "center", marginRight: "16px"}} className='label'><b>Agenda</b></Form.Label>
<Form.Control type="text" maxLength={30} />
</Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
<Form.Label style={{textAlign: "center", marginRight: "16px"}} className='label'><b>Members</b></Form.Label>
<Form.Control as="textarea" />
</Form.Group>
        <div>
<Form.Label className='label'><b>Facilities</b></Form.Label>
</div>
<div>
<Form.Control as="textarea" rows={3} />
</div>
</Form.Group>
  </div>
  )
  setVariant("primary")
  setModalContent(editModalContent)
  handleShow()
}

const handleAnnouncementPost = () =>{
    console.log("announcement posted")
    setIsAlert(true)
    
    setTimeout(()=>{
      setIsAlert(false)
    }, 1000)
  }

  const viewInvitedMembers = () => {
    const deleteModalContent = (
      <Table striped bordered hover size="sm">
      <thead>
        <tr style={{textAlign: "center"}}>
          <th>Members</th>
          <th>Participation</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{textAlign: "center"}}>
          <td>Praphulla Ghimire</td>
          <td>Yes</td>
          <td></td>
        </tr>
        <tr style={{textAlign: "center"}}>
          <td>Sohan Sah</td>
          <td>No</td>
          <td>I am exhausted from my hike yesterday. So i can't attend.</td>
        </tr>
      </tbody>
      </Table>
    )
    setModalContent(deleteModalContent)
    setVariant("none")
    handleShow()
  }

  return (
    <>
    {isAlert && 
    <Alert key={'success'} variant={'success'}>
              Successfully Submitted
            </Alert>
            }
    
        <div className='admin-announcement'>
        <Form.Control as="textarea" maxLength="300" placeholder="Post an announcement" rows={3} />
        <div className="m-t admin-button">
          <Button className='btn-color' onClick={()=>handleAnnouncementPost()} as="input" size="lg" type="submit" value="Post" />
        </div>
        </div>
        <div className='admin-feed'>
          <div className='admin-feed-left'>
              <ContentHeader title="All Announcements" />
              <br/>
              <div className='room-status feed-width' >
              <div className='announcement-by'>
    
                <div className='announcement-threads'>
                  <div>
                    <div className='avatar-for-threads'>
              <div className='avatar threads-avatar'><div className='arrow threads-arrow'><div className='threads-avatar index-999 tooltip-avatar'>
                <p style={{color: "black", textAlign: "center"}}>{data.firstname} {data.lastname}</p>
              </div></div><div className='abbrv-name'>{abbreviateNames(`${data.firstname} ${data.lastname}`)}</div></div>
              </div>
              <div>meeting at room red today! Everyone please be there.</div>
              </div>
              </div>
    
              </div>
              </div>
              <br/>
              <br/>
              <ContentHeader title="Book Your Room" />
              <br/>
              <div className='room-status feed-width'>
                <div className='room-features d-flex'>
                <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
            <Form.Label className='label'><b>Select a room</b></Form.Label>
            <Form.Select aria-label="Select a room">
      <option value="1">Red</option>
      <option value="2">White</option>
      <option value="3">Orange</option>
    </Form.Select>
          </Form.Group>
          <Form.Group md="9" className="mb-3 flex-together label-room" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'><b>From</b></Form.Label>
        <Form.Control className='max-width' maxLength="5" type="text" />
      </Form.Group>
            <Form.Group className="mb-3 flex-together label-room" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'><b>To</b></Form.Label>
        <Form.Control className='max-width' maxLength="5" type="text" />
      </Form.Group>
                </div>
                <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
            <Form.Label style={{textAlign: "center", marginRight: "16px"}} className='label'><b>Agenda</b></Form.Label>
            <Form.Control type="text" maxLength={30} />
          </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
            <Form.Label style={{textAlign: "center", marginRight: "16px"}} className='label'><b>Members</b></Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
                    <div>
            <Form.Label className='label'><b>Facilities</b></Form.Label>
            </div>
            <div>
            <Form.Control as="textarea" rows={3} />
          </div>
          </Form.Group>
              <div className="m-t admin-button">
          <Button className='btn-color' onClick={()=>handleRoomBooking()} as="input" size="lg" type="submit" value="Book" />
        </div>
              </div>
          </div>
          <div className='admin-feed-right'>
            
          <div className='room-status meeting-room-booked mb-5'>
          <ContentHeader maxWidth="100" textAlign='center' title="Your Booked Rooms" />
          <br/>
          <div className='primary-text-color mb-2'>{latestDate()}</div>
          <div>
          <Table striped bordered hover size="sm">
      <thead>
        <tr style={{textAlign: "center"}}>
          <th>Room Name</th>
          <th>From</th>
          <th>To</th>
          <th>Members</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{textAlign: "center"}}>
          <td>Red</td>
          <td>07:00</td>
          <td>10:00</td>
          <td><RxPerson style={{cursor: "pointer"}} onClick={viewInvitedMembers}/></td>
          <td><RxPencil1 style={{cursor: "pointer"}} onClick={handleEditBooking}/><span><RxTrash onClick={handleDeleteBooking} style={{cursor: "pointer", color: "red", marginLeft: "8px"}}/></span></td>
        </tr>
        <tr style={{textAlign: "center"}}>
          <td>White</td>
          <td>09:00</td>
          <td>13:00</td>
          <td><RxPerson style={{cursor: "pointer"}} onClick={viewInvitedMembers}/></td>
          <td><RxPencil1 style={{cursor: "pointer"}} onClick={handleEditBooking}/><span><RxTrash onClick={handleDeleteBooking} style={{cursor: "pointer", color: "red", marginLeft: "8px"}}/></span></td>
        </tr>
      </tbody>
      </Table>
          </div>
        </div>
        <div className='room-status meeting-room-booked'>
          <ContentHeader maxWidth="100" textAlign='center' title="Room Availability Status" />
          <br/>
          <div className='room-features'>
            <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'><b>Date</b></Form.Label>
        <Form.Control htmlSize={3} type="date" />
      </Form.Group>
      <div className='d-flex'>
            <Form.Group md="9" className="mb-3 d-flex flex-together label-room" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'><b>From</b></Form.Label>
        <Form.Control className='max-width' maxLength="5" type="text" />
      </Form.Group>
            <Form.Group className="mb-3 d-flex flex-together label-room" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'><b>To</b></Form.Label>
        <Form.Control className='max-width' maxLength="5" type="text" />
      </Form.Group>
      </div>
      <div className="m-t admin-button">
      <Button className='btn-color' onClick={()=>handleRoomAddition()} as="input" size="lg" type="submit" value="Check Availability" />
    </div>
            </div>
        </div>
        </div>
        </div>

        <ConfirmationModal show={show} onHide={handleClose} data={data} content={modalContent} btnVariant={variant} />
        </>
  )
}

export default HostDashboard