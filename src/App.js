import React, { Component } from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import Navbar from './components/Navbar';
import './App.css'

const sampleCharacter ={
  quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quote: sampleCharacter
    };
    this.getQuotes = this.getQuotes.bind(this);

  }

  getQuotes() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }

  render(){
    return(
      <div className="App">
        <Navbar />
        <QuoteCard quote={this.state.quote}/>
        <button onClick={this.getQuotes}>Get new quotes</button>
      </div>
    );
  }
}

export default App;
