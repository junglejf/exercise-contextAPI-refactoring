import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    };
    this.moveCar = this.moveCar.bind(this);
  }
  moveCar(color) { 
    this.setState((prevState)=>({ cars: { [color]: !prevState.cars[color]},}));
  }
  render () {
    const { cars } = this.state;
    const appCar = { cars , moveCar: this.moveCar };
    return (
        <MyContext.Provider value={appCar}>
          <div>
            <Cars />
          </div>
        </MyContext.Provider>
      );
  }
}

export default App;
