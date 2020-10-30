import React from 'react';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('4', this.props)

    const styles = {
      width: '200px',
      height: '200px',
      border: '1px solid #ccc',
      margin: '10px auto',
      background: '#000283'
    }

    return (
      <div style={styles}>

      </div>
    )
  }
}

export default Card;
