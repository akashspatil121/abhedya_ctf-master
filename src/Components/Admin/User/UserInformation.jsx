import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./UserInformation.css";
import { Tabs, Sonnet, Tab, TabPanel } from "react-bootstrap";
import SolvesDeleteBtn from "./SolvesDeleteBtn";
import FailsDeleteBtn from "./FailsDeleteBtn";
import AwardsDeleteBtn from "./AwardsDeleteBtn";
import MissingDeleteBtn from "./MissingDeleteBtn";
import EditUsers from "./EditUsers";
import StatisticsUsers from "./StatisticsUsers";
import AwardUsers from "./AwardUsers";
import EmailUsers from "./EmailUsers";
import DeleteUsers from "./DeleteUsers";
import AddressUsers from "./AddressUsers";

function UserInformation() {
  return (
    <>
      <section className="user_information_main_container">
        <Navbar />
        <div className="UserInformation_top">
          <h1>alphaadmin</h1>
          <h1 className="UserInformation_email">admin@abhedya.in</h1>
          <div className="UserInformation_font">
            <EditUsers />
            <StatisticsUsers />
            <AwardUsers />
            <EmailUsers />
            <DeleteUsers />
            <AddressUsers />
          </div>
        </div>
        <div className="userinformation_details">
          <Tabs
            defaultActiveKey="Solves"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="Solves" title="Solves">
              <div className="userinformation_details_table_container">
                <h1>Solves</h1>
                <span>
                  <SolvesDeleteBtn />
                </span>
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
                          <b>Challenge</b>
                        </th>
                        <th className="sort-col text-center">
                          <b>User</b>
                        </th>
                        <th className="d-md-table-cell d-lg-table-cell sort-col text-center">
                          <b>Submitted</b>
                        </th>
                        <th className="sort-col text-center">
                          <b>Category</b>
                        </th>
                        <th className="sort-col text-center px-2">
                          <b>Value</b>
                        </th>
                        <th className="sort-col text-center px-2">
                          <b>Time</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
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
                        <th scope="row">1</th>
                        <td>
                          <a href="#">adminnaruto</a>
                        </td>
                        <td>
                          <a href="./UserInformation">
                            skumarcyberofficial@gmail.com
                          </a>
                        </td>
                        <td></td>
                        <td>
                          <span className="badge badge-primary">admin</span>
                        </td>
                        <td></td>
                      </tr>
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
                        <th scope="row">3</th>
                        <td>
                          <a href="#">amit</a>
                        </td>
                        <td>
                          <a href="#">amit.b.suthar@gmail.com</a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Fails" title="Fails">
              <div className="userinformation_details_table_container">
                <h1>Fails</h1>
                <span>
                  <FailsDeleteBtn />
                </span>
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
                          <b>Challenge</b>
                        </th>

                        <th className="d-md-table-cell d-lg-table-cell sort-col text-center">
                          <b>Submitted</b>
                        </th>

                        <th className="sort-col text-center px-2">
                          <b>Time</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
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
                        <th scope="row">1</th>
                        <td>
                          <a href="#">adminnaruto</a>
                        </td>
                        <td>
                          <a href="./UserInformation">
                            skumarcyberofficial@gmail.com
                          </a>
                        </td>
                      </tr>
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
                        <th scope="row">3</th>
                        <td>
                          <a href="#">amit</a>
                        </td>
                        <td>
                          <a href="#">amit.b.suthar@gmail.com</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Awards" title="Awards">
              <div className="userinformation_details_table_container">
                <h1>Awards</h1>
                <span>
                  <AwardsDeleteBtn />
                </span>
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
                          <b>Name</b>
                        </th>
                        <th className="sort-col text-center">
                          <b>Description</b>
                        </th>
                        <th className="d-md-table-cell d-lg-table-cell sort-col text-center">
                          <b>Date</b>
                        </th>
                        <th className="sort-col text-center">
                          <b>Value</b>
                        </th>
                        <th className="sort-col text-center px-2">
                          <b>Category</b>
                        </th>
                        <th className="sort-col text-center px-2">
                          <b>Icon</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
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
                        <th scope="row">1</th>
                        <td>
                          <a href="#">adminnaruto</a>
                        </td>
                        <td>
                          <a href="./UserInformation">
                            skumarcyberofficial@gmail.com
                          </a>
                        </td>
                        <td>akash</td>
                        <td>
                          <span className="badge badge-primary">admin</span>
                        </td>
                        <td>akash</td>
                      </tr>
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
                        <th scope="row">3</th>
                        <td>
                          <a href="#">amit</a>
                        </td>
                        <td>
                          <a href="#">amit.b.suthar@gmail.com</a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Missing" title="Missing">
              <div className="userinformation_details_table_container">
                <h1>Missing</h1>
                <span>
                  <MissingDeleteBtn />
                </span>
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
                          <b>Challenge</b>
                        </th>

                        <th className="sort-col text-center">
                          <b>Category</b>
                        </th>
                        <th className="sort-col text-center px-2">
                          <b>Value</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
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
                        <th scope="row">1</th>
                        <td>
                          <a href="#">adminnaruto</a>
                        </td>
                        <td>
                          <a href="./UserInformation">
                            skumarcyberofficial@gmail.com
                          </a>
                        </td>
                      </tr>
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
                        <th scope="row">3</th>
                        <td>
                          <a href="#">amit</a>
                        </td>
                        <td>
                          <a href="#">amit.b.suthar@gmail.com</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="UserInformation_bottom">
          <form>
            <textarea name="message" placeholder="Add commnent"></textarea>
            <br />
            <button>Comment</button>
          </form>
        </div>
        <footer className="notification_footer">
          <span>Powered by CTFd</span>
          <p>Version3.3.0</p>
        </footer>
      </section>
    </>
  );
}

export default UserInformation;
