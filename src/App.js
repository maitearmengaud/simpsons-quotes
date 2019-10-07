import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <QuoteCard image={"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112"} quote="Ahh! Sweet liquor eases the pain." character="Troy McClure"/>
     <QuoteCard image={"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"} quote="Shoplifting is a victimless crime, like punching someone in the dark."
character= "Nelson Muntz"/>
    </div>

  );
}


export default App;