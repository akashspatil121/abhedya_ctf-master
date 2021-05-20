import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function HideeBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="hide_btn_main"
        variant="primary"
        onClick={handleShow}
      >
        <i class="fa fa-eye" aria-hidden="true"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Toggle Visibility</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="hide_btn_lable" for="verified">Visibility </label>
          <select className="hide_btn_select" name="cars" id="cars">
            <option value="empty" selected>
              --
            </option>
            <option value="true">Visibile</option>
            <option value="false">Hidden </option>
          </select>
          <br /> <br />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="delete_btn_yes"
            variant="primary"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HideeBtn;
