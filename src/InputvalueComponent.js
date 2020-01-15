import React from 'react';
class InputvalueComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onChange(e.target.value);
    }
  
    render() {
      const value = this.props.value;
      
      return (
  
        <div className="form-group">
        <input className="form-control container text-center" id="focusedInputed" type="text" value={value}
          onChange={this.handleChange} />
      </div>

        // <div className="form-group">
  
        //   <input className="form-control container text-center" id="focusedInputed" type="text" value={value}
        //     onChange={this.handleChange} />
        // </div>
  
  
  
      );
    }
  };
  export default InputvalueComponent;