import React from 'react'

export default function Comment(props) {
    return (
        <div className="comment alert alert-light">
              <h4>{props.comment.body}</h4>
        </div>
    )
}
