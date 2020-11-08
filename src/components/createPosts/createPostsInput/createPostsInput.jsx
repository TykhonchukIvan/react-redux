import React from 'react';
import './createPostsInput.less'

function CreatePostInput(props) {
  const {value, onChange} = props
  return (
    <input className='create-post-input' value={value} onChange={onChange}/>
  )
}

export default CreatePostInput;