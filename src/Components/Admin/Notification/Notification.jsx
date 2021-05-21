import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Notification.css";
import {useState} from "react";   
import AdminNavbar from "../AdminNavbar/AdminNavbar";


const Notification = () => {
   const [topic, setName] = useState()
  const inputTitle = (title) => {
    setName(title.target.value)
  }

  const [content, setContent]= useState()
  const inputPara = (para) => {
    setContent(para.target.value)
  }
  let date= new Date().toDateString();
  let time= new Date().toLocaleTimeString();
  const [ctime, setCtime]= useState()
  const borderColor = "1px solid #fff"
  const [border, setBorder] = useState()
  const [mainContent, setMain] = useState()
  const [mainTitle, setTitle] = useState()
  const onSubmit = () => {
    setTitle(topic)
    setMain(content)
    setBorder(borderColor)
    setCtime(date + time)
    alert(topic + content + 'ah') 
  }

  return (
    <div className="notification">
   
      <section>
       <AdminNavbar/>
        <Navbar />
        <div className="jumbotron" style={{ backgroundColor: "#212529" }}>
          <div className="container pt-5 pt-md-0">
            <h1 className="notification_heading">Notification</h1>
          </div>
        </div>

        <div className="notification_form">
          
            <label className="notification_label">
              <span className="notification_form_heading">Title</span>
              <input className="notification_input" type="text" onChange={inputTitle} value={topic} />
              <p className="notification_para">Notification title</p>
            </label>
            <br />
            <label className="notification_label">
              <span className="notification_form_heading">Content</span>
              <br />
              <textarea className="notification_input" type="text" onChange={inputPara} />
            </label>
            <p className="notification_para">
              Notification contents, Can consist of HTML and/or Markdown.
            </p>
            <br />

            <div className="notification_div">
              <div>
                <label className="notification_label">
                  <span className="notification_form_heading">
                    Notification Type
                  </span>
                  <br />
                  <div className="notification_label_radio">
                    <input
                      className="notification_form_input"
                      type="radio"
                      id="male"
                      name="gender"
                    />
                    <label for="male">Toast</label>
                    <br />
                    <input
                      className="notification_form_input"
                      type="radio"
                      id="female"
                      name="gender"
                    />
                    <label className="notification_form_alert" for="female">
                      Alert
                    </label>
                    <br />
                    <input
                      className="notification_form_input"
                      type="radio"
                      id="other"
                      name="gender"
                    />
                    <label for="other">Background</label>
                  </div>
                  <p className="notification_para">
                    What type of Notification users receive
                  </p>
                </label>
              </div>

              <div>
                <label className="notification_label">
                  <span className="notification_form_heading">Play Sound</span>

                  <br />
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="notification_sound" for="vehicle1">
                    {" "}
                    Play Sound
                  </label>
                  <p className="notification_para">
                    What type of notification users receive the notification
                  </p>
                </label>
              </div>
              <div> 
              <audio id="dog"  src="https://www.freesound.org/data/previews/91/91926_7037-lq.mp3" ></audio>
                <a className="notification_button" href="javascript:playSound('dog')" onClick={onSubmit} >Submit</a>
              </div>
            </div>
          <div style={{border: border}}>
          <h1>{mainTitle}</h1>
          <p>{mainContent}</p>
          <h4>{ctime}</h4>         
        </div>
       </div>
        <footer className="notification_footer">
          <span>Powered by CTFd</span>
          <p>Version3.3.0</p>
        </footer>
      </section>
    </div>
  );
};
export default Notification;
