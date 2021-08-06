import React from 'react';

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('3', this.props)

    const styles = {
      width: '200px',
      height: '200px',
      border: '1px solid #ccc',
      margin: '10px auto',
      background: '#00830f'
    }

    return (
      <div style={styles}>

      </div>
    )
  }
}

export default About