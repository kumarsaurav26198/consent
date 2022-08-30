import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import SearchBox from "../../common/SearchBox";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { addConsent, deleteConsent, fetchConsent } from "../../../redux/actions/consentActionCreator";
import { setProducts } from "../../../redux/actions/productsActions";


const ConsentMgrListEditComponent = () => {
  const result = useSelector(state => state.reducers.consentList);
  console.warn("redux store data in consentList", result);

  const dispatch = useDispatch();


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

  const columns = [
    {
      dataField: "campaignId",
      text: "Customer ID",
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
      dataField: "createdDate",
      text: "Created Date",
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
      dataField: "lastModified",
      text: "last Modified",
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
      dataField: "phoneNumber",
      text: "Phone Number",
      sort: false,
      headerAlign: "start",
      align: "start",
    },
    {
      dataField: "consent",
      text: "Consent",
      sort: false,
      headerAlign: "end",
      align: "end",
      formatter: priceFormatter,
    },
    {
      dataField: "channel",
      text: "Consent",
      sort: false,
      headerAlign: "end",
      align: "end",
    },
    {
      dataField: "campaignName",
      text: "Consent",
      sort: false,
      headerAlign: "end",
      align: "end",

    },

  ];
  return (
    <>
      <div className="card-holder">
        <button onClick={() => dispatch(fetchConsent())}>fetch data</button>
        <button onClick={() => dispatch(setProducts())}>Set Product</button>
        <button onClick={() => dispatch(deleteConsent())}>delete data</button>
        <button onClick={() => dispatch(addConsent())}>add data</button>
      </div>
      <div className="consentMgrtableList" >
        <div className="d-flex flex-row justify-content-between ml-2 ">
          <div>

          </div>

          <div style={{ width: "30rem", paddingRight: "10px" }}>
            <SearchBox placeholder="Search campaigns  " />
          </div>
        </div>

        <div className="fieldDisplayListWrap">

          <div className="fieldDisplayList tableDisplay">
            <BootstrapTable
              className=""
              keyField="id"
              data={[]}
              columns={columns}
              hover
              condensed
              sort={{ dataField: "price", order: "asc" }}
              rowStyle={rowStyle}
              filter={filterFactory()}
              pagination={paginationFactory([])}
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
};
