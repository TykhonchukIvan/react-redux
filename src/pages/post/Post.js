import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {
  getPostsSaga,
  getPostsUserIdSaga,
  onHandlerIsShowComment,
  onHideComment} from '../../redux/action/actionPostPage';
import PostBox from '../../components/postBox/PostBox.jsx';
import ShowBtn from '../../components/showBtn/ShowBtn.jsx';
import ChangeBtn from '../../components/changeBtn/ChangeBtn.jsx';
import CommentBox from '../../components/commentBox/ComentBox.jsx';
import Loading from '../../components/loading/Loading.jsx';

import './post.less'

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPostWithServer()
  }

  render() {

    const {posts, isShowComment} = this.props

    const isCheckShowComment = (a, b) => {

      if(a === true && b === true) {
        return true
      } else {
        return false
      }
    }

    let postsMap = null
    if (posts.length > 0) {
      postsMap = posts.map((post, index) => {
        return (
          <div key={index}>
            <PostBox title={post.title}
                     body={post.body}
                     number={1 + index}
                     id={posts.id}
                     userId={posts.userId}
                     isShowComment={isShowComment}>
              <div className='container__post-btnShow'>
                <ShowBtn name={'Show comment'} onClick={() => {
                  if (this.props.isShowComments === true) {
                    this.props.hideComment()
                  } else {
                    this.props.onHandlerIsShowCommentPost(index)
                  }
                }}>
                  {isCheckShowComment(index === this.props.indexMap,this.props.isShowComments) ?
                    <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </ShowBtn>
              </div>
            </PostBox>
            {isCheckShowComment(index === this.props.indexMap,this.props.isShowComments) ?
              <CommentBox/> : null}
          </div>
        )
      })
    }

    return (
      <div className='post-wrapper'>
        <div className='post-wrapper__server-posts'>
          <ChangeBtn onClick={() => this.props.getPostsUserIdWithServer()} name={'Change post'}/>
          {postsMap}
          {this.props.isLoading ?
            <div style={{width: '380px', height: '300px'}}>
              <Loading/>
            </div> : null}
        </div>
      </div>
    )
  }
}

Post.propTypes = {}

function mapStateToProps(state) {
  return {
    posts: state.reducerPost.postsServer,
    indexMap: state.reducerPost.indexMap,
    isLoading: state.reducerPost.isLoading,
    isShowComments: state.reducerPost.isShowComments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideComment: () =>dispatch(onHideComment()),
    getPostWithServer: () => dispatch(getPostsSaga()),
    getPostsUserIdWithServer: () => dispatch(getPostsUserIdSaga()),
    onHandlerIsShowCommentPost: (index) => dispatch(onHandlerIsShowComment(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);