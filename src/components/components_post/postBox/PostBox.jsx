import React from 'react';
import './postBox.less';

function PostBox(props) {
  const {body, title, number, children} = props

  return (
    <div className='container'>
      <div className='container__post-box'>
        <div className='container__post-box--number'>
          №: {number}
        </div>
        <div className='container__post-box--body'>
          <div>
            <span>Title:</span>
            {' ' + title}</div>
          <div>
            <span>Post:</span>
            {' ' + body}</div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default PostBox;