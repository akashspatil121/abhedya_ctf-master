import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditDeleteBtn.css"

function NewEditBtn() {
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
          <Modal.Title>Edit Challenges</Modal.Title>
        </Modal.Header>
        <Modal.Body className="challenges_edit_btn_modal_content">
        <label>Category</label>
        <input type="text"></input>
        <br/>
        <label>Value</label>
        <input type="text"></input>
        <br/>
        <label for="verified">State </label>

<select name="cars" id="cars">
  <option value="empty" selected>--</option>
  <option value="true">Visible</option>
  <option value="false">Hidden</option>
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
  
export default NewEditBtn;