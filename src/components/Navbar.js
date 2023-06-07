import React, { Component } from "react";

export class Navbar extends Component {
  render = () => (
    <div className="col-12">
      <h2 className="bg-primary text-white text-center p2">
        {/* {this.state.username}To do list */}
        {this.props.name}'s To do list
      </h2>
    </div>
  );
}
