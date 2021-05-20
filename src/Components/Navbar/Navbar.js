import React, { useState } from "react";
import './nav.css'
import menu_desktop from "../../Assets/ctf-images/menu-desktop.svg";


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div>
      <div id="mySidenav" className={click ? "sidenav1" : "sidenav"}>
      <span onClick={handleClick}>
        <img src={menu_desktop} class="fixed-menu menu-button" alt="menu" />
      </span>
        <div class="row col-11 mx-auto">
          {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
            &times;
          </a> */}
        </div>
        <div class="sub-container">
          <div class="row pl-5 border-bottom">
            <a href="/login">LogIn</a>
          </div>
          <div class="row pl-5 border-bottom">
            <a href="/signup">SignUp</a>
          </div>
          <div class="row pl-5 border-bottom">
            <a href="/">Home</a>
          </div>
          <div class="row py-5">
            <div class="col-5 col-md-4">
              <a href="#" class="fa">
                &#xf061;&nbsp;Ranks
              </a>
              <a href="#" class="fa">
                &#xf061;&nbsp;Score
              </a>
              <a href="#" class="fa">
                &#xf061;&nbsp;Badge
              </a>
              <a href="#" class="fa">
                &#xf061;&nbsp;Levels
              </a>
            </div>
            <div class="col-7 col-md-8">
              <a href="#" class="fa">
                &#xf061;&nbsp;Rules
              </a>
              <a href="#" class="fa">
                &#xf061;&nbsp;Forum
              </a>
              <a href="#" class="fa">
                &#xf061;&nbsp;Solve Challenge
              </a>
              <a href="#" class="fa">
                &#xf061;&nbsp;Total Challenge
              </a>
            </div>
          </div>
          <div class="row pl-4 border-top">
            <div class="col-12">
              <a>Categories</a>
            </div>
            <div class="row">
              <a href="/category" class="border">
                All
              </a>
              <a href="/category/cryptography" class="border">
                Cryptography
              </a>
              <a href="/category/forensic" class="border">
                Forensic
              </a>
              <a href="/category/reverse" class="border">
                Reverse
              </a>
              <a href="/category/web" class="border">
                Web
              </a>
              <a href="/category/code_X" class="border">
              Code_X
              </a>
              <a href="/category/misc" class="border">
                Misc
              </a>
              <a href="/category/osint" class="border">
                Osint
              </a>
            </div>
          </div>
        </div>
      </div>
      <span onClick={handleClick}>
        <img src={menu_desktop} class="fixed-menu menu-button" alt="menu" />
      </span>
    </div>
  );
}

export default Navbar;
