import React, { Component } from 'react'
import SeatPicker from "react-seat-picker";
import seats from '../.././assests/seats.json';

export default class SeatPickers extends Component {
    state = {
        loading: false,
        isEnabled: false,
        showMessage: false
      };
      onClick() {
        alert("Success! Your ticket has been booked now...")
      }
      addSeatCallback = ({ row, number, id }, addCb) => {
        this.setState(
          {
            loading: true,
            isEnabled: true
          },
          async () => {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log(`Added seat ${number}, row ${row}, id ${id}`);
            const newTooltip = `tooltip for id-${id} added by callback`;
            addCb(row, number, id, newTooltip);
            this.setState({ loading: false });
          }
        );
      };
    
      removeSeatCallback = ({ row, number, id }, removeCb) => {
        this.setState(
          {
            loading: true,
            isEnabled: false
          },
          async () => {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log(`Removed seat ${number}, row ${row}, id ${id}`);
            // A value of null will reset the tooltip to the original while '' will hide the tooltip
            const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
            removeCb(row, number, newTooltip);
            this.setState({ loading: false });
          }
        );
      };
    
      render() {
        const rows = seats;
        const { loading } = this.state;
        return (
          <div>
            <div style={{ marginTop: "10px" }}>
              <SeatPicker
                addSeatCallback={this.addSeatCallback}
                removeSeatCallback={this.removeSeatCallback}
                rows={rows}
                maxReservableSeats={3}
                alpha
                visible
                selectedByDefault
                loading={loading}
                tooltipProps={{ multiline: true }}
              />
            </div>
            <br />
            <button className="btn btn-success" disabled={!this.state.isEnabled}
                    onClick={this.onClick.bind(this)}>Book now</button>
            {/* <div className="mb-2">
            {this.state.showMessage ? ( <div>Success! Your ticket has been booked now </div>) : (<div>Call</div>)}
              </div> */}
          </div>
        );
      }
}
