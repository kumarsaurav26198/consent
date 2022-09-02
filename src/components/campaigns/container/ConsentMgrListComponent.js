import React, { } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import cellEditFactory from 'react-bootstrap-table2-editor';
import SearchBox from "../../common/SearchBox";
import "./ConsentList.scss";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const ConsentMgrListComponent = () => {

  const consentListData = useSelector(state => state.reducers.consentList);
  console.warn("redux store data in consentList", consentListData);

  const navigate = useNavigate();

  function priceFormatter(cell, row) {
    const popover = (
      <Popover id="popover-basic" className="d-flex flex-column-reverse">
        <Button variant="Light" onClick={() => { navigate('./consentMgrListEditContainer', { replace: false }); }}>
          View &nbsp;
          <GrView style={{ color: "black" }} />
        </Button>

      </Popover>
    );
    return (
      <>
        <OverlayTrigger trigger="click" placement="left" delay={{ show: 150, hide: 150 }} overlay={popover}>
          <Button variant="Light">
            <BsThreeDots style={{ color: "black" }} onClick={() => { }} />
          </Button>
        </OverlayTrigger>
      </>
    );

  }
  const columns = [
    {
      dataField: "campaignId",
      text: "Campaign Id",
      editable: false,
      headerStyle: { width: "30%" },
      headerAlign: "start",
      sort: true,
    },
    {
      dataField: "campaignName",
      text: "Customer Name",
      sort: true,
      headerAlign: "center",
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
      dataField: "consent",
      text: "Action",
      align: "center",
      headerAlign: "center",
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
              data={consentListData}
              columns={columns}
              hover
              condensed
              pagination={paginationFactory()}
              sort={{ dataField: "price", order: "asc" }}
              rowStyle={rowStyle}
              filter={filterFactory()}
              noDataIndication="Table is Empty"
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
