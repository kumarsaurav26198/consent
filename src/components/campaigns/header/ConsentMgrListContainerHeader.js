import React from "react";
import "./ConsentMgrHeader.scss";
import logo from "../../../assets/headerImage.png";

const ConsentMgrListContainerHeader = () => {
    return (
        <>
            <div className="header_section d-flex justify-content-between">
                <div className="jumbotron jumbotron-fliud ">
                    <h3>Consent Manager</h3>
                    <p>Create ,view and update outreach records for your campaigns </p>
                    <div className="header_section_main">
                        {/* <div className="total_active_consents_card">
                            <div className="total_active_consents_card_header">
                              <p>Total Active Consents</p>
                            </div>
                            <div className="card_body">
                            <h3>2</h3>
                            </div>
                            </div> */}

                        {/* <div className="total_OptOuts_card">
                            <div className="total_OptOuts_card_header">
                                <p>Total OptOuts</p>
                            </div>
                            <div className="card_body">
                                <h3>2</h3>
                            </div>
                            </div> */}

                        {/* <div className="total_consents_records_card">
                                            <div className="total_consents_records_header">
                                                <p>Total Consents Records</p>
                                            </div>
                                            <div className="card_body">
                                                <h3>4</h3>
                                            </div>
                                        </div> */}
                        <div className="image_container">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConsentMgrListContainerHeader;
