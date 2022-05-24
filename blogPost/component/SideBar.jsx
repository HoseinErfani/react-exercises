import React from "react";
import Link from "./Link";

export default function SideBar(props) {
  const links=props.posts?props.posts.map((post,index)=>{
    return <Link 
     title={post.title} 
     index={index} 
     handleClick={props.changeCurrentPost}
    />
  }):null;
  return (
    <aside>
      <ul>
        {links}
      </ul>
    </aside>
  );
}
