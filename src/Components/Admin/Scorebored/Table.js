import React from "react";
import { Container, Row, Col, Nav, Tab, Tabs } from "react-bootstrap";

import HideBtn from "./HideBtn";
import "./Table.css"
import Navbar from "../../Navbar/Navbar";

function TableData(id, Place, User, Score, Visibility) {
  return { id, Place, User, Score, Visibility };
}

const rows = [
  TableData(1, 1, "Jems", 501, "visible"),
  TableData(2, 2, "Richard", 921, "visible"),
  TableData(3, 3, "Mark", 341, "visible"),
  TableData(4, 4, "David", 501, "visible"),
  TableData(5, 5, "Ricky", 201, "visible"),
];

export default function Table() {
  return (
    <div className= "scorebored_main_container" >
    <Navbar />
      <div
        style={{
          backgroundColor: "#212529",
          textAlign: "center",
          padding: "10rem 2rem",
          color: "#fff"
        }}
      >
        <h1>Scoreboard</h1>
      </div>
        
      <div className="allpages_table" style={{padding: "0rem 1rem"}} >
                <div className="allpages_btn_div">
                <span className="allpages_btn_delete">
                <HideBtn /></span>
                </div>
                <div className="row">
              <div className="table-responsive table-striped mx-auto allpages_table">
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
                        <b>Place</b>
                      </th>
                      <th className="sort-col text-center">
                        <b>User</b>
                      </th>
                      <th className="d-md-table-cell d-lg-table-cell sort-col text-center">
                        <b>Score</b>
                      </th>
                      <th className="sort-col text-center">
                        <b>Visbility</b>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {rows.map((row) => (
                    <tr className="text-center scorbored_table_data">
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
                      <td scope="row">{row.Place}</td>
                      <td>
                        <a href="./UserInformation">{row.User}</a>
                      </td>
                      <td>
                        <a href="./UserInformation">{row.Score}</a>
                      </td>
                      <td>{row.Visibility}</td>
                      
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
                </div>

      <footer className="notification_footer">
          <span>Powered by CTFd</span>
          <p>Version3.3.0</p>
        </footer>
    </div>
  );
}
