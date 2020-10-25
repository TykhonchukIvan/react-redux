import React from 'react';
import Radium from 'radium';
import './CarBox.less'

const CarBox = ({name, year, onChangeTitle, onChangeName, onDelete, carContainerStyle}) => {

  const inputClasses = ['input']

  if (name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (name.length > 4) {
    inputClasses.push('bold')
  }

  const styles = {
    ...carContainerStyle,
    border: '1px solid #ccc',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)'
    }
  }

  return (
    <div style={styles} className={'car-wrapper'}>
      <h2>Car name: {name}</h2>
      <p>Year: {year}</p>
      <input
        type='text'
        onChange={onChangeName}
        value={name}
        className={inputClasses.join(' ')}
      />
      <button onClick={onChangeTitle}>Click</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Radium(CarBox);