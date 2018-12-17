import React, { Component } from 'react';
import logo from './logo.svg';
import FlipMove from "react-flip-move";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header id="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CardList />
        <footer className="foot"/>
      </div>
    );
  }
}



class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
 
    this.addCard = this.addCard.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addCard(e) {
    if (this._inputElement.value !== "") {
      var newCard = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          cards: prevState.cards.concat(newCard) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.cards);
       
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredCards = this.state.cards.filter(function (card) {
      return (card.key !== key);
    });
   
    this.setState({
      cards: filteredCards
    });
  }

  listCards() {
    return(
      <div className="active-cards">
            <CardQueue entries={this.state.cards} delete={this.deleteItem}/>
      </div>
    );
  }

  bottomInput(){
    return(
      <footer className="bottomInput">
             <form onSubmit={this.addCard}>
             <input ref={(a) => this._inputElement = a} placeholder="enter task">
                </input>
                <button type="submit">Add</button>
                <button type="submit">Randomize</button>
             </form>
        </footer>
    );
  }

  render() {
    return (
      <div className="view-area">
        <h1 id="cardHeader">Morphilogical Creativity</h1>
        <div>{this.listCards()}</div>
        <footer className="bottomBar">{this.bottomInput()}</footer>
      </div>
    );
  }
}

class CardQueue extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(card) {
    return(
      <li className="FuckThis" key={card.key}>
        <Card entries={card} 
        onClick={() => this.delete(card.key)}/>
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }
 
  render() {
    var cardQueue = this.props.entries;
    var listCards = cardQueue.map(this.createTasks);
 
    return (
      <ul className="cardQueue">
      <FlipMove duration={250} easing="ease-out">
          {listCards}
      </FlipMove>
      </ul>
    );
  }
};
 
class Card extends Component {
  render(){
  return (
   <div className="card">
    <h1 className="word"> 
      {this.props.entries.text} 
    </h1>
    <div className="buttonbar">
      <button className="lock-button"/>
      <button className="delete-button"
        onClick={() => 
        this.props.onClick(this.props.entries.key)} />
    </div>
  </div>  
  );
  }
}



/*
replace binds with ArrowFunction*/


export default App;
