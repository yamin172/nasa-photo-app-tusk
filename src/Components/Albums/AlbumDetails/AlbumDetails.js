import React from 'react';

const AlbumDetails = ({ photo:{title,url,thumbnailUrl,albumId}}) => {
    console.log()
    return (
        <div class="card m-3 shadow" style={{width: '18rem'}}>
            <img src={thumbnailUrl} className="card-img-top mt-3" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-capitalize">{title}</h5>
                <a href={url} class="btn btn-primary">View More</a>
            </div>
        </div>
    );
};

export default AlbumDetails;