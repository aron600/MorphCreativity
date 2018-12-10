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
        <ActiveWords />

      </div>
    );
  }
}

class ActiveWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: Array(0).fill(null),
    };
  }

  addWord(whichWord) {
    var copyArr = this.words.push(whichWord)
    return copyArr;
  }

  deleteWord() { }
  lockWord() { }
  switchAround() { }
  randomize() { }

  renderWord(currentWord) {
    <Word
      value={currentWord}
    />

  }

  render() {
    return (
      <div className="active-words">
        {for (let x of this.state.words) {
          this.renderWord(x);
        }
      }
      </div>
    );
  }
}


function Word(props) {
  return (
    <button className="word" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default App;
