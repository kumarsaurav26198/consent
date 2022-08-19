import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const SearchBox = (props) => {
  return (
    <>
      <div style={SearchConatainer}>
        <Form.Group>
          <InputGroup>
            <button style={IoClosed}>
              <AiOutlineSearch />
            </button>

            <Form.Control
              type="text"
              placeholder={props.placeholder}
              style={inputField}
            />
            <button style={IoClosed}>
              <IoClose onClick={() => {}} />
            </button>
          </InputGroup>
        </Form.Group>
      </div>
    </>
  );
};

export default SearchBox;

const SearchConatainer = {
  border: "1px solid black",
  height: "47px",
  margin: "10px 0px",
  borderRadius: "5px",
  width: "100%",
};
const inputField = {
  fontFamily: "Roboto sansSerif",
  height: "44px",
  paddingLeft: "20px",
  border: "0",
  borderLeft: "01px solid black",
  borderRight: "1px solid  black",
};

const IoClosed = {
  position: "relative",
  border: "0px solid",
  padding: "10px",
  // borderRadius: "10px",
  background: "transparent",
};
