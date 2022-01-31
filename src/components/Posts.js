import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

class Posts extends Component {
  // constructor(props) {
  //   super(props);

  //   const wtf = this.props.fetchPosts();
  //   console.log('wtf', wtf);
  // }
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);
    const { posts } = this.props.posts;
    console.log('posts', posts);
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
