import { Component } from "react";
import "./search-box.styles.css"

class SearchBox extends Component{
    
    

    render(){

        return(
            <input
         // className="seach-box"
         className={`search-box ${this.props.className}`}
          type="search"
          //placeholder="search monsters"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
            /> 
        );
    }
}
export default SearchBox