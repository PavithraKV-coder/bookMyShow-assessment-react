import React, { Component } from 'react';
import './TimePicker.css';
import SeatPickers from '../SeatPicker/SeatPickers';

export default class TimePicker extends Component {
  constructor(props){
    super(props)

    this.state = {
      result: false,
      selected: []
    }
  }
  onClick = (index) => {
    let { selected } = this.state;
    if (selected.indexOf(index) === -1) {
      this.setState({ result: true });
      selected.push(index);
    } else {
      this.setState({ result: false });
      selected = selected.filter(i => i !== index);
    }
    this.setState({ selected });
  }

  render() {
    return (
      <div className="TimePicker">
        {this.props.times.map((time, index) =>
          <div className="time" key={ index }>
            <button className="btn btn-outline-secondary" 
             onClick={() => this.onClick(index)}>{ time }</button>
            {/* <Link className="btn btn-light btn-sm" to={'/movie/' + movie.imdbID + '/seats/'}>
              { time }
            </Link> */}
          </div>            
        )}
       <div className="col-md-12">{this.state.result ? <SeatPickers /> : null}</div> 
      </div>
    )
  }
}
