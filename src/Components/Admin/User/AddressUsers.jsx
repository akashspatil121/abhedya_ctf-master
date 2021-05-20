import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Table(ipaddress, lastseen, country ) {
  return { ipaddress, lastseen, country };
}

const rows = [
  Table("106.195.8.59",	"May 18th, 12:09:50 AM", "None"),
  Table("106.195.9.195", "May 17th, 6:16:49 AM",	"None"),
  Table("106.195.8.59",	"May 18th, 12:09:50 AM", "None"),
  Table("106.195.9.195", "May 17th, 6:16:49 AM",	"None"),
  Table("106.195.8.59",	"May 18th, 12:09:50 AM", "None"),
  Table("106.195.9.195", "May 17th, 6:16:49 AM",	"None"),
  Table("106.195.8.59",	"May 18th, 12:09:50 AM", "None"),
  Table("106.195.9.195", "May 17th, 6:16:49 AM",	"None"),
 

];


const AddressUsers = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <a variant="primary" onClick={handleShow}>
         <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
        </a>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="address_user_table">
              <h4>IP Address</h4>
              <h4>Last Seen</h4>
              <h4>Country</h4>
            </div>
            {rows.map((row) => (
            <div className="address_user_table address_user_row">
              <span>{row.ipaddress}</span>
              <span>{row.lastseen}</span>
              <span>{row.country}</span>
            </div>
            ))}
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
export default AddressUsers;