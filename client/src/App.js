import React, { Component } from "react";
import logo from "./8ball.png";
import "./App.css";
import Table from "./components/Table";
import { SyncLoader } from "react-spinners";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      tableRows: [],
      answer: "",
      loading: false
    };
    this.parseUserInput = this.parseUserInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearTable = this.clearTable.bind(this);
  }

  componentDidMount() {
    if (window.localStorage) {
      let tableRows = JSON.parse(
        window.localStorage.getItem("tableRows"),
        null,
        4
      );
      if (tableRows && tableRows.length > 0) {
        this.setState({ tableRows });
      }
    }
  }
  parseUserInput(e) {
    if (this.state.inputText === "") {
      return alert("Please enter a question to ask");
    }
    this.setState({ loading: true });
    this.callApi()
      .then(json => {
        let tableRows = this.state.tableRows;
        tableRows = tableRows.concat({ text: json.magic.type });
        this.setState({ tableRows, inputText: "", answer: json.magic.answer });
        window.localStorage.setItem("tableRows", JSON.stringify(tableRows));
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log("the error in making the request", err);
        this.setState({ loading: false });
      });
  }
  handleInputChange(e) {
    this.setState({ inputText: e.target.value });
  }

  async callApi() {
    const requestParams = encodeURIComponent(this.state.inputText);
    const response = await fetch(`/eight-ball/${requestParams}`);
    const body = await response.json();
    if (response.status !== 200) alert(body.message);
    return body;
  }

  clearTable() {
    this.setState({ tableRows: [], loading: true }, () => {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 10);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Magic 8-Ball </h1>{" "}
          <SyncLoader
            color={"#dddddd"}
            size={15}
            loading={this.state.loading}
          />
        </header>{" "}
        <div className="game-container">
          <div className="game-item">
            <img src={logo} className="App-logo" alt="logo" />
          </div>{" "}
          <div className="game-item answer"> {this.state.answer} </div>{" "}
          <div className="actions-container game-item">
            <input
              className="question-input game-item"
              placeholder="Enter your yes/no question..."
              value={this.state.inputText}
              onChange={this.handleInputChange}
            />
            <button
              className="ask-question-button game-item"
              onClick={this.parseUserInput}
            >
              Shake the Magic 8 - ball{" "}
            </button>{" "}
            <Table
              tableRows={this.state.tableRows}
              clearTable={this.clearTable}
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
