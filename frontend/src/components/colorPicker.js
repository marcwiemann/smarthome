import React, {Component} from 'react';
import iro from '@jaames/iro';

class ColorPickerBox extends Component{
    constructor(props){
        super(props);
        this.state = {color: 'null'};
      }
    
    componentDidMount() {
        const { props } = this;
        this.colorPicker = new iro.ColorPicker(this.el, {
            layout:[
                {
                    component: iro.ui.Wheel,
                    options:{
                        width: 200,
                        wheelLightness: false,
                        borderColor: '#ffffff',
                        borderWidth: 2
                    }
                },
                {
                    component: iro.ui.Slider,
                    options: {
                      borderColor: '#fff',
                      borderWidth: 2
                    }
                  }
            ]
        });
      }
    
      componentDidUpdate() {
        this.setState({color: this.colorPicker.color.rgbString });
        console.log(this.state.color);
      }
    
      render() {
        return (
          <div>
              <div ref={el => this.el = el} />
                <h4>RGB Code:</h4>
          </div>
        );
      }
}

export default ColorPickerBox;