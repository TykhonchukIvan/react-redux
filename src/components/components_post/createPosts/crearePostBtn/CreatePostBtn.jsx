import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

import './createPostBtn.less'

function CreatePostBtn(props) {
  const {name, onClick} = props
  return (
    <div className='create-post-btn' onClick={onClick}>
      <AiOutlinePlusCircle />
      <div>
        {name}
      </div>
    </div>
  )
}

export default CreatePostBtn;