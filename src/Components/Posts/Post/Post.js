import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import PostDetails from '../PostDetails/PostDetails';


const Post = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPosts(res.data)
        })
    },[1])
    return (
        <>
            <Navbar/>
            <div className="container mt-5 ">
                <div className="row m-auto justify-content-center">
                    {
                        posts.map((post) => (<PostDetails post={post} key={post.id}/>))
                    }
                </div>
            </div>
        </>
    );
};

export default Post;