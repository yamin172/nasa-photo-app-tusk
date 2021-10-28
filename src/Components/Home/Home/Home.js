import React, { useEffect, useState } from 'react';

const apiKey = "j8RPPBEoheiiYsduHPeKKchdYcjy9PSeirWHlmMT";
const Home = () => {
    
    const [nasaPhoto, setNasaPhoto] = useState(null);
    
    useEffect(() => {
        fetchPhoto()
        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setNasaPhoto(data)
        }
    }, []);
    if (!nasaPhoto) return <div />;

    return (
        <>
            <div className="container mt-3 card shadow justify-content-center">
                {nasaPhoto.media_type === "image" ? (
            <img
            style={{ height: '600px', width: '100%'}}
            src={nasaPhoto.url}
            alt={nasaPhoto.title}
            className="rounded mt-3"
            />
            ) : (
            <iframe
            title="space-video"
            src={nasaPhoto.url}
            frameBorder="0"
            gesture="media"
            width="100%"
            height="570"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
            />
        )}
        <div className="card-body">
            <h1>{nasaPhoto.title}</h1>
            <p className="card-title">{nasaPhoto.date}</p>
            <p className="card-text">{nasaPhoto.explanation}</p>
        </div>
        </div>
        </>
    );
};

export default Home;