import React, { Component } from "react";

export class TodoRows extends Component {
  render = () => (
    <tr key={this.props.item.action}>
      <td>{this.props.item.action}</td>
      <td>
        <input
          checked={this.props.item.done}
          //   onChange={() => this.toggleDone(item)}
          onChange={() => this.props.callback(this.props.item)}
          type="checkbox"
        />
      </td>
    </tr>
  );
}
