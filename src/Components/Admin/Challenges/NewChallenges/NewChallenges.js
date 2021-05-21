import React from "react";
import Navbar from "../../../Navbar/Navbar";
import AdminNavbar from "../../AdminNavbar/AdminNavbar";
import "./NewChallenges.css";


function NewChallenges() {
  return (
    <div className="newchallenge_main_container">
    <AdminNavbar/>
      <Navbar />
      <div class="jumbotron" style={{ backgroundColor: "#212529" }}>
        <div className="container pt-5 mt-5 mt-md-0 pt-md-0">
          <h1 style={{ textAlign: "center", color: "#fff" }} >Create Challenge</h1>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-11 col-md-9 mx-auto">
            <div class="my-auto">
              <form action="#!">
                <div class="form-group mb-4">
                  <label for="name">Name</label>
                  <br />
                  <small class="subheading">The name of your challenge.</small>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    class="form-control rounded-0 border-0 p-5 text-light"
                    placeholder="Enter Challenge Name"
                    style={{ backgroundColor: "#212529" }}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Category</label>
                  <br />
                  <small class="subheading">
                    The category of your challenge.
                  </small>
                  <select
                    class="custom-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    style={{ fontSize:"18px" ,color:'#999', backgroundColor: "#212529" }}
                  >
                    <option selected>Choose...</option>
                    <option value="1">cryptography</option>
                    <option value="2">forensic</option>
                    <option value="3">reverse</option>
                    <option value="4">web</option>
                    <option value="5">Code_X</option>
                    <option value="6">misc</option>
                    <option value="7">osint</option>
                  </select>
                </div>
                <div class="form-group mb-4">
                  <label for="exampleFormControlTextarea1">Challenge</label>
                  <br />
                  <small class="subheading">
                    Use this to give a brief introduction of your challange.
                  </small>
                  <div class="toolbar">
                    <ul
                      class="tool-list"
                      style={{
                        backgroundColor: "#212529",
                      }}
                    >
                      <li class="tool">
                        <button
                          type="button"
                          data-command="justifyLeft"
                          class="tool--btn"
                        >
                          <i class="fa fa-align-left"></i>
                        </button>
                      </li>
                      <li class="tool">
                        <button
                          type="button"
                          data-command="justifyCenter"
                          class="tool--btn"
                        >
                          <i class="fa fa-align-center"></i>
                        </button>
                      </li>
                      <li class="tool">
                        <button
                          type="button"
                          data-command="bold"
                          class="tool--btn"
                        >
                          <i class="fa fa-bold"></i>
                        </button>
                      </li>
                      <li class="tool">
                        <button
                          type="button"
                          data-command="italic"
                          class="tool--btn"
                        >
                          <i class="fa fa-italic"></i>
                        </button>
                      </li>
                      <li class="tool">
                        <button
                          type="button"
                          data-command="underline"
                          class="tool--btn"
                        >
                          <i class="fa fa-underline"></i>
                        </button>
                      </li>
                      <li class="tool">
                        <button
                          type="button"
                          data-command="insertOrderedList"
                          class="tool--btn"
                        >
                          <i class="fa fa-list-ol"></i>
                        </button>
                      </li>
                      <li class="tool">
                        <button
                          type="button"
                          data-command="insertUnorderedList"
                          class="tool--btn"
                        >
                          <i class="fa fa-list-ul"></i>
                        </button>
                      </li>
                      <li class="tool">
                        <button
                          type="button"
                          data-command="createlink"
                          class="tool--btn"
                        >
                          <i class="fa fa-link"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="output"
                    contenteditable="true"
                    style={{ backgroundColor: "#212529" }}
                  ></div>
                </div>
                <div class="form-group mb-4">
                  <label for="value">Value</label>
                  <br />
                  <small class="subheading">
                    This is how many points are rewarded for solving this
                    challenge.
                  </small>
                  <input
                    type="value"
                    name="value"
                    id="value"
                    class="form-control rounded-0 border-0 p-5 text-light"
                    placeholder="Enter Value"
                    style={{ backgroundColor: "#212529" }}
                  />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">
                      Select Background Image
                    </label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                <div class="form-group mb-4 text-right">
                  <input
                    name="submit"
                    id="submit"
                    class="btn btn-primary login-btn rounded-0 border-0 pl-3 pr-3 p-2"
                    type="button"
                    value="Create"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
      <footer className="notification_footer">
          <span>Powered by CTFd</span>
          <p>Version3.3.0</p>
        </footer>
    </div>
    
  );
}

export default NewChallenges;
