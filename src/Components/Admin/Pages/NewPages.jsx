import React from "react";
import { useState } from "react";
import { Tabs, Tab, Modal, Button, Form,  } from "react-bootstrap";
import "./NewPages.css"
import AllPages from "./AllPages"
 
const NewPages = (props) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <section>
        <div className="newpage_form">
          <form>
            <label className="newpage_label">
              <span className="newpage_form_heading">Title</span>
              <input className="newpage_input" type="text" placeholder="Title" value="akash" />
              <p className="newpage_para">This is the title shown on the navigation bar</p>
            </label>
            <br />
            <label className="newpage_label">
              <span className="newpage_form_heading">Route</span>
              <br />
              <input className="newpage_input" placeholder="Route" type="text" />
            </label>
            <p className="newpage_para">
            This is the URL route that your page will be at (e.g. /page). You can also enter links to link to that page.
            </p>
            </form>
            <div className="newpage_content">
                <h1>Content</h1>
                <p>This is the HTML content of your page</p>

                <Tabs defaultActiveKey="Write" transition={false} id="noanim-tab-example">
  <Tab eventKey="Write" title="Write">
  <Button className="newpages_content_media_btn" variant="primary" onClick={handleShow}>
  <i class="fa fa-wpforms" aria-hidden="true"></i> Medial Library
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="newpage_media_modal">Media Library</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section className="newpage_media_library_container">
            <div>
                <img src="../company.png" alt="abhedya" />
            </div>
            <div className="newpage_media_library_detail">
                <h3>Media Details</h3>
                <label>Link :</label>
                <input type="text" />
                <br/>
                <button className="newpage_btn_insert">Insert</button>
                <button className="newpage_btn_download"><i class="fa fa-download" aria-hidden="true"></i></button>
                <button className="newpage_btn_delete"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        </section>
        <hr/>
            <div>
                <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload Files" />
    <p>Attach multiple files using Control+Click or Cmd+Click.</p>
  </Form.Group>
</Form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Upload</Button>
        </Modal.Footer>
      </Modal>
      <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Draft" name="group1" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="Hidden" name="group1" type={type} id={`inline-${type}-2`} />
      <Form.Check
        inline
        label="Authentication Required"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form>
<div className="newpages_bottom_form">
<textarea className="newpages_content_textarea" type="text"></textarea>
<button className="newpages_content_save_btn">Save</button>
</div>
  </Tab>
  <Tab eventKey="Preview" title="Preview">
    <h1>akxnieujnc</h1>
  </Tab>
</Tabs>
                
            </div>
            <footer className="notification_footer" style={{marginTop: "10rem"}} >
          <span>Powered by CTFd</span>
          <p>Version3.3.0</p>
        </footer>
            </div>
        
        </section>
        </>
    );
}
export default NewPages;