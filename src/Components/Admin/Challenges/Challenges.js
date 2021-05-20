import React from "react";
import Navbar from "../../Navbar/Navbar";
import NewEditBtn from "./NewEditBtn";
import NewDeleteBtn from "./NewDeleteBtn";
import './Challenges.css'

function Challenges() {
    return (
        <div className="Challenges">
            <Navbar />

            <div class="jumbotron" style={{ backgroundColor: "#212529" }}>
                <div class="container">
                    <h1>
                        Challenges
                        <a
                            class="no-decoration h1"
                            href="/admin/challenges/new"
                        >
                            <i class="fa fa-plus-circle"></i>
                        </a>
                    </h1>
                </div>
            </div>
            <div class="container p-4" style={{ backgroundColor: "#212529" }}>
                <div class="row">
                    <div class="col-md-12">
                        <form method="GET" class="form-inline">
                            <div class="form-group col-md-2">
                                <select
                                    class="form-control custom-select w-100"
                                    id="field"
                                    name="field"
                                    required
                                >
                                    <option value="name">Name</option>
                                    <option value="id">ID</option>
                                    <option value="category">Category</option>
                                    <option value="type">Type</option>
                                </select>
                            </div>
                            <div class="form-group col-md-8">
                                <input
                                    class="form-control w-100"
                                    id="q"
                                    name="q"
                                    placeholder="Search for matching challenge"
                                    required
                                    type="text"
                                    value=""
                                />
                            </div>
                            <div class="form-group col-md-2">
                                <button
                                    type="submit"
                                    class="btn btn-primary w-100"
                                >
                                    <i
                                        class="fa fa-search"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <hr />

                <div class="row">
                    <div class="col-md-12">
                        <div class="float-right pb-3">
                            <div class="btn-group" role="group">
                                <NewEditBtn/>
                                <NewDeleteBtn/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <table
                                id="challenges"
                                class="table table-striped border"
                            >
                                <thead>
                                    <tr>
                                        <td
                                            class="d-block border-right border-bottom text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    data-checkbox-all
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <th class="sort-col text-center">
                                            <b>ID</b>
                                        </th>
                                        <th class="sort-col">
                                            <b>Name</b>
                                        </th>
                                        <th class="d-none d-md-table-cell d-lg-table-cell sort-col">
                                            <b>Category</b>
                                        </th>
                                        <th class="d-none d-md-table-cell d-lg-table-cell sort-col text-center">
                                            <b>Value</b>
                                        </th>
                                        <th class="d-none d-md-table-cell d-lg-table-cell sort-col text-center">
                                            <b>Type</b>
                                        </th>
                                        <th class="d-none d-md-table-cell d-lg-table-cell sort-col text-center">
                                            <b>State</b>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-href="/admin/challenges/2">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="2"
                                                    data-challenge-id="2"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">1</td>
                                        <td>
                                            <a href="challenges/user">
                                                Welcome
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            forensic
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/3">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="3"
                                                    data-challenge-id="3"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">3</td>
                                        <td>
                                            <a href="/admin/challenges/3">
                                                Welcome
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            reverse
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/4">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="4"
                                                    data-challenge-id="4"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">4</td>
                                        <td>
                                            <a href="/admin/challenges/4">
                                                Welcome
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            misc
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/5">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="5"
                                                    data-challenge-id="5"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">5</td>
                                        <td>
                                            <a href="/admin/challenges/5">
                                                Welcome
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            web
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/6">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="6"
                                                    data-challenge-id="6"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">6</td>
                                        <td>
                                            <a href="/admin/challenges/6">
                                                Welcome
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            osint
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/7">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="7"
                                                    data-challenge-id="7"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">7</td>
                                        <td>
                                            <a href="/admin/challenges/7">
                                                Agent CAT
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            crypto
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/8">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="8"
                                                    data-challenge-id="8"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">8</td>
                                        <td>
                                            <a href="/admin/challenges/8">
                                                Agent loves car-rot
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            crypto
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/9">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="9"
                                                    data-challenge-id="9"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">9</td>
                                        <td>
                                            <a href="/admin/challenges/9">
                                                Encoders
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            crypto
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/10">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="10"
                                                    data-challenge-id="10"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">10</td>
                                        <td>
                                            <a href="/admin/challenges/10">
                                                Again Agent Cat
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            forensic
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/11">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="11"
                                                    data-challenge-id="11"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">11</td>
                                        <td>
                                            <a href="/admin/challenges/11">
                                                Understand it
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            forensic
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/12">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="12"
                                                    data-challenge-id="12"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">12</td>
                                        <td>
                                            <a href="/admin/challenges/12">
                                                Fetch me
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            reverse
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/13">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="13"
                                                    data-challenge-id="13"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">13</td>
                                        <td>
                                            <a href="/admin/challenges/13">
                                                Superhero
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            osint
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/14">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="14"
                                                    data-challenge-id="14"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">14</td>
                                        <td>
                                            <a href="/admin/challenges/14">
                                                chakras
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            reverse
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/15">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="15"
                                                    data-challenge-id="15"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">15</td>
                                        <td>
                                            <a href="/admin/challenges/15">
                                                dictionary
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            misc
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/16">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="16"
                                                    data-challenge-id="16"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">16</td>
                                        <td>
                                            <a href="/admin/challenges/16">
                                                keyboard is fun
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            misc
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/17">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="17"
                                                    data-challenge-id="17"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">17</td>
                                        <td>
                                            <a href="/admin/challenges/17">
                                                Hotel
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            osint
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>

                                    <tr data-href="/admin/challenges/18">
                                        <td
                                            class="d-block border-right text-center"
                                            data-checkbox
                                        >
                                            <div class="form-check">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    value="18"
                                                    data-challenge-id="18"
                                                />
                                                &nbsp;
                                            </div>
                                        </td>
                                        <td class="text-center">18</td>
                                        <td>
                                            <a href="/admin/challenges/18">
                                                Agent Cat
                                            </a>
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell">
                                            web
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            10
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            standard
                                        </td>
                                        <td class="d-none d-md-table-cell d-lg-table-cell text-center">
                                            <span class="badge badge-success">
                                                visible
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="footer pt-4 pb-5 mb-4">
                <div class="container text-center">
                    <a href="https://ctfd.io" class="text-secondary">
                        <small class="text-muted">Powered by Abhedya CTF</small>
                    </a>
                    <span>
                        <small class="text-muted">
                            <br />
                        </small>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Challenges;
