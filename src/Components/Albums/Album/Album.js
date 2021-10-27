import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AlbumDetails from '../AlbumDetails/AlbumDetails';

const Album = () => {
    const [photos, setPhotos] = useState();
    console.log("🚀 ~ file: Album.js ~ line 7 ~ Album ~ photos", photos)
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
            setPhotos(res.data)
        })
    },[])
    return (
        <div className="container mt-5">
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default Album;