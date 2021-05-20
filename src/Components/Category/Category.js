import React from "react";
import "./Category.css";
import image1 from "../../Assets/ctf-images/image1.jpg";
import image2 from "../../Assets/ctf-images/image2.jpg";
import image3 from "../../Assets/ctf-images/image3.jpg";
import image4 from "../../Assets/ctf-images/image4.jpg";
import image5 from "../../Assets/ctf-images/image5.jpg";
import image6 from "../../Assets/ctf-images/image6.jpg";
import image7 from "../../Assets/ctf-images/image7.jpg";
import swipe from "../../Assets/ctf-images/swipe.svg";
import Navbar from "../Navbar/Navbar";
import CategoryBdImg from "../CategoryBdImg/CategoryBdImg";

function Category() {

  return (
    <div id='category'>
      <Navbar />
      {/* <!--mobile and tab view--> */}
      <div className="category">
        <div class="category_mobtab">
        <div class="category_mobtab-swipe">
          <img src={swipe} />
        </div>
        <div class="category_mobtab-container">
          <div class="category_mobtab-content">
            <p class="category_mobtab-heading">Capture The Flag.</p>
            <p>
              Abhedya CTF (Capture The Flag) is a kind of information security
              competition that challenges contestants to solve a variety of
              task. Abhedya CTF will help you in the journey of cyber security.
            </p>
          </div>
        </div>
      </div>

        
        <div class="category_fixed-bar">
        <div class="category_fixed-content-container">
          <h1 class="category_fixed-heading">Abhedya CTF</h1>
          <p class="category_fixed-subheading">scroll</p>
          <span class="category_fixed-content">
            Abhedya CTF (Capture The Flag) is a kind of information security
            competition that challenges contestants to solve a variety of task.
            Abhedya CTF will help you in the journey of cyber security.
          </span>
        </div>
      </div>
        <div id="category_container">
        <div id="category_container2">
          <a name="box1" href="/category/cryptography">
            <div class="category_box category_box-one category_first">
              {/* <img
                src={image1}
                class="categoryimage"
                alt="cryptography"
              /> */}
              <CategoryBdImg
              CategoryName="Cryptography" 
              />
            </div>
          </a>
          <a name="box2" href="/category/forensic">
            <div class="category_box category_second">
            <CategoryBdImg
              CategoryName="forensic" 
              />
            </div>
          </a>
          <a name="box3" href="/category/reverse">
            <div class="category_box category_first">
            <CategoryBdImg
              CategoryName="reverse" 
              />
            </div>
          </a>
          <a name="box4" href="/category/web">
            <div class="category_box category_second">
            <CategoryBdImg
              CategoryName="web" 
              />
            </div>
          </a>
          <a name="box5" href="/category/Code_X">
            <div class="category_box category_first">
            <CategoryBdImg
              CategoryName="Code_X" 
              />
            </div>
          </a>
          <a name="box6" href="/category/misc">
            <div class="category_box category_second">
            <CategoryBdImg
              CategoryName="misc" 
              />
            </div>
          </a>
          <a name="box7" href="/category/osint">
            <div class="category_box category_first">
            <CategoryBdImg
              CategoryName="osint" 
              />
            </div>
          </a>
          <div class="category_box category_third" style={{ width: "20vw" }}></div>
        </div>
      </div>
        <div class="category_point-container">
        <span>
          <a href="#box1">+</a>
        </span>
        <span>
          <a href="#box2">+</a>
        </span>
        <span>
          <a href="#box3">+</a>
        </span>
        <span>
          <a href="#box4">+</a>
        </span>
        <span>
          <a href="#box5">+</a>
        </span>
        <span>
          <a href="#box6">+</a>
        </span>
        <span>
          <a href="#box7">+</a>
        </span>
      </div>
    </div>
    </div>
  );
}

export default Category;
