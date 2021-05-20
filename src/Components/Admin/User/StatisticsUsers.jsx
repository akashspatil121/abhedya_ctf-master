import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AllSpecialbtn.css"

const StatisticsUsers = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a variant="primary" onClick={handleShow}>
         <i className="fa fa-pie-chart" aria-hidden="true"></i>
        </a>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Users Statistics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1 className="userstatistics_modal_head">No date at yet</h1>
        </Modal.Body>
        
      </Modal>
        </>
    );
}
export default StatisticsUsers;