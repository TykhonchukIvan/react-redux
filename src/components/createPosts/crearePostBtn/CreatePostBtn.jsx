import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

import './createPostBtn.less'

function CreatePostBtn(props) {
  const {name} = props
  return (
    <div className='create-post-btn'>
      <AiOutlinePlusCircle/>
      <div>
        {name}
      </div>
    </div>
  )
}

export default CreatePostBtn;