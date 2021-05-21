import React from "react";
import "./AdminNavbar.css";

const AdminNavbar = () => {
    return (
        <>
            {/* <nav class="navbar navbar-inverse navbar-fixed-top ">
  <div className="admin_navbar_main_container">
    <div className="admin_navbar_company_name">
      <a className="navbar-brand" href="#">Abhedya CTF</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="admin_navbar_list navbar-nav">
      <li class="active nav-item"><a className="nav-link" href="/admin/notification">Notification</a></li>
      <div class="dropdown">
    <button class="dropbtn">Pages 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/admin/page">All Pages</a>
      <a href="/admin/newpage">New Pages</a>
    </div>  
  </div> 
      <li className="nav-item"><a className="nav-link" href="/admin/user">Users</a></li>
      <li className="nav-item"><a className="nav-link" href="/admin/scorebored">Scoreboard</a></li>
      <li className="nav-item"><a className="nav-link" href="/admin/challenges">Challenges</a></li>
    </ul>
  </div>
  </div>
</nav> */}


<nav class="navbar navbar-expand-lg navbar-light admin_navbar_main ">
  <a class="navbar-brand admin_navbar_company_list" href="#">Abhedya CTF</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse admin_navbar_list" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/admin/notification">Notification <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pages
        </a>
        <div class="dropdown-menu admin_navbar_dropdown_list" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item " href="/admin/page">All Pages</a>
          <a class="dropdown-item" href="/admin/newpage">New Pages</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/user">Users</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/scorebored">Scoreboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/challenges">Challenges</a>
      </li>
    </ul>
  </div>
</nav>
  
        </>
    );
}
export default AdminNavbar;