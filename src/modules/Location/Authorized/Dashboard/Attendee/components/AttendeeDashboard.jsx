import React, { useState } from 'react'
import ContentHeader from '../../../../../../shared/ContentHeader'
import { abbreviateNames } from '../../../../../../helpers/AbbrvName'
import { Form, Table } from 'react-bootstrap'
import ConfirmationModal from '../../../../../../shared/ConfirmationModal'

const AttendeeDashboard = () => {
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
        <div>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta placeat pariatur quidem! Distinctio beatae voluptate consectetur enim odit aut tenetur iusto officiis molestiae, a, odio facilis assumenda? Dolorem, quis. adipisicing elit. Est sint aspernatur amet! Recusandae, magni expedita voluptas quos excepturi quod consequatur laboriosam modi necessitatibus! Deleniti totam mollitia nihil facere, nobis neque!</div>
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
    <div className='primary-text-color mb-2'>7-17-2023</div>
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
    <td style={{maxWidth: "20px !important"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum sunt, accusantium similique earum cum dolorem illo sit laudantium molestias aliquam ea dolor nihil quod in atque rem ipsa officia?</td>
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