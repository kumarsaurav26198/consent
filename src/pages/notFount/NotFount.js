import React, { Component } from "react";
import { NavLink } from "react-bootstrap";

export default class NotFount extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-3 mx-auto">
            <div className="text-center">
              <h1>Page Not Found</h1>
              <p>Whoops ! Sorry, there is nothing to see here.</p>
              <p>
                <NavLink to="/">Back to Home</NavLink>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
