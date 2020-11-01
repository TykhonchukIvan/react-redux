import React from 'react'
import {connect} from 'react-redux'
import {addTwo} from '../redux/actions/actions';

class NewCounter extends React.Component {
  render() {
    const style = {
      margin: '10px auto',
      padding: 20,
      maxWidth: 400,
    }
    return (
      <div style={style}>
        <h1>Counter {this.props.counterTwo}</h1>
        <hr/>
        <div>
          <button onClick={this.props.onChange.bind(this,1)}>Add</button>
          <button onClick={this.props.onChange.bind(this,-1)}>Sub</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counterTwo: state.counter2.counterTwo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (number) => dispatch(addTwo(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCounter);