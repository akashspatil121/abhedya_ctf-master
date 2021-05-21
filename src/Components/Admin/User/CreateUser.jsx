import React from "react";
import "./CreateUser.css"
import Navbar from "../../Navbar/Navbar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const CreateUser = () => {
    return(
        <>
            <section className="createuser_main_container">
            <AdminNavbar/>
            <Navbar/>
                <div className="createuser_top" >
                    <h1>Create User</h1>
                </div>

                <div className="createuser_form">
                    <label>User Name</label>
                    <input type="text"></input>

                    <label>Email</label>
                    <input type="text"></input>

                    <label>Password</label>
                    <input type="password"></input>

                    <label>Website</label>
                    <span>Optional</span>
                    <input type="text"></input>

                    <label>Affiliation</label>
                    <span>Optional</span>
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

<input className="createuser_checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
<label className="createuser_checkbox_heading" for="vehicle1"> Verified</label>
<input className="createuser_checkbox" type="checkbox" id="vehicle1" name="vehicle2" value="Car"/>
<label className="createuser_checkbox_heading" for="vehicle2"> Hidden</label>
<input className="createuser_checkbox" type="checkbox" id="vehicle1" name="vehicle3" value="Boat"/>
<label className="createuser_checkbox_heading" for="vehicle3"> Banned</label>
<br/>
<button>Submit</button>
                </div>
                <footer className="notification_footer">
          <span>Powered by CTFd</span>
          <p>Version3.3.0</p>
        </footer>
            </section>
        </>
    );
}
export default CreateUser;