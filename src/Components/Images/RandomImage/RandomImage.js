import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DetailsImage from '../DetailsImage/DetailsImage';


const RandomImage = () => {
    const [images, setImages] = useState([]);
    const apiKey = '4hbnuIjqvl5guWRL5DVyMckDn6hjEwD1o0wkoSK0ebo'
    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
            .then((res) => {
            setImages([...images, ...res.data])
        })
    })
    
    return (
        <div className="container mt-5">
            <DetailsImage images={images}/>
        </div>
    );
};

export default RandomImage;