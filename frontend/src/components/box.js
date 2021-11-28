import { ReactComponent as MoreIcon} from './../icons/more.svg';
import React, {Component} from 'react';
import ColorPickerBox from './colorPicker';

class Box extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
          <div className="box">
                <div className="left-80"><h3>{this.props.title}</h3></div>
                <div className="rigth-20"><a href="#" className="icon-button"><MoreIcon /></a></div>
                <ColorPickerBox 
                  color={ '#fff' }
                  onColorChange={ (color) => { console.log(color.hexString) } }
                />
          </div>  
        );
    }
}

export default Box;