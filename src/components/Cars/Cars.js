import React from 'react';
import CarBox from './CarsBox/CarBox.jsx';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {name: 'bmw', year: '2020'},
        {name: 'audi', year: '2019'},
        {name: 'mazda', year: '2028'},
      ],
      pageTitle: 'Cars',
      showCars: false,
    }
    this.toggleCarsHandler = this.toggleCarsHandler.bind(this)
    this.changeTitleHandler = this.changeTitleHandler.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  toggleCarsHandler() {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler(pageTitle) {
    this.setState({
      pageTitle: pageTitle
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }

  onDeleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({
      cars: cars
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center',
      maxWidth: '500px',
      margin: '0 auto',
    }
    const carContainerStyle = {
      boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <CarBox key={index}
                  name={car.name}
                  year={car.year}
                  onChangeTitle={() => this.changeTitleHandler(car.name)}
                  onChangeName={(event) => this.onChangeName(event.target.value, index)}
                  onDelete={this.onDeleteHandler.bind(this, index)}
                  carContainerStyle={carContainerStyle}
          />)
      })
    }

    return (
      <div className={'container'} style={divStyle}>
        <div className={'container__title'}>
          <h1>{this.state.pageTitle}</h1>
          <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
        </div>
        <div className={'container__cars'}>
          {cars}
        </div>
      </div>
    )
  }
}

export default Cars;