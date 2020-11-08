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

        <div className='container-create-post__title'
             style={this.props.errorTitle.isErrorValid ? {} : {marginTop: '5px'}}>
        <div>{'Title'}</div>
          <CreatePostInput value={this.state.valueInput}
                           style={this.props.errorTitle.isErrorValid ? {border: '2px solid #b10101'}
                           : null}
                           onChange={this.onChangeInput}/>
        </div>

        {this.props.errorTitle.isErrorValid &&
        (<div className='container-create-post__title-error'>
          <div>{this.props.errorTitle.errorText}</div>
        </div>)}

        <div className='container-create-post__body'
             style={this.props.errorBody.isErrorValid ? {} : {marginTop: '5px'}}>
          <span>{'Post'}</span>
          <CreatePostsTextarea value={this.state.valueTextarea}
                               style={this.props.errorBody.isErrorValid ? {border: '2px solid #b10101'}
                                 : null}
                               onChange={this.onChangeTextarea}/>
        </div>

        {this.props.errorBody.isErrorValid &&
        (<div className='container-create-post__body-error'>
          <div>{this.props.errorBody.errorText}</div>
        </div>)}

        <div style={{display: 'flex', justifyContent: 'flex-end',}}>
          <CreatePostBtn name={'Add post'} onClick={() => this.props.addPostValue(
            {title: this.state.valueInput, body: this.state.valueTextarea})}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorTitle: state.reducerPost.errorValidTitle,
    errorBody: state.reducerPost.errorValidBody,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPostValue: (value) => dispatch(actionPostServer.addPostValueSaga(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts)