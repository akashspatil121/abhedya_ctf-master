import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./AllPages.css"
import PagesDeleteBtn from "./PagesDeleteBtn"
import AdminNavbar from "../AdminNavbar/AdminNavbar";


function PagesData(id, title, route, authentication, hidden, published) {
  return {id, title, route, authentication, hidden, published };
}

const pages = [
  PagesData(1, "None", "index", 501, "visible", "published"),
  PagesData(2, "All", "Richard", 921, "visible", "published"),
  PagesData(3, "None", "Mark", 341, "visible", "published"),
  PagesData(4, "All", "David", 501, "visible", "published"),
  PagesData(5, "None", "Ricky", 201, "visible", "published"),
];

const AllPages = () => {
    return (
        <>
            <section className="allpages_main_container">
            <AdminNavbar/>
            <Navbar />
                <div className="allpages_top">
                    <span>Pages</span>
                    <a
                            class="no-decoration h1"
                            href="/admin/newpage"
                        >
                            <i class="fa fa-plus-circle"></i>
                        </a>
                </div>
                <div className="allpages_table">
                <div className="allpages_btn_div">
                <span className="allpages_btn_delete">
                <PagesDeleteBtn /></span>
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
                        <b>Title</b>
                      </th>
                      <th className="sort-col text-center">
                        <b>Route</b>
                      </th>
                      <th className="d-md-table-cell d-lg-table-cell sort-col text-center">
                        <b>Authentication</b>
                      </th>
                      <th className="sort-col text-center">
                        <b>Hidden</b>
                      </th>
                      <th className="sort-col text-center px-2">
                        <b>Published</b>
                      </th>
                  
                    </tr>
                  </thead>
                  
                  <tbody>
                  {pages.map((pages) => (
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
                      <th scope="row">{pages.title}</th>
                      <td>
                        <a href="/admin/newpage">{pages.route}</a>
                      </td>
                      <td>
                        {pages.authentication}
                      </td>
                      <td>{pages.hidden}</td>
                      <td>
                        <span className="badge badge-primary">{pages.published}</span>
                      </td>
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
            </section>
        </>
    );
}
export default AllPages;