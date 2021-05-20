import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./AllSpecialbtn.css"

const EditUsers = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a variant="primary" onClick={handleShow}>
         <i className="fa fa-user" aria-hidden="true"></i>
      </a>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="edituser_form">
                    <label>User Name</label>
                    <input type="text"></input>

                    <label>Email</label>
                    <input type="text"></input>

                    <label>Password</label>
                    <input type="password"></input>

                    <label>Website</label>
                    <input type="text"></input>

                    <label>Affiliation</label>
                    <input type="text"></input> 

                <label>Country</label>
                    <input list="browsers" name="browser"/>
  <datalist id="browsers">
    <option value="Internet Explorer"/>
    <option value="Firefox"/>
    <option value="Chrome"/>
    <option value="Opera"/>
    <option value="Safari"/>
  </datalist>           

  <select id="createuser" name="cars">
  <option value="volvo">User</option>
  <option value="saab">Admin</option>
</select>

<input className="edituser_checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className="edituser_checkbox_heading" for="vehicle1"> Verified</label>
<input className="edituser_checkbox" type="checkbox" id="vehicle1" name="vehicle2" value="Car"/>
<label className="edituser_checkbox_heading" for="vehicle2"> Hidden</label>
<input className="edituser_checkbox" type="checkbox" id="vehicle1" name="vehicle3" value="Boat"/>
<label className="edituser_checkbox_heading" for="vehicle3"> Banned</label>
<br/>
                </div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}
export default EditUsers;