import React from "react";
import { Container, Row, Col, Nav, Tab, Tabs } from "react-bootstrap";

export default function Ranktable() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div class="w3-container">
              <div
                style={{
                  textAlign: "center",
                  padding: "4rem",
                }}
              >
                <h2>Rank Table </h2>
              </div>

              <table class="w3-table-all">
                <thead>
                  <tr class="w3-black" style={{ fontSize: "20px" }}>
                    <th>Place</th>
                    <th>Team </th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tr style={{ fontSize: "18px", justifyContent: "center" }}>
                  <td>1</td>
                  <td style={{ color: "blue" }}>Team A</td>
                  <td>650</td>
                </tr>
                <tr style={{ fontSize: "18px" }}>
                  <td>2</td>
                  <td style={{ color: "blue" }}>Team B</td>
                  <td>550</td>
                </tr>
                <tr style={{ fontSize: "18px" }}>
                  <td>3</td>
                  <td style={{ color: "blue" }}>Team C</td>
                  <td>467</td>
                </tr>
                <tr style={{ fontSize: "18px" }}>
                  <td>4</td>
                  <td style={{ color: "blue" }}>Team D</td>
                  <td>367</td>
                </tr>
                <tr style={{ fontSize: "18px" }}>
                  <td>5</td>
                  <td style={{ color: "blue" }}>Team E</td>
                  <td>307</td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
