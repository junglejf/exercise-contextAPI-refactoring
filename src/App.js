import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };
    this.moveCar = this.moveCar.bind(this);
    this.handleSignalColor = this.handleSignalColor.bind(this);
  }

  moveCar(color) { 
    this.setState((prevState)=>({ cars: { [color]: !prevState.cars[color]},}));
  }

  handleSignalColor(color) {
    this.setState({ signal: { color: color }});
  };
  render () {
    const { cars, signal: { color } } = this.state;
    const appState = { 
      cars,
      moveCar: this.moveCar,
      signalColor: color,
      changeSignal: this.handleSignalColor
    };
    return (
        <MyContext.Provider value={appState}>
          <div className="container">
            <Cars />
            <TrafficSignal />
          </div>
        </MyContext.Provider>
      );
  }
}

export default App;
