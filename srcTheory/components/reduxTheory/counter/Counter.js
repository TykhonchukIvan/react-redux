import React from 'react';
import {connect} from 'react-redux'
import NewCounter from './NewCounter';
import {add, addNumber, asyncAdd, sub} from '../redux/actions/actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const styles = {
      margin: '10px auto',
      maxWidth: 400,
      display: 'flex',
      justifyContent: 'space-between'
    }

    return (
      <div style={{textAlign: 'center'}}>
        <p>Counter: {this.props.counterOne}</p>
        <hr/>
        <div style={styles}>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
        <div style={styles}>
          <button onClick={this.props.onAddNumber.bind(this, 10)}>Добавить 10</button>
          <button onClick={() => this.props.onAddNumber(-15)}>Вычесть 15</button>
        </div>
        <hr/>
        <NewCounter/>
        <hr/>
        <div style={styles}>
          <button onClick={this.props.onAsyncAdd.bind(this, 100)}>Добавить 100 асинхрононо</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counterOne: state.counter1.counterOne
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: (number) => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);