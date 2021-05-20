import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const UserFileBtn = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a variant="primary" onClick={handleShow}>
         <i class="fa fa-newspaper-o" aria-hidden="true"></i>
        </a>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Challenges</Modal.Title>
        </Modal.Header>
        <Modal.Body className="challenges_user_btn">
            <h1>Welcome</h1>
            <br/>
            <h1>10</h1>
            <input type="text" placeholder="Flag" ></input>
            <button>Submit</button>
        </Modal.Body>
      </Modal>
        </>
    );
}
export default UserFileBtn;