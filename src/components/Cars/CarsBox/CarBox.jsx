import React, {Component} from 'react';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import './CarBox.less'

class CarBox extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if(this.props.index === 0)
    this.inputRef.current.focus()
  }

  render() {
    const inputClasses = ['input']

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <>
        <h2>Car name: {this.props.name}</h2>
        <p>Year: {this.props.year}</p>
        <input
          ref={this.inputRef}
          type='text'
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onChangeTitle}>Click</button>
        <button onClick={this.props.onDelete}>Delete</button>
      </>
    )
  }
}

CarBox.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
  onChangeTitle: PropTypes.func,
}

export default withClass(CarBox, 'car-wrapper');