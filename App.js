import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  typableArea() { }

  render() {
    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ActiveWords className="Morph" />

      </div>
    );
  }
}

class ActiveWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['9999', '2', '3', '4'],
      val: 'reached the danger zone',
    };
  }

  addWord(whichWord) {
    this.state.words.push(whichWord)
  }

  deleteWord() { }
  lockWord() { }
  switchAround() { }
  randomize() { }



  renderWords() {
    
    this.renderWord();
    
  
  }

  renderWord() {
   
    return (
      <Card />
    );
  }



  render() {
    return (
      <div className="active-words">
        Hello World1111
        {/*this.renderWords()*/}
        {this.renderWord(this.state.words[0])}
        World Hellow
      </div>
    );
  }
}


/*class Card extends React {
  constructor (props) {
    super(props);
  }
  render(){
  return (
    <div className="rowC">
      <LockWordButton className="lock" />

      <span>
      <LockWordButton className="lock" />
      <DeleteWordButton className="delete" />
      </span>
    </div>
  );
  }
}*/

function Card(props) {
  return (
    <span className="invisbar">
    <div className="wraptainer" >
      <LockWordButton className="card" />

      <div className="rowC">
        <LockWordButton className="lock" />
        <DeleteWordButton className="delete" />
      </div>
    </div>
    </span>
  );
}

function DeleteWordButton() {
  return(
    <button/>
  );
}

function LockWordButton() {
  return(
    <button/>
  );
}

export default App;
