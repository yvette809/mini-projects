import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleDelete = (id) => {
    console.log(`edit edit  ${id}`);
  };
  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
          </div>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
