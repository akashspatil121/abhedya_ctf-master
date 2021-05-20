import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteUsers = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a variant="primary" onClick={handleShow}>
         <i className="fa fa-trash delete_icon"></i>
        </a>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete 0 users?</Modal.Body>
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
export default DeleteUsers;