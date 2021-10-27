import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AlbumDetails from '../AlbumDetails/AlbumDetails';

const Album = () => {
    const [photos, setPhotos] = useState();
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                setPhotos(res.data)
        })
    }, [])
    console.log(photos)
    return (
        <div className="container mt-5">
            {
                photos?.map((photos) => (<AlbumDetails photo={photos} key={photos.id}/>))
            }
        </div>
    );
};

export default Album;