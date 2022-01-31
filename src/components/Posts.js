import React, { Component, useState } from 'react';

class Posts extends Component {
  // const [posts, setPosts] = useState([]);

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    let stateCopy = { ...this.state };

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        stateCopy.posts = data;
        this.setState(stateCopy);
        console.log(data);
        console.log(this.state);
      });
  }

  render() {
    const { posts } = this.state;
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

export default Posts;
