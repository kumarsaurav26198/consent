import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import SearchBox from "../../common/SearchBox";
import "./ConsentList.scss";

const ConsentMgrListEditComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        console.log(data);
      });
  }, []);

  const columns = [
    {
      dataField: "customerId",
      text: "Customer ID",
    },

    {
      dataField: "phoneNumber",
      text: "Phone Number",
    },
    {
      dataField: "consent",
      text: "Consent",
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
        <SearchBox placeholder="search " />
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
            className=""
            keyField="id"
            data={data}
            columns={columns}
            rowStyle={rowStyle}
          />
          {/* <Pagination
            activePage={activePage}
            count={count}
            rowsPerPage={rowsPerPage}
            totalPages={totalPages}
            setActivePage={setActivePage}
          /> */}
        </div>
      </div>
    </>
  );
};

export default ConsentMgrListEditComponent;
const rowStyle = {
  paddingLeft: "100px",
  // color: "red",
  // fontWeight: "bold",
  marginLeft: "10px",
  textAlign: "center",
};
