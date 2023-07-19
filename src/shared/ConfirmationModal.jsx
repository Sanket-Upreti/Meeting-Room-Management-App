import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

const ConfirmationModal = ({show, onHide, data, content, btnVariant}) => {
  return (
    <Modal
    show={show}
    onHide={onHide}
    keyboard={false}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>{data?.room ? `${data.room} room` : "Attendance Denial Reason"}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {content}
    </Modal.Body>
    {btnVariant !== "none" && <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      {btnVariant === "info" ? <Button variant={btnVariant} onClick={onHide}>Submit</Button> :  <Button variant={btnVariant} onClick={onHide}>{btnVariant === "primary" ? "Edit": "Yes"}</Button>}
    </Modal.Footer>}
  </Modal>
  )
}

export default ConfirmationModal