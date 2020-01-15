
import React from 'react';
import ReactDOM from "react-dom";
import TemperatureInput from './TemperatureInput';
import style from './app.scss';
import Displayresult from './Displayresult';
import InputvalueComponent from './InputvalueComponent';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.setmeasurementunit = this.setmeasurementunit.bind(this);
    this.setmeasurementunit2 = this.setmeasurementunit2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChanger = this.handleChanger.bind(this);
    this.handleChanger2 = this.handleChanger2.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.state = { value: '', value2: '', scale1: 'celsius', scale2: 'fahrenheit', result: '', all: [] };
  }

  setmeasurementunit(value) {
    this.setState({ scale1: value });
  }
  setmeasurementunit2(value) {
    this.setState({ scale2: value });
  }


  handleChange(value) {
    this.setState({ value });
  }

  handleChanger(e) {
    this.setState({ result: e });
  }
  handleChanger2(e) {
    this.setState({ value2: e});
  }
  celsius_fahrenheit(value) {
    return this.fixdecimal((value * 9 / 5) + 32);
  }
  fahrenheit_celsius(value) {
    return this.fixdecimal((value - 32) * 5 / 9);
  }
  celsius_kelvin(value) {
    return this.fixdecimal(value+ 273.15);
  }
 kelvin_fahrenheit(value) {
  return this.fixdecimal((value - 273.15) * 9/5 + 32);
}
 fahrenheit_kelvin(value) {
  return this.fixdecimal((value - 32) * 5/9 + 273.15);
}

  
  kelvin_celsius(value) {
    return this.fixdecimal(value - 273.15);
  }
  fixdecimal(num){
   return num.toFixed(2);
  }
  handlesubmit(e) {
    const scale1 = this.state.scale1.trim();
    const scale2 = this.state.scale2.trim();
    const value = this.state.value2; 
    let rs='';
  
    let convert=scale1+"_"+scale2;
    switch(convert){
        case "celsius_fahrenheit":
        rs = this.celsius_fahrenheit(value);
        break;
        case "fahrenheit_celsius":
        rs=this.fahrenheit_celsius(value) 
        break; 
        case "celsius_kelvin":
        rs=this.celsius_kelvin(value) 
        break; 
        case "kelvin_fahrenheit":
        rs=this.kelvin_fahrenheit(value) 
        break; 
        case "fahrenheit_kelvin":
        rs=this.fahrenheit_kelvin(value) 
        break; 
        case "kelvin_celsius":
        rs=this.kelvin_celsius(value) 
        break; 
     
    }
   
    console.log(rs)
    var status = "incorrect";
    if (this.state.result == rs) {
      status = "correct"
    }
    this.setState({ all: [...this.state.all, { value, scale1: this.state.scale1, scale2: this.state.scale2,result: this.state.result, status }] });
    this.setState({ value: '', result: '' });
  }
  render() {
    const scale1 = this.state.scale1;
    const scale2 = this.state.scale2;
    const value = this.state.value;

    return (
      <div className="text-center container-fluid">
        <form>
        Input Numerical Value:
     
          <InputvalueComponent 
          value={this.state.value2}
          onChange={this.handleChanger2}
          />
          Unit of Measure
          <TemperatureInput
            scale1="c"
            value={scale1}
            onChange={this.setmeasurementunit} /> to Unit of Measure

          <TemperatureInput
            scale1="c1"
            value={scale2}
            onChange={this.setmeasurementunit2} />

Student Response:
     
          <InputvalueComponent 
          value={this.state.result}
          onChange={this.handleChanger}
          />
          <input type="button" value={"submit"}
            onClick={this.handlesubmit} />
     
        </form>



<Displayresult all={this.state.all}/>

      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
