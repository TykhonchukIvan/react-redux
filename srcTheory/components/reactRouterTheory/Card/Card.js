import React from 'react';
import CardBox from './CardBox/CardBox.jsx';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {name: 'bmw', year: '2020'},
        {name: 'audi', year: '2019'},
        {name: 'mazda', year: '2028'},
      ]
    }
    this.goToHomePage = this.goToHomePage.bind(this)
  }

  goToHomePage () {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {

    console.log(this.props)

    const cars = this.state.cars.map((car, index) =>
      <CardBox key={index} name={car.name} year={car.year} />
    )

    return (
      <div style={{
        textAlign: 'center'
      }}>
        <hr/>
        <button onClick={this.goToHomePage}>Click home</button>
        <hr/>
        {cars}
      </div>
    )
  }
}

export default Card;
