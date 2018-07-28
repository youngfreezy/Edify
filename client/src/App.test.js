import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Table from "./components/Table";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
const chaiExpect = chai.expect;

configure({
  adapter: new Adapter()
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a table", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  const table = ReactDOM.findDOMNode(div).getElementsByClassName("table");
  chaiExpect(table).to.be.ok;
  chaiExpect(table.length).to.equal(1);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders an input", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  const input = ReactDOM.findDOMNode(div).getElementsByClassName(
    "question-input"
  );
  chaiExpect(input).to.be.ok;
  chaiExpect(input.length).to.equal(1);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a button to ask questions", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  const button = ReactDOM.findDOMNode(div).getElementsByClassName(
    "ask-question-button"
  );
  chaiExpect(button).to.be.ok;
  chaiExpect(button.length).to.equal(1);
  ReactDOM.unmountComponentAtNode(div);
});

it("Test click event with no input text", () => {
  const spy = jest.spyOn(App.prototype, "parseUserInput");
  const app = shallow(<App />);
  expect(app.state("inputText")).toBe(""); //no ajax request
  app.find(".ask-question-button").simulate("click");
  expect(spy).toBeCalled();
});

it("test click event with input text", () => {
  const app = shallow(<App />);
  const ajaxRequestSpy = jest.spyOn(App.prototype, "callApi");
  app.setState({ inputText: "hello" });
  expect(app.state("inputText")).toBe("hello");
  app.find(".ask-question-button").simulate("click");
  expect(ajaxRequestSpy).toBeCalled();
  //expecting a failed netowrk request here. in the real world I would mock this network request
});

it("the table should add rows properly", () => {
  const table = shallow(
    <Table tableRows={[{ text: "hi" }, { text: "hello" }]} />
  );
  const rows = table.find(".row");
  expect(rows.length).toEqual(2);
});
