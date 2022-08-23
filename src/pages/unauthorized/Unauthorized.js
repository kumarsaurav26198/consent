import React, { Component } from "react";

export default class Unauthorized extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-3 mx-auto">
            <div className="text-center">
              <div className="error-icon">
                <i className="fa fa -exclamation-triangle fa-2x text-danger" />
              </div>
              <p>
                Unauthorized ! You do not have enough permission to access this
                product.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
