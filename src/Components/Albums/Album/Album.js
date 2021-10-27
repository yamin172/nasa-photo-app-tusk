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
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {
                    photos?.map((photos) => (<AlbumDetails photo={photos} key={photos.id}/>))
                }
            </div>
        </div>
    );
};

export default Album;