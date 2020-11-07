import React from 'react';
import {connect} from 'react-redux';
import CreatePostInput from './createPostsInput/createPostsInput.jsx';
import CreatePostsTextarea from './createPostsTextarea/createPostsTextarea.jsx';
import CreatePostBtn from './crearePostBtn/CreatePostBtn.jsx';

import './createPosts.less';

class CreatePosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-create-post'>
        <div className='container-create-post__title'>
          <div>{'Title'}</div>
          <CreatePostInput/>
        </div>
        <div className='container-create-post__body'>
          <span>{'Post'}</span>
          <CreatePostsTextarea/>
        </div>
        <div style={{display:'flex',justifyContent: 'flex-end'}}>
          <CreatePostBtn name={'Add post'}/>
        </div>
      </div>
    )
  }

}

export default connect(null, null)(CreatePosts)