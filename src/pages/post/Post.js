import React from 'react';
import {connect} from 'react-redux'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {actionPostServer} from '../../redux/action/actionPostPage';
import PostBox from '../../components/components_post/postBox/PostBox.jsx';
import ShowBtn from '../../components/components_post/showBtn/ShowBtn.jsx';
import ChangeBtn from '../../components/components_post/changeBtn/ChangeBtn.jsx';
import CommentBox from '../../components/components_post/commentBox/CommentBox.jsx';
import CreatePosts from '../../components/components_post/createPosts/CreatePosts.jsx';
import Loading from '../../components/components_post/loading/Loading.jsx';

import './post.less'

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPostWithServer()
  }

  render() {

    const {postsServer, isShowComment, createdPosts} = this.props

    const isCheckShowComment = (a, b) => {
      if (a === true && b === true) {
        return true
      } else {
        return false
      }
    }

    let postsServerMap = null
    if (postsServer.length > 0) {
      postsServerMap = postsServer.map((post, index) => {
        return (
          <div key={index}>
            <PostBox title={post.title}
                     body={post.body}
                     number={1 + index}
                     isShowComment={isShowComment}>
              <div className='container__post-btnShow'>
                <ShowBtn name={'Show comment'} onClick={() => {
                  this.props.onHandlerIsShowCommentPost(index)
                  if (index === this.props.indexMap && this.props.isShowComments) {
                    this.props.hideComment()
                  }
                }}>
                  {isCheckShowComment(index === this.props.indexMap, this.props.isShowComments) ?
                    <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                </ShowBtn>
              </div>
            </PostBox>
            {isCheckShowComment(index === this.props.indexMap, this.props.isShowComments) ?
              <CommentBox userId={post.userId} postId={post.id}/> : null}
          </div>
        )
      })
    }

    let postsCreated = null
    if (createdPosts.length > 0) {
      postsCreated = createdPosts.map((post, index) => {
        return (
          <div key={index}>
            <PostBox title={post.title}
                     body={post.body}
                     number={1 + index}/>
          </div>
        )
      })
    }

    return (
      <div className='post-wrapper'>
        <div className='post-wrapper__server-posts'>
          <ChangeBtn onClick={() => this.props.getPostsUserIdWithServer()} name={'Change post'}/>
          {postsServerMap}
          {this.props.isLoading ?
            <div style={{width: '380px', height: '300px'}}>
              <Loading/>
            </div> : null}
        </div>
        <div className='post-wrapper__create-posts'>
          <div className='post-wrapper__create-posts-title'>{'Create posts'}</div>
          <CreatePosts/>
          {postsCreated}
        </div>
      </div>
    )
  }
}

Post.propTypes = {}

function mapStateToProps(state) {
  return {
    createdPosts: state.reducerPost.createdPosts,
    postsServer: state.reducerPost.postsServer,
    indexMap: state.reducerPost.indexMap,
    isLoading: state.reducerPost.isLoadingPosts,
    isShowComments: state.reducerPost.isShowComments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideComment: () => dispatch(actionPostServer.onHideComment()),
    getPostWithServer: () => dispatch(actionPostServer.getPostsSaga()),
    getPostsUserIdWithServer: () => dispatch(actionPostServer.getPostsUserIdSaga()),
    onHandlerIsShowCommentPost: (index) => dispatch(actionPostServer.onHandlerIsShowComment(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);