import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';


const Post = () => {
    const [posts, setPosts] = useState([]);
    console.log("🚀 ~ file: Post.js ~ line 6 ~ Post ~ posts", posts)
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPosts(res.data)
        })
    },[1])
    return (
        <div className="container mt-5 ">
            <div className="row">
                {
                    posts.map((post) => (<PostDetails post={post} key={post.id}/>))
                }
            </div>
        </div>
    );
};

export default Post;