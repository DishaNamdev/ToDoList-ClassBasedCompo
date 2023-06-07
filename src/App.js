import React, { Component } from "react";
import {Navbar} from "./components/Navbar";
import { TodoRows } from "./components/TodoRows";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Zander -",
      todoItems: [
        { action: "Buy Milk", done: false },
        { action: "Dentist at 5pm", done: false },
        { action: "Go to Gym", done: false },
      ],
      newToDo: "",
    };
  }

  changeStateData = () => {
    this.setState({
      username: this.state.username === "Name1" ? "Name2" : "Name1",
    });
  };

  toggleDone = (todo)=>{
    this.setState({
      todoItems: this.state.todoItems.map((item)=>
        item.action === todo.action ? {...item,done: !item.done}:item
      ),
    });
  }

  // todoRows = () =>
  //   this.state.todoItems.map((item) => (
  //     <tr key={item.action}>
  //       <td>{item.action}</td>
  //       <td>
  //         <input
  //           checked={item.done}
  //           onChange={() => this.toggleDone(item)}
  //           type="checkbox"
  //         />
  //       </td>
  //     </tr>
  //   ));

  todoRows = () =>
    this.state.todoItems.map((item)=>(
      <TodoRows key={item.action} item ={item} callback={this.toggleDone}/>
    ));

  updateSearchValue = (event) => {
    this.setState({
      newToDo: event.target.value
    });
  };

  newToDoHandler = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newToDo, done: false },
      ],
    });
  };

  render = () => (
    <div className="container">
      <div className="row">
      <Navbar name = {this.state.username}/>
        <div className="col-12">
          <input
            onChange={this.updateSearchValue}
            type="text"
            value={this.state.newToDo}
            className="form-control"
          />
          <button
            className="btn btn-primary mt-2"
            onClick={this.newToDoHandler}
          >
            Add
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Tasks</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
