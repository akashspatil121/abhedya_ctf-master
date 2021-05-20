import React from "react";
import "./Webchallenges.css";
import scroll from "../../Assets/ctf-images/scroll.svg";
import challenge1 from "../../Assets/ctf-images/challenge1.png";
import challenge2 from "../../Assets/ctf-images/challenge2.png";
import challenge3 from "../../Assets/ctf-images/challenge3.png";
import challenge4 from "../../Assets/ctf-images/challenge4.png";
import challenge5 from "../../Assets/ctf-images/challenge5.png";
import challenge6 from "../../Assets/ctf-images/challenge6.png";
import Navbar from "../Navbar/Navbar";

function Webchallenges() {
  return (
    <div className="crytography_challenges">
      <Navbar />
      <div class="mob-categoryimage"></div>
      <span class="mob-heading">
      Web<br/>Challenge
      </span>
      <br />
      <span class="mob-subheading">ABHEDYA</span>
      <br />
      <span class="mob-subheading" style={{ border: "none", color: "grey" }}>
        CTF
      </span>
      <div class="mob-content">
        <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
        About Web
        </p>
        <p>
        Hack the web and become the admin.
        </p>
      </div>
      <img src={scroll} class="mob-scroll" alt="scrolldown" />

      <div class="mobtab">
        <div class="mobtab-bar">Abhedya</div>
        <div class="mobtab-category">
          <div class="row">
            <div class="col-12">
              Back<i class="fa">&#xf060;</i>
            </div>
          </div>
        </div>
        <div class="mobtab-container">
          <div class="mobtab-content">
            <p class="mobtab-heading">
            web
            </p>
            <p class="mobtab-subheading">
              <b>ABHEDYA</b>
              <br />
              CTF
            </p>
            <p>
            Hack the web and become the admin.
            </p>
          </div>
        </div>
      </div>

      <div class="back">
        <a href="/category/web">
          back
          <i class="fa">&#xf04a;</i>
        </a>
      </div>

      <div class="slider-fluid-container">
        <div class="slider-container">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
              <li data-target="#myCarousel" data-slide-to="5"></li>
            </ol>

            <div class="carousel-inner">
              <div
                class="item active"
                data-toggle="modal"
                data-target="#challenge1"
              >
                <center>
                  <img
                    src={challenge1}
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </center>
              </div>
              <div class="item" data-toggle="modal" data-target="#challenge2">
                <center>
                  <img
                    src={challenge2}
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </center>
              </div>
              <div class="item" data-toggle="modal" data-target="#challenge3">
                <center>
                  <img
                    src={challenge3}
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </center>
              </div>
              <div class="item" data-toggle="modal" data-target="#challenge4">
                <center>
                  <img
                    src={challenge4}
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </center>
              </div>
              <div class="item" data-toggle="modal" data-target="#challenge5">
                <center>
                  <img
                    src={challenge5}
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </center>
              </div>
              <div class="item" data-toggle="modal" data-target="#challenge6">
                <center>
                  <img
                    src={challenge6}
                    alt="Los Angeles"
                    style={{ width: "100%" }}
                  />
                </center>
              </div>
            </div>

            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="challenge1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content p-4 bg-dark text-light">
            <div class="modal-header">
              <h5
                class="modal-title text-capitalize"
                id="exampleModalLongTitle"
              >
                Challenge.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, vel alias pariatur labore deserunt, neque at soluta
                    nisi sunt nulla maxime? Impedit sit suscipit in?
                    <br />
                    Example select
                  </label>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Your Flag.
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button style={{display:"none"}} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
     
      <div
        class="modal fade"
        id="challenge2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content p-4 bg-dark text-light">
            <div class="modal-header">
              <h5
                class="modal-title text-capitalize"
                id="exampleModalLongTitle"
              >
                Challenge.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Labore deserunt, neque at soluta nisi sunt nulla maxime?
                    Impedit sit suscipit in?
                    <br />
                    Example select
                  </label>
                 
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Your Flag.
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button style={{display:"none"}} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div
        class="modal fade"
        id="challenge3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content p-4 bg-dark text-light">
            <div class="modal-header">
              <h5
                class="modal-title text-capitalize"
                id="exampleModalLongTitle"
              >
                Challenge.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Amet consectetur adipisicing elit. Repellendus quo ipsum
                    placeat qui nam magni! Rerum laudantium sed nostrum.Labore
                    deserunt, neque at soluta nisi sunt nulla maxime? Impedit
                    sit suscipit in?
                    <br />
                    Example select
                  </label>
                 
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Your Flag.
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button style={{display:"none"}} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div
        class="modal fade"
        id="challenge4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content p-4 bg-dark text-light">
            <div class="modal-header">
              <h5
                class="modal-title text-capitalize"
                id="exampleModalLongTitle"
              >
                Challenge.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
                    praesentium?Labore deserunt, neque at soluta nisi sunt nulla
                    maxime? Impedit sit suscipit in?
                    <br />
                    Example select
                  </label>
                  
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Your Flag.
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button style={{display:"none"}} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    
      <div
        class="modal fade"
        id="challenge5"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content p-4 bg-dark text-light">
            <div class="modal-header">
              <h5
                class="modal-title text-capitalize"
                id="exampleModalLongTitle"
              >
                Challenge.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Sit amet consectetur adipisicing.Labore deserunt, neque at
                    soluta nisi sunt nulla maxime? Impedit sit suscipit in?
                    <br />
                    Example select
                  </label>
                  
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Your Flag.
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button style={{display:"none"}} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
     
      <div
        class="modal fade"
        id="challenge6"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content p-4 bg-dark text-light">
            <div class="modal-header">
              <h5
                class="modal-title text-capitalize"
                id="exampleModalLongTitle"
              >
                Challenge.
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Totam dolorum necessitatibus ad neque eveniet beatae ducimus
                    nulla ut, tempora suscipit et eum ab eaque nemo molestiae
                    quis nobis molestias sunt consequatur?Labore deserunt, neque
                    at soluta nisi sunt nulla maxime? Impedit sit suscipit in?
                    <br />
                    Example select
                  </label>
                
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Your Flag.
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button style={{display:"none"}} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webchallenges;
