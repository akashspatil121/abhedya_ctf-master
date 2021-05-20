import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Reverse.css'
import scroll from "../../Assets/ctf-images/scroll.svg";
import reverse from "../../Assets/ctf-images/reverse.jpeg";

function Reverse() {
    return (
        <div className="cryptography">
        <Navbar />
        <div class="cryptography_mob-categoryimage"></div>
        <span class="cryptography_mob-heading">
        Reverse
        </span>
        <br />
        <span class="cryptography_mob-subheading">ABHEDYA</span>
        <br />
        <span class="cryptography_mob-subheading" style={{ border: "none", color: "grey" }}>
          CTF
        </span>
        <div class="cryptography_mob-content">
          <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          About Reverse.
          </p>
          <p>
          Reverse engineering is a process or method through the application of which one attempts to understand through deductive reasoning how a device, process, system, or piece of software accomplishes a task with very little insight into exactly how it does so.
          </p>
  
          <p class="cryptography_mob-play">
            <a href="/category/reverse/reversechallenges">
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
              Reverse
              </p>
              <p class="cryptography_mobtab-subheading">
                <b>ABHEDYA</b>
                <br />
                CTF
              </p>
              <p>
              Reverse engineering is a process or method through the application of which one attempts to understand through deductive reasoning how a device, process, system, or piece of software accomplishes a task with very little insight into exactly how it does so.              </p>
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
              <img src={reverse} class="categoryimage" alt="cryptography" />
            </div>
          </div>
        </div>
  
        <div class="play">
          <a href="/category/reverse/reversechallenges">
            play challenges
            <i class="fa">&#xf04b;</i>
          </a>
        </div>
      </div>
   
    )
}

export default Reverse
