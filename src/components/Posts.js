import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as postActions from '../redux/actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.actions.getPosts();
  }

  render() {
    // console.log('props', this.props);
    const posts = this.props.posts;
    // console.log('posts', this.props.posts);
    const postItems = posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getPosts: bindActionCreators(postActions.getPosts, dispatch),
      // newPost: bindActionCreators(postActions.newPost, dispatch),
    },
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    // post: state.post,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
