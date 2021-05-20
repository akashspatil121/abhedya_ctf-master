import React from "react";
import Navbar from "../../Navbar/Navbar";
// import "./NewCategory.css";

function NewCategory() {
  return (
    <div className="newchallenge">
      <Navbar />
      <div class="jumbotron" style={{ backgroundColor: "#212529" }}>
        <div className="container pt-5 mt-5 mt-md-0 pt-md-0">
          <h2>Create New Category</h2>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-11 col-md-9 mx-auto">
            <div class="my-auto">
              <form action="#!">
                <div class="form-group mb-4">
                  <label for="name">Name</label>
                  <br />
                  <small class="subheading">The name of Category.</small>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    class="form-control rounded-0 border-0 p-5 text-light"
                    placeholder="Enter Category Name"
                    style={{ backgroundColor: "#212529" }}
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="category">Details</label>
                  <br />
                  <small class="subheading">Enter Category details</small>
                  <div
                    id="output"
                    contenteditable="true"
                    style={{ backgroundColor: "#212529" }}
                  ></div>
                </div>
                

                  <div class="form-group">
                    <label for="exampleFormControlFile1">
                      Select Background Image
                    </label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                <div class="form-group mb-4 text-right">
                  <input
                    name="submit"
                    id="submit"
                    class="btn btn-primary login-btn rounded-0 border-0 pl-3 pr-3 p-2"
                    type="button"
                    value="Create"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr class="bg-dark w-75 mt-5" />
      <footer class="footer pt-4 pb-5 mb-4">
        <div class="container text-center">
          <a href="https://ctfd.io" class="text-secondary">
            <small class="text-muted">Powered by Abhedya CTF</small>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default NewCategory;
