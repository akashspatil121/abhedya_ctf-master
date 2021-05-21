import React from "react";
import "./ChallengesUserClick.css"
import { Tabs, Sonnet, Tab, TabPanel, Form } from "react-bootstrap";
import UserFileBtn from "./UserFileBtn";
import UserMenuBtn from "./UserMenuBtn";
import UserDeleteBtn from "./UserDeleteBtn";
import Navbar from "../../Navbar/Navbar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const ChallengesUserClick = () => {
    return(
        <>
        <section className="challenges_user_click_main">
        <AdminNavbar/>
        <Navbar/>
            <div className="challenges_user_click_top">
                <h1>Welcome</h1>
                <h3>Warmup</h3>
                <h3>standard</h3>
                <p>visible</p>
                <h3>10 points</h3>
                <div className="challenges_user_click_icon">
                <UserFileBtn/>
                <UserMenuBtn/>
                <UserDeleteBtn/>
                </div>
            </div>
      <section className="challenges_user_click_grid_container" >
            <div className="challenges_right_main_container">
          <Tabs
            defaultActiveKey="Solves"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="Solves" title="Comments">
              <div className="challenge_user_table_container">
                <h1>Comments</h1>
                <textarea type="text" placeholder="Add comment" ></textarea>
                <button>Comment</button>
              </div>
            </Tab>
            <Tab eventKey="Fails" title="Flags">
              <div className="challenge_user_table_container">
                <h1>Flags</h1>
                <div className="userinformation_flag">
                    <div className="userinfrmation_flag_row">
                        <h5>type</h5>
                        <h5>Flag</h5>
                        <h5>Settings</h5>
                    </div>
                    <div className="userinfrmation_flag_row ">
                        <p>static</p>
                        <p>Abhedya Welcome</p>
                        <p>Delete</p>
                    </div>
                </div>
                <button>Create Flag</button>
              </div>
            </Tab>
            <Tab eventKey="Awards" title="Files">
              <div className="challenge_user_table_container">
                <h1>Flies</h1>
                <div>
                  <div className="challenge_user_award_file">
                    <p>File</p>
                    <p>Settings</p>
                  </div>
                  <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile2" />
    <p>Attach multiple files using Control+Click or Cmd+Click.</p>
  </Form.Group>
</Form>

<button>Upload</button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Missing" title="Tags">
              <div className="challenge_user_table_container">
                <h1 className="challenge_user_table_tags">Tags</h1>
                <h6 className="challenge_user_table_tags">Tag</h6>
                <p className="challenge_user_table_tags">Type tag and press Enter</p>
                <input type="text"></input>
               </div>
            </Tab>
     
           <Tab eventKey="Hints" title="Hints">
              <div className="challenge_user_table_container">
                <h1>Hints</h1>
                <div className="challenge_user_table_hints">
                <h6>ID</h6>
                <h6>Hint</h6>
                <h6>Cost</h6>
                <h6>Settings</h6>
               </div>
               <button>Create Hint</button>
               </div>
            </Tab>

            <Tab eventKey="Requirements" title="Requirements">
              <div className="challenge_user_table_container">
                <h1>Requirements</h1>
                <div className="challenge_user_table_requirement" >
                <h6>Requirement</h6>
                <h6>Settings</h6>
               </div>
                    <input list="browsers" name="browser"/>
  <datalist id="browsers">
    <option value="Internet Explorer"/>
    <option value="Firefox"/>
    <option value="Chrome"/>
    <option value="Opera"/>
    <option value="Safari"/>
  </datalist>           
               <button>Add Prerequisite</button>
               </div>
            </Tab>
          </Tabs>
        </div>

      
        <div className="challenges_left_container_main">
        
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
    

 
        </section>
        </section>
        </>
    );
}
export default ChallengesUserClick;