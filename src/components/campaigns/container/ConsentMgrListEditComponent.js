import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import SearchBox from "../../common/SearchBox";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { deleteConsent, fetchConsent } from "../../../redux/actions/consentActionCreator";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";


const ConsentMgrListEditComponent = () => {

  const result = useSelector(state => state.consentList);
  console.warn("redux store data in consentList", result);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function sortCaret() {
    return (
      <span>
        &nbsp;
        <RiArrowUpSFill />
        <span style={RiArrowDownSFillStyle}>
          <RiArrowDownSFill />
        </span>
      </span>
    );
  };


  function priceFormatter(cell, row) {
    if (cell === "false")
    {
      return (
        <span>
          <strong style={{ color: "red" }}>{cell}</strong>
        </span>
      );
    } else
      return (
        <span>
          <strong>{cell}</strong>
        </span>
      );
  }

  function ActionFormatter(cell, row) {
    const popover = (
      <Popover id="popover-basic" className="d-flex flex-column">
        <Button variant="Light" onClick={() => { navigate("/viewConsent"); }}>
          View &nbsp;
          <span><FontAwesomeIcon icon={faEye} /></span>
        </Button>
        <Button variant="Light" onClick={() => {
          navigate(`/updateConsent`);
        }}>
          Edit &nbsp;
          <span><FontAwesomeIcon icon={faEdit} /></span>
        </Button>
        <Button variant="Light" onClick={() => dispatch(deleteConsent())}>
          Delete &nbsp;
          <span><FontAwesomeIcon icon={faTrash} /></span>
        </Button>
      </Popover>
    );

    return (
      <OverlayTrigger trigger="click" placement="left" overlay={popover} delay={{ hide: 200 }}>
        <Button variant="Light">
          <BsThreeDots style={{ color: "black" }} onClick={() => { }} />
        </Button>
      </OverlayTrigger>
    );
  }

  const columns = [
    {
      dataField: "id",
      text: "Customer ID",
      sort: true,
      hidden: true
    },
    {
      dataField: "id",
      text: "Customer ID",
      sort: true,
      headerAlign: "center",
      align: "start",
      sortCaret: sortCaret
    },
    {
      dataField: "createdAt",
      text: "Created Date",
      sort: true,
      headerAlign: "center",
      align: "start",
      sortCaret: sortCaret

    },
    {
      dataField: "updatedAt",
      text: "last Modified",
      sort: true,
      headerAlign: "center",
      align: "start",
      sortCaret: sortCaret

    },
    {
      dataField: "phoneNumber",
      text: "Phone Number",
      sort: false,
      headerAlign: "center",
      align: "start",
    },
    {
      dataField: "description",
      text: "Channel",
      sort: false,
      headerAlign: "center",
      align: "start",
    },
    {
      dataField: "title",
      text: "CampaignName",
      sort: false,
      headerAlign: "center",
      align: "start",

    },
    {
      dataField: "published",
      text: "Consent",
      headerAlign: "center",
      align: "center",
      // formatter: priceFormatter,

    },
    {
      dataField: "Action",
      text: "Action",
      headerAlign: "center",
      align: "center",
      headerStyle: { width: 100 },
      formatter: ActionFormatter,
    },

  ];
  return (
    <>
      <div className="card-holder">
        {/* <button onClick={() => dispatch(fetchConsent())}>fetch data</button>
        <button onClick={() => dispatch(setProducts())}>Set Product</button>
        <button onClick={() => dispatch(deleteConsent())}>delete data</button>
        <button onClick={() => dispatch(addConsent())}>add data</button> */}
        <button onClick={() => dispatch(fetchConsent())}>FETCH CONSENT LIST</button>
      </div>
      <div className="consentMgrtableList" >
        <div className="d-flex flex-row justify-content-between ml-2 ">
          <div>
            <Button className="btn mb-4 btn btn-dark mb-sm-0 " onClick={() => { navigate("/addConsent"); }} style={{ width: "15rem" }}>
              <span><FontAwesomeIcon icon={faPlusCircle} /></span> &nbsp;
              <span>Add New Event</span>
            </Button>
          </div>
          <div style={{ width: "30rem", paddingRight: "10px" }}>
            <SearchBox placeholder="Search campaigns  " />
          </div>
        </div>
        <div className="fieldDisplayListWrap">
          <div className="fieldDisplayList tableDisplay">
            <BootstrapTable
              keyField="id"
              data={result}
              columns={columns}
              hover
              condensed
              sort={{ dataField: "price", order: "asc" }}
              rowStyle={rowStyle}
              pagination={paginationFactory([])}
              filter={filterFactory()}
              noDataIndication="Table is Empty"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsentMgrListEditComponent;
const rowStyle = {
  paddingLeft: "100px",
  marginLeft: "10px",
  textAlign: "center",
};
const RiArrowDownSFillStyle = {
  position: "relative",
  top: "6px",
  right: "16px",
};;
