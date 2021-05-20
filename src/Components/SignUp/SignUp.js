import React from "react";
import "./SignUp.css";
import cryptography from "../../Assets/ctf-images/cryptography.jpeg";
import Navbar from "../Navbar/Navbar";

function SignUp() {
  return (
    <div className="SignUp">
      <Navbar />
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 login-section-wrapper">
              <div class="login-wrapper my-auto">
                <h1 class="login-title">Create Account</h1>
                <form action="#!">
                  <div class="form-group">
                      
                    <label className="lable1" for="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      class="form-control"
                      placeholder="your name"
                    />
                  </div>
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
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      placeholder="enter your passsword"
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
                    id="Signup"
                    class="btn btn-block login-btn"
                    type="button"
                    value="Signup"
                  />
                </form>
                <a href="/reset" class="forgot-password-link">
                  Forgot password?
                </a>
                <p class="login-wrapper-footer-text">
                  have an account?{" "}
                  <a href="/login" class="text-reset">
                    Login here
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img src={cryptography} alt="login image" class="login-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
