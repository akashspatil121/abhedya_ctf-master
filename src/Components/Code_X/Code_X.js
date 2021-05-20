import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Code_X.css'
import scroll from "../../Assets/ctf-images/scroll.svg";
import code_X from "../../Assets/ctf-images/code_X.jpg";

function Code_X() {
    return (
        <div className="cryptography">
        <Navbar />
        <div class="cryptography_mob-categoryimage"></div>
        <span class="cryptography_mob-heading">
        Code_X
        </span>
        <br />
        <span class="cryptography_mob-subheading">ABHEDYA</span>
        <br />
        <span class="cryptography_mob-subheading" style={{ border: "none", color: "grey" }}>
          CTF
        </span>
        <div class="cryptography_mob-content">
          <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          About.
          </p>
          <p>
          First, solve the problem. Then, write the code.
          </p>
  
          <p class="cryptography_mob-play">
            <a href="/category/Code_X/Code_Xchallenges">
              <i class="fa">&#xf04b;</i>play challenges
            </a>
          </p>
        </div>
        <img src={scroll} class="cryptography_mob-scroll" alt="scrolldown" />
  
        <div class="cryptography_mobtab">
          <div class="cryptography_mobtab-bar">Abhedya</div>
          <div class="cryptography_mobtab-category">
            <div class="row">
              <div class="col-12">
                Back<i class="fa">&#xf060;</i>
              </div>
            </div>
          </div>
          <div class="cryptography_mobtab-container">
            <div class="cryptography_mobtab-content">
              <p class="cryptography_mobtab-heading">
              Code_X
              </p>
              <p class="cryptography_mobtab-subheading">
                <b>ABHEDYA</b>
                <br />
                CTF
              </p>
              <p>
              First, solve the problem. Then, write the code.
              </p>
            </div>
          </div>
        </div>
        <div class="back">
          <a href="/category">
            back
            <i class="fa">&#xf04a;</i>
          </a>
        </div>
  
        <div id="cryptography_container">
          <div id="cryptography_container2">
            <div class="cryptography_box cryptography_box-one cryptography_third" style={{ width: "3vw" }}></div>
            <div class="cryptography_box cryptography_first" style={{ borderLeft: "1px #4e4e4e solid" }}>
              <img src={code_X} class="categoryimage" alt="cryptography" />
            </div>
          </div>
        </div>
  
        <div class="play">
          <a href="/category/Code_X/Code_Xchallenges">
            play challenges
            <i class="fa">&#xf04b;</i>
          </a>
        </div>
      </div>
   
    )
}

export default Code_X ;
