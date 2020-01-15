
import React from 'react';

  export default class Displayresult extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
      
<table cellSpacing="40">
  <thead>
    <tr>
      <th>Input Numerical Value</th>
      <th>Input Unit of Measure</th>
      <th>Target Unit of Measure</th>
      <th>Student Response</th>
      <th>Output</th>
    </tr>
  </thead>

  <tbody>
  {this.props.all.map((value, index) => (
    <tr key={index}><td>{value.value}</td>
    <td>{value.scale1}</td> 
   
     <td>{value.scale2} </td>
     <td>{value.result} </td>
     <td>{value.status}</td>
    
    </tr>
    ))
  }
 
  </tbody>
</table>
      );
    }
  }


