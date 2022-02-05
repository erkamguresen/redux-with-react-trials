import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../redux/actions/postActions';

function PostForm({ ...props }) {
  console.log('props', props);

  // function handleChange(event) {
  //   event.preventDefault();
  //   console.log('props.state', props.state);

  //   const { name, value } = event.target;

  //   console.log('target', name, value);

  //   console.log('state', props.state);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log('title', event.target[0].value);
    console.log('body', event.target[1].value);

    props.actions.newPost({
      title: event.target[0].value,
      body: event.target[1].value,
    });

    //since the fetch returns back same values
    // does not actually add the post to the database
    props.actions.addNewPost(
      {
        title: event.target[0].value,
        body: event.target[1].value,
        id: 101,
      },
      props.state.posts
    );
  }

  return (
    <div>
      <h1>Post Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <br />
          <input
            type='text'
            name='title'
            // value={props.title}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label>Body</label>
          <br />
          <textarea
            name='body'
            // value={props.body}
            // onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      newPost: bindActionCreators(postActions.newPost, dispatch),
      addNewPost: bindActionCreators(postActions.addNewPost, dispatch),
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  console.log('state', state, ownProps);
  const { newPost, posts } = state;

  return { state: { newPost, posts } };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
