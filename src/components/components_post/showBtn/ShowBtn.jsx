import React from 'react';
import './ShowBtn.less';

function ShowBtn(props) {
  const {name, onClick, children} = props
  return (
    <div className='show-btn' onClick={onClick}>
      {children}
      <div>
        {name}
      </div>
    </div>
  )
}

export default ShowBtn;