import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ActiveWords />
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

  render() {
    return (
      <div className="cardInputs">
        <div className="bottomInput">
         <form onSubmit={this.addCard}>
         <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <CardQueue entries={this.state.cards} delete={this.deleteItem}/>
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
    return <li onClick={() => this.delete(card.key)} 
              key={card.key}>{card.text}</li>
  }

  delete(key) {
    this.props.delete(key);
  }
 
  render() {
    var cardQueue = this.props.entries;
    var listCards = cardQueue.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listCards}
      </ul>
    );
  }
};
 


class ActiveWords extends Component {

  render() {
    return (
      <div className="active-words">
        Card Queue Below Here
        <Card />
        <CardList/>
      </div>
    );
  }
}

function Card(props) {
  return (
    <span className="card">
    <div>
      <h1 className="word"> Card.props </h1>
      <ButtonBar />
    </div>
    </span>
  );
}



function ButtonBar() {
  return(
    <div className="buttonbar">
        <LockWordButton />
        <DeleteWordButton />
    </div>
  );
}

function LockWordButton() {
  return(
    <button className="lock-button"/>
  );
}

function DeleteWordButton() {
  return(
    <button className="delete-button" />
  );
}




/*
replace with ArrowFunction*/


export default App;
