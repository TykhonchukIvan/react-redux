import React from 'react';
import {connect} from 'react-redux'
import {actionPostServer} from '../../../redux/action/actionPostPage';
import Loading from '../loading/Loading.jsx';
import Comment from './Comment/Comment.jsx';

import './CommentBox.less';

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCommentsWithServer(this.props.postId)
  }

  render() {

    let comments = null
    if (this.props.commentsServer.length > 0) {
      comments = this.props.commentsServer.map((comment, index) => {
        return (
          <Comment key={index} name={comment.name} email={comment.email} body={comment.body}/>
        )
      })
    }

    return (
      <>
        {this.props.isLoading ?
          <div className={'comment-loader'}>
            <Loading/>
          </div> : null}
        {comments}
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.reducerPost.isLoadingComments,
    commentsServer: state.reducerPost.commentsServer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCommentsWithServer: (value) => dispatch(actionPostServer.getCommentsSaga(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);