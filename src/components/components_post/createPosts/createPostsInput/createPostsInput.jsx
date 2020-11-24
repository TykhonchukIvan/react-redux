import React from 'react';
import './createPostsInput.less'

function CreatePostInput(props) {
  const {value, onChange, style} = props
  return (
    <input className='create-post-input'
           value={value}
           onChange={onChange}
           style={style}/>
  )
}

export default CreatePostInput;