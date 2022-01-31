import React, { Component, useState } from 'react';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body</label>
            <br />
            <textarea
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
