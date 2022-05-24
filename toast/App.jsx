import React, { useState, useEffect } from 'react'
import Toast from './Toast'

export default function App() {
    const [toast, setToast] = useState(null)
    const [title, setTitle] = useState('')
    const [postId, setPostId] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(resp => resp.json())
            .then(post => {
                setTitle(post.title)
                console.log(postId);
                setToast({ type: 'success', msg: postId })
            })
    }, [postId])

    return (
        <>
            <div>
                <label >post id : </label>
                <input type="number" value={postId} onChange={(e) => setPostId(e.target.value)} />

            </div>
            <div>
                <h1>{title}</h1>

            </div>
          {null===toast?'': <Toast toast={toast.type} msg={toast.msg} />}
        </>
    )
}
