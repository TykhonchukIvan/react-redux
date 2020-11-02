import React from 'react';
import './postBox.less';

function PostBox(props) {
  const {body, title, number, onHandlerIsShowCommentPost, index} = props

  return (
    <>
      <div className='post-box' onClick={() => onHandlerIsShowCommentPost(index)}>
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
    </>
  )
}

export default PostBox;