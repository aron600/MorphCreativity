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
                <div><ActiveWords /></div>

            </div>
        );
    }
}

class ActiveWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['1', '2', '3', '4'],
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
        console.log('yyyyyyyyyyyyyyy');
        for (var x of this.state.words) {
            this.renderWord(x);
            console.log(x);
        }
        console.log('bitchin');
    }

    renderWord(x) {
        console.log('Got this far');
        return (
            <button className=".App-link">
                {console.log('DangerZoneReachedBitches')}
                {this.val}
                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
      </button>
        );
    }



    render() {
        return (
            <div className="active-words">
                Hello World1111
        {this.renderWord(this.state.words[1])}
                World Hellow
      </div>
        );
    }
}


function Word(props) {
    return (
        <div>
            <button className="lock">
                {props.value}
            </button>
            <button className="delete">

            </button>
        </div>
    );
}

export default App;
