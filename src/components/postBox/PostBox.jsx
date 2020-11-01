import React from 'react';
import './postBox.less';

function PostBox(props) {
  const {body, title, number} = props
  return (
    <div className='post-box'>
      <div className='post-box__number'>
        №: {number}
      </div>
      <div className='post-box__body'>
        <div>
          <span>Title:</span>
          {' ' + title}</div>
        <div>
          <span>Post:</span>
          {' ' + body}</div>
      </div>
    </div>
  )
}
export default PostBox;