import React from 'react';
import {AiOutlineUser} from "react-icons/ai";
import './Comment.less'

function Comment(props) {
  const {name, email, body} = props
  return (
    <div className='comment-box'>
      <div className='comment-box__container'>
        <div className='comment-box__container--header'>
          <div className='comment-box__container--header-icon'>
            <AiOutlineUser/>
          </div>
          <div className='comment-box__container--header-title'>
            <div>
            <span>
              Name:
            </span>{' ' + name}</div>
            <div>
            <span>
              Email:
            </span>{' ' + email}</div>
          </div>
        </div>
        <div className='comment-box__container--body'>
          <span>Comment:</span>
          {' ' + body}
        </div>
      </div>
    </div>
  )
}

export default Comment;