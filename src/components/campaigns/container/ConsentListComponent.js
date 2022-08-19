import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import SearchBox from "../../common/SearchBox";

const ConsentListComponent = () => {
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
      dataField: "createdDate",
      text: "Created Date",
    },
    {
      dataField: "lastModified",
      text: "last Modified",
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
      <SearchBox placeholder="search " />
      <div className="fieldDisplayListWrap">
        <div className="fieldDisplayList tableDisplay">
          <BootstrapTable
            className=""
            keyField="id"
            data={data}
            columns={columns}
            sort={{ dataField: "price", order: "asc" }}
            rowStyle={rowStyle}
          />
        </div>
      </div>
    </>
  );
};

export default ConsentListComponent;
const rowStyle = {
  paddingLeft: "100px",
  // color: "red",
  // fontWeight: "bold",
  marginLeft: "10px",
  textAlign: "center",
};
