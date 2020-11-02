import React from 'react';
import {connect} from 'react-redux'
import {getPostsSaga, getPostsUserIdSaga, onHandlerIsShowComment} from '../../redux/action/actionPostPage';
import PostBox from '../../components/postBox/PostBox.jsx';
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

    let postsMap = null
    if (posts.length > 0) {
      postsMap = posts.map((post, index) => {
        return (
          <div key={index}>
            <PostBox index={index}
                     title={post.title}
                     body={post.body}
                     number={1 + index}
                     id={posts.id}
                     userId={posts.userId}
                     isShowComment={isShowComment}
                     onHandlerIsShowCommentPost={this.props.onHandlerIsShowCommentPost}/>
            {index === this.props.indexMap ? <CommentBox/> : null}
          </div>
        )
      })
    }

    console.log(this.props.isLoading)

    return (
      <div className='post-wrapper'>
        <div className='post-wrapper__server-posts'>
          <ChangeBtn onClick={() => this.props.getPostsUserIdWithServer()} name={'Change post'}/>
          {postsMap}
          {this.props.isLoading ?
            <div style={{width:'380px', height:'300px'}}>
              <Loading/>
            </div> : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.reducerPost.postsServer,
    indexMap: state.reducerPost.indexMap,
    isLoading: state.reducerPost.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostWithServer: () => dispatch(getPostsSaga()),
    getPostsUserIdWithServer: () => dispatch(getPostsUserIdSaga()),
    onHandlerIsShowCommentPost: (index) => dispatch(onHandlerIsShowComment(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);