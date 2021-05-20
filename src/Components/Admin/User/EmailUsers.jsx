import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AllSpecialbtn.css"

const EmailUsers = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a variant="primary" onClick={handleShow}>
         <i className="fa fas fa-envelope fa"></i>
        </a>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Email User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label className="emailuser_lable" >Message</label>
            <textarea className="emailuser_textarea" type="text"></textarea>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}
export default EmailUsers;