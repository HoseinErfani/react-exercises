import React, { Component } from "react";
import Post from "./Post";
import Comments from "./Comments";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };
  }

  async fetchComments() {
    const req = await fetch(
      `http://localhost:8585/comments?post-id=${this.props.post.id}`
    );
    return await req.json();
  }
  setComment(){
    this.fetchComments().then((comments) => {
      console.log(comments);
      this.setState({
        comments: comments,
      });
    });
  }

  componentDidMount() {
    this.setComment()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post.id !== this.props.post.id) {
      this.setComment()
    }
  }

  render() {
    return (
      <>
        <Post data={this.props.post} />
        {null != this.state.comments && (
          <Comments comments={this.state.comments} />
        )}
      </>
    );
  }
}
