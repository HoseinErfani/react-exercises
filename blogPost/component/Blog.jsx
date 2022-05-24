import React, { Component } from "react";

import SideBar from "./SideBar";
import Content from "./Content";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      currentPost: null,
    };
    this.changeCurrentPost=this.changeCurrentPost.bind(this);
  }
  async getPosts() {
    const posts = await fetch("http://localhost:8585/posts");

    return await posts.json();
  }
  componentDidMount() {
    this.getPosts().then((posts) =>
      this.setState({
        posts: posts,
        currentPost: 0,
      })
    );
  }

  changeCurrentPost(index){
    this.setState({currentPost:index})
    // console.log(index);
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-2">
          <SideBar posts={this.state.posts} changeCurrentPost={this.changeCurrentPost} />
        </div>

        <div className="col-12 col-md-10 bg-white rounded-3">
         {null!=this.state.currentPost && 
         <Content post={this.state.posts[this.state.currentPost]}/>}
               </div>
      </div>
    );
  }
}
