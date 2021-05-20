import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditBtn.css"

function EditBtn() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="edit_btn_main" variant="primary" onClick={handleShow}>
        <i class="fa fa-pencil"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Users</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit_btn_modal_content">
        <label for="verified">Verified </label>

<select name="cars" id="cars">
  <option value="empty" selected>--</option>
  <option value="true">True</option>
  <option value="false">False</option>
</select>
<br/> <br/>
<label for="verified">Banned </label>

<select name="cars" id="cars">
  <option value="empty" selected>--</option>
  <option value="true">True</option>
  <option value="false">False</option>
</select>
<br/> <br/>
<label for="verified">Hidden </label>

<select name="cars" id="cars">
  <option value="empty" selected>--</option>
  <option value="true">True</option>
  <option value="false">False</option>
</select>
<br/> <br/>
        </Modal.Body>
        <Modal.Footer>
         
          <Button className="edit_btn_submit" variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  
export default EditBtn;