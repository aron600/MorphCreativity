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
    var x = 3.1;
    console.log('yyyyyyyyyyyyyyy');
    //for (var x of this.state.words) {
    this.renderWord();
    console.log(x);
    //}
    console.log('bitchin');
  }

  renderWord() {
    console.log('Got this far');
    console.log();
    return (
      <Word />
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


function Word(props) {
  return (
    <span>
      <button className="lock">
        {props.value}
      </button>
      <button className="delete">

      </button>
    </span>
  );
}

export default App;
