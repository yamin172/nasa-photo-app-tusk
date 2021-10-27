import React from 'react';

const PostDetails = (props) => {
    const { title, body } = props.post;
    
    return (
            <div class="card w-25 m-3 shadow">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">{title}</h5>
                    <p class="card-text text-capitalize">{body}</p>
                </div>
            </div>
    );
};

export default PostDetails;