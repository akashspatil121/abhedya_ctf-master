import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditDeleteBtn.css"

const NewDeleteBtn = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a className="new_delete_link" variant="primary" onClick={handleShow}>
         <i className="fa fa-trash new_delete_icon"></i>
        </a>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete challenges</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete 0 challenges?</Modal.Body>
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
export default NewDeleteBtn;