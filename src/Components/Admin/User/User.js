import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./User.css";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

function UserData(id, user, email, country, admin, verified, hidden, banned) {
  return {id, user, email, country, admin, verified, hidden, banned };
}

const UserAll = [
  UserData(1,	"alphaadmin",	"admin@abhedya.in",	"",	"admin",	"",	"hidden"	),
  UserData(2, "test",	"test@best.com",	"",	"admin",	"",	"hidden"	),
  UserData(3, "Nitya Chowdary Mummaneni",	"nityachow166@gmail.com",	"",	"admin",	"",	"hidden"	),
  UserData(4, "alphaadmin",	"admin@abhedya.in",	"",	"admin",	"",	"hidden"	),
  UserData(5, "alphaadmin",	"admin@abhedya.in",	"",	"admin",	"",	"hidden"	),
];

function User() {
  return (
    <div className="user_main_container">
      <Navbar />
      <div className="User">
        <main role="main">
          <div
            className="jumbotron"
            style={{ backgroundColor: "#212529", textAlign: "center" }}
          >
            <div className="container pt-5 pt-md-0">
              <span
                style={{
                  marginRight: "1rem",
                  fontSize: "5rem",
                  color: "#fff",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Users
              </span>

              <a class="no-decoration h1" href="/admin/CreateUser">
                <i style={{ color: "#fff" }} class="fa fa-plus-circle"></i>
              </a>
            </div>
          </div>

          <div className="container p-4" style={{ backgroundColor: "#212529" }}>
            <div className="row">
              <div className="col-md-12">
                <form method="GET" className="form-inline">
                  <div className="form-group col-md-2">
                    <select
                      className="form-control custom-select w-100"
                      id="field"
                      name="field"
                      required
                    >
                      <option value="name">Name</option>
                      <option value="id">ID</option>
                      <option value="email">Email</option>
                      <option value="affiliation">Affiliation</option>
                      <option value="website">Website</option>
                      <option value="ip">IP Address</option>
                    </select>
                  </div>

                  <div className="form-group col-md-8">
                    <input
                      className="form-control w-100"
                      id="q"
                      name="q"
                      placeholder="Search for matching users"
                      required
                      type="text"
                      value=""
                    />
                  </div>

                  <div className="form-group col-md-2">
                    <button type="submit" className="btn btn-primary w-100">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <hr className="border-light" />

            <div className="row">
              <div className="col-md-12">
                <div className="float-right pb-3">
                  <div className="btn-group btn_flex" role="group">
                    <EditBtn />
                    <DeleteBtn />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="table-responsive table-striped mx-auto">
                <table className="table border px-auto">
                  <thead>
                    <tr>
                      <th className="border-right" data-checkbox>
                        <div className="form-check text-center">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            data-checkbox-all
                          />
                          &nbsp;
                        </div>
                      </th>
                      <th className="sort-col text-center">
                        <b>ID</b>
                      </th>
                      <th className="sort-col text-center">
                        <b>User</b>
                      </th>
                      <th className="d-md-table-cell d-lg-table-cell sort-col text-center">
                        <b>Email</b>
                      </th>
                      <th className="sort-col text-center">
                        <b>Country</b>
                      </th>
                      <th className="sort-col text-center px-2">
                        <b>Admin</b>
                      </th>
                      <th className="sort-col text-center px-2">
                        <b>Verified</b>
                      </th>
                      <th className="sort-col text-center px-2">
                        <b>Hidden</b>
                      </th>
                      <th className="sort-col text-center px-2">
                        <b>Banned</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {UserAll.map((userall) => (
                    <tr className="text-center">
                      <th className="border-right" data-checkbox>
                        <div className="form-check text-center">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            data-checkbox-all
                          />
                          &nbsp;
                        </div>
                      </th>
                      <th scope="row">{userall.id}</th>
                      <td>
                        <a href="./UserInformation">{userall.user}</a>
                      </td>
                      <td>
                        <a href="./UserInformation">
                        {userall.email}
                        </a>
                      </td>
                      <td>{userall.country}</td>
                      <td>
                        <span className="badge badge-primary">{userall.admin}</span>
                      </td>
                      <td>{userall.verified}</td>
                      <td>
                        <span className="badge badge-danger">{userall.hidden}</span>
                      </td>
                      <td>{userall.banned}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <footer className="notification_footer">
          <span>Powered by CTFd</span>
          <p>Version3.3.0</p>
        </footer>
      </div>
    </div>
  );
}

export default User;
