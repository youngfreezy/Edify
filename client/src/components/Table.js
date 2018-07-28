import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  render() {
    return (
      <table className="table">
        <tbody>
          <tr className="table-title">
            <th>
              <div>
                History of Luck{" "}
                <button onClick={this.props.clearTable}>Clear</button>
              </div>
            </th>
          </tr>
          {this.props.tableRows.map((row, i) => {
            return (
              <tr key={i}>
                <td className={`${row.text} row`}>{row.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
