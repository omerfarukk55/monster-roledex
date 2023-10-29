import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    console.log("render from chatList");
    const { monsters } = this.props;
    return (
      <div className="CardList">
        {monsters.map((monster) => {
          //kısaltılmış hali kodun normalde const name=monster.name;
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}
export default CardList;
