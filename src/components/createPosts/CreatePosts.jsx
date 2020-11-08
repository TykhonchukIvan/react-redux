import React from 'react';
import {connect} from 'react-redux';
import CreatePostInput from './createPostsInput/createPostsInput.jsx';
import CreatePostsTextarea from './createPostsTextarea/createPostsTextarea.jsx';
import CreatePostBtn from './crearePostBtn/CreatePostBtn.jsx';
import {actionPostServer} from '../../redux/action/actionPostPage';

import './createPosts.less';


class CreatePosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: '',
      valueTextarea: '',
    }
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onChangeTextarea = this.onChangeTextarea.bind(this)
  }

  onChangeInput(event) {
    this.setState({
      valueInput: event.target.value
    })
  }

  onChangeTextarea(event) {
    this.setState({
      valueTextarea: event.target.value
    })
  }


  render() {
    return (
      <div className='container-create-post'>
        <div className='container-create-post__title'>
          <div>{'Title'}</div>
          <CreatePostInput value={this.state.valueInput} onChange={this.onChangeInput}/>
        </div>
        <div className='container-create-post__body'>
          <span>{'Post'}</span>
          <CreatePostsTextarea value={this.state.valueTextarea} onChange={this.onChangeTextarea}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <CreatePostBtn name={'Add post'} onClick={() => this.props.addPostValue(
            {title: this.state.valueInput, body: this.state.valueTextarea})}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addPostValue: (value) => dispatch(actionPostServer.addPostValueSaga(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts)