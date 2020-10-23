import React from 'react';
import './Car.less'

export default ({name, year, onChangeTitle, onChangeName, onDelete, carContainerStyle}) => {

  const inputClasses = ['input']

  if(name !== ''){
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if(name.length > 4) {
    inputClasses.push('bold')
  }

  return (
    <div style={carContainerStyle} className={'car-wrapper'}>
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