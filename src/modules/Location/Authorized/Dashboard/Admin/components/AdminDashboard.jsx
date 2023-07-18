import React, { useState } from 'react'
import { useAuth } from '../../../../../../utils/auth'
import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import '../css/admin.css'
import ContentHeader from '../../../../../../shared/ContentHeader';
import Table from 'react-bootstrap/Table';
import { abbreviateNames } from '../../../../../../helpers/AbbrvName';

const AdminDashboard = () => {
  const auth = useAuth()

  const [isAlert, setIsAlert] = useState(false)

  let data = {
    firstname: "Sanket",
    lastname: "Upreti",
    username: "Sanket Upreti",
    role: "admin"
} 

  const handleAnnouncementPost = () =>{
    console.log("announcement posted")
    setIsAlert(true)
    
    setTimeout(()=>{
      setIsAlert(false)
    }, 1000)

  }

  return (
    <>
{isAlert && 
<Alert key={'success'} variant={'success'}>
          Successfully Posted
        </Alert>
        }

    <div className='admin-announcement'>
    <Form.Control as="textarea" maxLength={300} placeholder="Post an announcement" rows={3} />
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
          <div>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta placeat pariatur quidem! Distinctio beatae voluptate consectetur enim odit aut tenetur iusto officiis molestiae, a, odio facilis assumenda? Dolorem, quis. adipisicing elit. Est sint aspernatur amet! Recusandae, magni expedita voluptas quos excepturi quod consequatur laboriosam modi necessitatibus! Deleniti totam mollitia nihil facere, nobis neque!</div>
          </div>
          </div>

          </div>
          </div>
          <br/>
          <br/>
          <ContentHeader title="Assign Hosts" />
          <br/>
          <div className='room-status feed-width'>
          <Form.Select aria-label="Default select example">
      <option value="1">User1</option>
      <option value="2">User2</option>
      <option value="3">User3</option>
    </Form.Select>
    <div className="m-t admin-button">
      <Button className='btn-color' onClick={()=>handleAssignMentors()} as="input" size="lg" type="submit" value="Assign" />
    </div>
          </div>
          <br/>
          <br/>
          <ContentHeader title="Add Rooms" />
          <br/>
          <div className='room-status feed-width'>
            <div className='room-features d-flex'>
            <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'><b>Room Name</b></Form.Label>
        <Form.Control htmlSize={3} type="text" />
      </Form.Group>
            <Form.Group className="mb-3 d-flex label-room" controlId="exampleForm.ControlInput1">
        <Form.Label style={{textAlign: "center", marginRight: "16px"}} className='label'><b>Total Members Allowed</b></Form.Label>
        <Form.Control type="number" />
      </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div>
        <Form.Label className='label'><b>Facilities</b></Form.Label>
        </div>
        <div>
        <Form.Control as="textarea" rows={3} />
      </div>
      </Form.Group>
          <div className="m-t admin-button">
      <Button className='btn-color' onClick={()=>handleRoomAddition()} as="input" size="lg" type="submit" value="Add" />
    </div>
          </div>
      </div>
      <div className='admin-feed-right'>
        <div className='room-status meeting-room-booked'>
          <ContentHeader maxWidth="100" textAlign='center' title="Room Status" />
          <br/>
          <div className='primary-text-color mb-2'>7-17-2023</div>
          <div>
          <Table striped bordered hover size="sm">
      <thead>
        <tr style={{textAlign: "center"}}>
          <th>Room Name</th>
          <th>From</th>
          <th>To</th>
          <th>Hosted by</th>
        </tr>
      </thead>
      <tbody style={{textAlign: "center"}}>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>Rama naathan krishnanatahhan swaami</td>
        </tr>
      </tbody>
      </Table>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard