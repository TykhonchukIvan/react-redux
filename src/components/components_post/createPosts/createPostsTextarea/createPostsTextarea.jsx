import React from 'react';
import './createPostsTextarea.less';

function CreatePostsTextarea(props) {
  const {value, onChange, style} = props
  return (
    <textarea className='create-post-textarea'
              value={value}
              onChange={onChange}
              style={style}/>
  )
}

export default CreatePostsTextarea;