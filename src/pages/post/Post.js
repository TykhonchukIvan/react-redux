import React from 'react';
import {connect} from 'react-redux'
import {getPostsSaga} from '../../redux/action/actionPostPage';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPostWithServer()
  }

  render() {

    console.log(this.props.posts)

    return (
      <div>Post</div>
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