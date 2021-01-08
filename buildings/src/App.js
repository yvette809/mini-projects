import React from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui-container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
