import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() {}

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => {
    this.setState();
  };
  handleChange = () => {
    // this.setState({ search: e.target.value });
  };
  onClearSearch = () => {
    this.setState({ value: "" });
    // this.filterSearch("");
    // this.props.setSearchTerm("", this.props.searchBox);
  };
  render() {
    return (
      <>
        <div className="searchBox">
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>
                <AiOutlineSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                className="table-search-field"
                value={this.state.defaultValue}
                onChange={this.handleChange()}
                placeholder={this.props.placeholder}
                // defaultValue="search"
              />
              <InputGroup.Text>
                <IoClose onClick={this.onClearSearch} />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </div>
      </>
    );
  }
}

// import React from "react";
// import { Form, InputGroup } from "react-bootstrap";
// import { AiOutlineSearch } from "react-icons/ai";
// import { IoClose } from "react-icons/io5";

// const SearchBox = (props) => {
//   return (
//     <>
//       <div style={SearchConatainer}>
//         <Form.Group>
//           <InputGroup>
//             <button style={IoClosed}>
//               <AiOutlineSearch />
//             </button>

//             <Form.Control
//               type="text"
//               placeholder={props.placeholder}
//               style={inputField}
//               onChange={props.onChange}
//             />
//             <button style={IoClosed}>
//               <IoClose onClick={() => {}} />
//             </button>
//           </InputGroup>
//         </Form.Group>
//       </div>
//     </>
//   );
// };

// export default SearchBox;

// const SearchConatainer = {
//   border: "1px solid black",
//   height: "47px",
//   margin: "10px 0px",
//   borderRadius: "5px",
//   width: "100%",
// };
// const inputField = {
//   fontFamily: "Roboto sansSerif",
//   height: "44px",
//   paddingLeft: "20px",
//   border: "0",
//   borderLeft: "01px solid black",
//   borderRight: "1px solid  black",
// };

// const IoClosed = {
//   position: "relative",
//   border: "0px solid",
//   padding: "10px",
//   background: "transparent",
// };
// static propTypes = {
//   placeholder: PropTypes.string,
//   listItems: PropTypes.array,
//   filteredItems: PropTypes.func,
//   dataNature: PropTypes.string,
//   setSearchTerm: PropTypes.func,
//   searchTerm: PropTypes.string,
//   SearchBox: PropTypes.string,
// };
