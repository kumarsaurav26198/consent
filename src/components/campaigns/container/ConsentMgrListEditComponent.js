import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import SearchBox from "../../common/SearchBox";
import "./ConsentList.scss";

const ConsentMgrListEditComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
      });
  }, []);

  function priceFormatter(cell, row) {
    if (cell === "false") {
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
      // style: (cell, row, rowIndex, colIndex) => {},
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
      align: "center",
      formatter: priceFormatter,
    },
  ];
  return (
    <>
      <div
        style={{
          width: "400px",
          position: "relative",
          left: "75%",
        }}
      >
        <SearchBox placeholder="search campaigns " />
      </div>
      <div
        style={{
          width: "90px",
          position: "absolute",
          left: "68%",
          border: "1px solid black  ",
          height: "50px",
          borderRadius: "4px",
          top: "44%",
        }}
      >
        {/* <SearchBox placeholder="search " /> */}
      </div>

      <div className="fieldDisplayListWrap">
        <div className="fieldDisplayList tableDisplay">
          <BootstrapTable
            keyField="id"
            data={data}
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
    </>
  );
};

export default ConsentMgrListEditComponent;
const rowStyle = {
  paddingLeft: "100px",
  marginLeft: "10px",
  // textAlign: "center",
};
const RiArrowDownSFillStyle = {
  position: "relative",
  top: "6px",
  right: "16px",
};
