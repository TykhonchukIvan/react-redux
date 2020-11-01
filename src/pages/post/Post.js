import React from 'react';
import {connect} from 'react-redux'
import {getPostsSaga} from '../../redux/action/actionPostPage';
import PostBox from '../../components/postBox/PostBox.jsx';
import './post.less'

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPostWithServer()
  }

  render() {

    const {posts} = this.props

    let postsMap = null
    if (posts.length > 0) {
      postsMap = posts.map((post, index) => {
        return (
          <PostBox key={index} title={post.title} body={post.title} number={1+index}/>
        )
      })
    }

    return (
      <div className='post-wrapper'>
        <div className='post-wrapper__server-posts'>
          {postsMap}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.reducerPost.postsServer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostWithServer: () => dispatch(getPostsSaga()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)