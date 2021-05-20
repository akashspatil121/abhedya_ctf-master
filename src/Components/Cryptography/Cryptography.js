import React from "react";
import "./Cryptography.css";
import scroll from "../../Assets/ctf-images/scroll.svg";
import cryptography from "../../Assets/ctf-images/cryptography.jpeg";
import Navbar from "../Navbar/Navbar";

function Cryptography() {
  return (
    <div className="cryptography">
      <Navbar />
      <div class="cryptography_mob-categoryimage"></div>
      <span class="cryptography_mob-heading">
        Crypto
        <br />
        Graphy
      </span>
      <br />
      <span class="cryptography_mob-subheading">ABHEDYA</span>
      <br />
      <span class="cryptography_mob-subheading" style={{ border: "none", color: "grey" }}>
        CTF
      </span>
      <div class="cryptography_mob-content">
        <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          Cryptography secure communications
        </p>
        <p>
          Cryptography is the study of secure communications techniques that
          allow only the sender and intended recipient of a message to view its
          contents.
          <br />
          Cryptographers secure computer and information technology systems by
          creating algorithms and ciphers to encrypt data.
        </p>

        <p class="cryptography_mob-play">
          <a href="cryptochallenges.html">
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
              crypto
              <br />
              graphy
            </p>
            <p class="cryptography_mobtab-subheading">
              <b>ABHEDYA</b>
              <br />
              CTF
            </p>
            <p>
              Cryptography is the study of secure communications techniques that
              allow only the sender and intended recipient of a message to view
              its contents.
              <br />
              Cryptographers secure computer and information technology systems
              by creating algorithms and ciphers to encrypt data.
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
            <img src={cryptography} class="categoryimage" alt="cryptography" />
          </div>
        </div>
      </div>

      <div class="play">
        <a href="/category/cryptography/cryptochallenges">
          play challenges
          <i class="fa">&#xf04b;</i>
        </a>
      </div>
    </div>
 
 );
}

export default Cryptography;
