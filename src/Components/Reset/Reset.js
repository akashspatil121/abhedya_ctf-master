import React from "react";
import "./Reset.css";
import cryptography from "../../Assets/ctf-images/cryptography.jpeg";
import Navbar from "../Navbar/Navbar";

function Reset() {
  return (
    <div>
      <Navbar />
      <main>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 login-section-wrapper">
              <div class="login-wrapper my-auto">
                <h1 class="login-title">Reset Password</h1>
                <form action="#!">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="password">New Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      placeholder="your new passsword"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="password">Confirm Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      placeholder="confirm your passsword"
                    />
                  </div>
                  <input
                    name="login"
                    id="login"
                    class="btn btn-block login-btn"
                    type="button"
                    value="Login"
                  />
                </form>
                <a href="/login" class="forgot-password-link">
                  Have an account?
                </a>
                <p class="login-wrapper-footer-text">
                  Don't have an account?{" "}
                  <a href="/signup" class="text-reset">
                    Register here
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img src={cryptography} alt="login image" class="login-img" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reset;
