import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AwardUsers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <a variant="primary" onClick={handleShow}>
        <i className="fa fa-trophy" aria-hidden="true"></i>
      </a>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Award User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="edituser_form">
            <label>Name</label>
            <input type="text"></input>

            <label>Value</label>
            <input type="text"></input>

            <label>Category</label>
            <input type="text"></input>

            <label>Description</label>
            <textarea type="text"></textarea>

            <label>Icon</label>
            <div className="awarduser_form_radio_main">
              <div className="awarduser_form_radio_container">
                <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                <label for="male"> None</label>
                </div>
                <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                <label for="female"><i class="fa fa-shield" aria-hidden="true"> Shield</i></label>
                </div>
                <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                />
                <label for="other"><i class="fa fa-bug" aria-hidden="true"> Bugs</i></label>
              </div>
              </div>

              <div className="awarduser_form_radio_container">
              <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                <label for="male"><i class="fa fa-diamond" aria-hidden="true"> Diamond</i></label>
                </div>
                <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                <label for="female"><i class="fa fa-crosshairs" aria-hidden="true"> Crosshair</i></label>
                </div>
                <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                />
                <label for="other"><i class="fa fa-ban" aria-hidden="true"> Ban</i></label>
              </div>
              </div>
              <div className="awarduser_form_radio_container">
              <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                <label for="male"><i class="fa fa-bolt" aria-hidden="true"> Lightning</i></label>
                </div>
                <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />      
                <label for="female"><i class="fa fa-code" aria-hidden="true"> Code</i></label>
                </div>
                <div>
                <input
                  className="awarduser_form_radio"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                />
                <label for="other"><i class="fa fa-star" aria-hidden="true"> Star</i></label>
              </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AwardUsers;
