import React, { Component } from 'react'
import SeatPicker from "react-seat-picker";
import seats from '../.././assests/seats.json';

export default class SeatPickers extends Component {
    state = {
        loading: false
      };
    
      addSeatCallback = ({ row, number, id }, addCb) => {
        this.setState(
          {
            loading: true
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
    
      addSeatCallbackContinousCase = (
        { row, number, id },
        addCb,
        params,
        removeCb
      ) => {
        this.setState(
          {
            loading: true
          },
          async () => {
            if (removeCb) {
              await new Promise(resolve => setTimeout(resolve, 750));
              console.log(
                `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
              );
              removeCb(params.row, params.number);
            }
            await new Promise(resolve => setTimeout(resolve, 750));
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
            loading: true
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
            {/* <h1>Seat Picker</h1> */}
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
            {/* <h1>Seat Picker Continuous Case</h1>
            <div style={{ marginTop: "100px" }}>
              <SeatPicker
                addSeatCallback={this.addSeatCallbackContinousCase}
                removeSeatCallback={this.removeSeatCallback}
                rows={rows}
                maxReservableSeats={3}
                alpha
                visible
                selectedByDefault
                loading={loading}
                tooltipProps={{ multiline: true }}
                continuous
              />
            </div> */}
          </div>
        );
      }
}
