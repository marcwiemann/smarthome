import React, {Component} from 'react';

class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <div className="sidebar">
                <h2>Account</h2>
                <a href="#">Overview</a>
                <a href="#">Rooms</a>
                <a href="#">Devices</a>
                <a href="#">Settings</a>
          </div>  
        );
    }
}

export default Navbar;