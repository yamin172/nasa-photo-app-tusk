import React from 'react';

const AlbumDetails = (props) => {
    const { title } = props.photos;
    
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default AlbumDetails;