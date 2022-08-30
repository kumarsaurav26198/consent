import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import cellEditFactory from 'react-bootstrap-table2-editor';
import axios from 'axios';



import SearchBox from "../../common/SearchBox";
import "./ConsentList.scss";
import { Button } from "react-bootstrap";

const ConsentMgrListComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);



  useEffect(() => {
    fetch(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
      });
  }, []);
  const updateAPIData = () => {
    axios.put(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata${ campaignId }`, {
      campaignName,
      channel,
    }).then(() => {
    });
  };

  function beforeSaveCell(oldValue, newValue, row, column, done) {
    setTimeout(() => {
      if (confirm('Do you want to accep this change?'))
      {
        done(true);

      } else
      {
        done(false);
      }
    }, 0);
    return { async: true };

  }
  function afterSaveCell(oldValue, newValue, row, column) {
    // updateAPIData();
    // console.warn("updateAPIData");


  }
  function priceFormatter(cell, row) {
    return (
      // <button type="button" className="btn btn-secondary" data-toggle={
      //   <BsThreeDots style={{ color: "black" }} />

      // } data-placement="left" title={
      //   <BsThreeDots style={{ color: "black" }} />

      // }>
      //   Tooltip on left
      // </button>
      <Button style={{ background: "transparent", paddingLeft: "10px", border: "none" }} onClick={() => { navigate('./consentMgrListEditContainer', { replace: true }); }} data-toggle="tooltip" data-placement="left">
        <BsThreeDots style={{ color: "black" }} />
      </Button>
    );
    // if (cell === "false")
    // {
    //   return (
    //     <span>
    //       <strong style={{ color: "red" }}>{cell}</strong>
    //     </span>
    //   );
    // } else
    //   return (
    //     <span>
    //       <strong>{cell}</strong>
    //     </span>
    //   );
  }
  const columns = [
    {
      dataField: "campaignId",
      text: "Campaign Id",
      editable: false,
      headerStyle: { width: 800 },
      headerAlign: "start",
      sort: true,
    },
    {
      dataField: "campaignName",
      text: "Customer Name",
      sort: true,
      headerAlign: "start",
      align: "start",
      sortCaret: () => {
        return (
          <span>
            &nbsp;
            <RiArrowUpSFill />
            <span style={RiArrowDownSFillStyle}>
              <RiArrowDownSFill />
            </span>
          </span>
        );
      },
    },

    {
      dataField: "channel",
      text: "Channel",
      sort: true,
      align: "center",
      sortCaret: () => {
        return (
          <span>
            &nbsp;
            <RiArrowUpSFill />
            <span style={RiArrowDownSFillStyle}>
              <RiArrowDownSFill />
            </span>
          </span>
        );
      },
    },
    {
      dataField: "consent",
      text: "Action",
      align: "end",
      headerAlign: "end",
      formatter: priceFormatter,
      editable: false,
      headerStyle: { width: 100 }

    },
  ];
  return (
    <>
      <div className="consentMgrtableList" style={{ paddingLeft: "10px" }}>
        <h3>View Consent Records</h3>
        <div className="d-flex flex-row justify-content-between ml-2 ">
          <div className="d-flex flex-row p-2">
            <div className="form-check pr-2">
              <input className="form-check-input p-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefault1 p-1">
                Browese by Campaign
              </label>
            </div>
            <div className="form-check pr-2">
              <input className="form-check-input p-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1 p-1">
                Search by Provider Number
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input p-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1 p-1">
                Search by Phone Number
              </label>
            </div>
          </div>
          <div style={{ width: "30rem", paddingRight: "10px" }}>
            <SearchBox placeholder="Search campaigns  " />
          </div>

        </div>
        <div className="fieldDisplayListWrap">

          <div className="fieldDisplayList tableDisplay">
            <BootstrapTable
              keyField="campaignId"
              data={data}
              columns={columns}
              hover
              condensed
              pagination={paginationFactory()}
              sort={{ dataField: "price", order: "asc" }}
              rowStyle={rowStyle}
              filter={filterFactory()}
              noDataIndication="Table is Empty"
              cellEdit={cellEditFactory({
                mode: 'dbclick',
                beforeSaveCell,
                afterSaveCell,

              })}
            // onTableChange={onTableChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsentMgrListComponent;
const rowStyle = {
  paddingLeft: "100px",
  marginLeft: "10px",
};
const RiArrowDownSFillStyle = {
  position: "relative",
  top: "6px",
  right: "16px",
};
