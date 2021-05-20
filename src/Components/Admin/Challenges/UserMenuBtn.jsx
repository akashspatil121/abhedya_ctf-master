import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const UserDeleteBtn = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a variant="primary" onClick={handleShow}>
         <i class="fa fa-bars" aria-hidden="true"></i>
        </a>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Challenges</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete welcome</Modal.Body>
        <Modal.Footer>
          <Button className="delete_btn_no" variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button className="delete_btn_yes" variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}
export default UserDeleteBtn;
