import React from 'react';
import './createPostsTextarea.less';

function CreatePostsTextarea(props) {
  const {value, onChange} = props
  return (
    <textarea className='create-post-textarea' value={value} onChange={onChange}/>
  )
}

export default CreatePostsTextarea;