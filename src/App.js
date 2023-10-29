import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.componet";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    // console.log('render from appJs')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
      <h1 className="Monster-Title">MONSTER ROLODEX</h1> 
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="monsters-search monsters"
          className="search-box"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
