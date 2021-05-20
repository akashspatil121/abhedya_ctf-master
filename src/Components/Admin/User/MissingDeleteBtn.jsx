import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


function MissingDeleteBtn() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="delete_btn_main" variant="primary" onClick={handleShow}>
        <i className="fa fa-trash delete_icon"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Missing</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete 0 missing?</Modal.Body>
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
  
export default MissingDeleteBtn;