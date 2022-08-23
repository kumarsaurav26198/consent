import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import SearchBox from "../../common/SearchBox";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const ConsentListComponent = () => {
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
  ];
  return (
    <>
      <SearchBox placeholder="search " />
      <div className="fieldDisplayListWrap">
        <div className="fieldDisplayList tableDisplay">
          <BootstrapTable
            className=""
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

export default ConsentListComponent;
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
