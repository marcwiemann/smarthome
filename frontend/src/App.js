import React, {Component} from "react";
import './css/App.css';
import Navbar from "./components/navbar";
import Box from "./components/box";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {jsonResponse : {}};
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        
        <header className="appheader">
          <h1>
            Willkommen zurück, Marc!
          </h1>
        </header>
        <div className="wrapper">
          <Box title="LED Strip"></Box>
        </div>
      </div>
    );
  }
  
}

export default App;
