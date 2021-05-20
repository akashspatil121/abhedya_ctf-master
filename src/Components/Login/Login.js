import React from "react";
import "./Login.css";
import cryptography from "../../Assets/ctf-images/cryptography.jpeg";
import Navbar from "../Navbar/Navbar";

function Login() {
  return (
    <div className="Login">
        <Navbar />
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 login-section-wrapper">
              <div class="login-wrapper my-auto">
                <h1 class="login-title">Log in</h1>
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
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      placeholder="enter your passsword"
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
                <a href="/reset" class="forgot-password-link">
                  Forgot password?
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
      </div>
    </div>
  );
}

export default Login;
