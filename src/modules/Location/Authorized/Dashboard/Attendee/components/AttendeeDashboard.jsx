import React, { useState } from 'react'
import ContentHeader from '../../../../../../shared/ContentHeader'
import { abbreviateNames } from '../../../../../../helpers/AbbrvName'
import { Alert, Form, Table } from 'react-bootstrap'
import ConfirmationModal from '../../../../../../shared/ConfirmationModal'
import { latestDate } from '../../../../../../shared/LatestDate'

const AttendeeDashboard = () => {
  const [isAlert, setIsAlert] = useState(false)
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  let data = {
    firstname: "Sanket",
    lastname: "Upreti",
    username: "Sanket Upreti",
    role: "attendee",
} 

const handleClose = () => {
  setShow(false);
  setIsAlert(true)
    
  setTimeout(()=>{
    setIsAlert(false)
  }, 1000)
}

const handleShow = () => {
  setShow(true)
};

const attendanceDenied = (value) =>{
  if(value === "No"){
    const denyAttendanceContent = (
      <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
    <Form.Label style={{textAlign: "center", marginRight: "16px"}} className='label'><b>Why will you not be attending?<span>(In 150 words)</span></b></Form.Label>
    <Form.Control maxLength={150} as="textarea" />
  </Form.Group>
  )
  setModalContent(denyAttendanceContent)
  handleShow()
} 
}

  return (
    <div style={{padding: "24px 0px 0px 0px", height: "100vh"}}>
      {isAlert && 
<Alert key={'success'} variant={'success'}>
          Successfully Submitted
        </Alert>
        }
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
        <div>Meeting at room Red today! Please be there everyone.</div>
        </div>
        </div>

        </div>
        </div>
        <br/>
        <br/>
      
    <ContentHeader maxWidth="95" textAlign='left' title="Your Meetings" />
    <br/>
    <div className='room-status meeting-room-booked mb-5 feed-width' >
    <br/>
    <div className='primary-text-color mb-2'>{latestDate()}</div>
    <div>
    <Table striped bordered hover size="sm">
<thead>
  <tr style={{textAlign: "center"}}>
    <th>Room Name</th>
    <th>Agenda</th>
    <th>From</th>
    <th>To</th>
    <th>Will you be attending?</th>
  </tr>
</thead>
<tbody>
  <tr style={{textAlign: "center"}}>
    <td>Red</td>
    <td style={{maxWidth: "20px !important"}}>Discussion about presentation</td>
    <td>07:00</td>
    <td>10:00</td>
    <td><Form.Select  onChange={(event) => attendanceDenied(event.target.value)}>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </Form.Select></td>
  </tr>
</tbody>
</Table>
    </div>
  </div>

  <ConfirmationModal show={show} onHide={handleClose} data={data} content={modalContent} btnVariant={'info'} />
  </div>
  )
}

export default AttendeeDashboard