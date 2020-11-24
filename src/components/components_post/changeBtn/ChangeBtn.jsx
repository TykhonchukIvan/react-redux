import React from 'react';
import {BiSort} from "react-icons/bi";
import './changeBtn.less';

function ChangeBtn(props) {
  const {name, onClick} = props
  return (
    <div className='change-btn' onClick={onClick}>
      <BiSort/>
      <div>
        {name}
      </div>
    </div>
  )
}

export default ChangeBtn;