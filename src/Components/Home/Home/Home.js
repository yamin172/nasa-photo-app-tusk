import React, { useEffect, useState } from 'react';

const apiKey = "j8RPPBEoheiiYsduHPeKKchdYcjy9PSeirWHlmMT";
const Home = () => {
    
    const [nasaPhoto, setNasaPhoto] = useState(null);
    console.log("🚀 ~ file: Home.js ~ line 6 ~ Home ~ nasaPhoto", nasaPhoto)
    
    useEffect(() => {
        fetchPhoto()
        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            console.log(data)
            setNasaPhoto(data)
        }
    }, []);
    if (!nasaPhoto) return <div />;

    return (
        <>
            <div className="container mt-3 justify-content-center">
                {nasaPhoto.media_type === "image" ? (
            <img
            src={nasaPhoto.url}
            alt={nasaPhoto.title}
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
        <div>
            <h1>{nasaPhoto.title}</h1>
            <p className="">{nasaPhoto.date}</p>
            <p className="text-wrap">{nasaPhoto.explanation}</p>
        </div>
        </div>
        </>
    );
};

export default Home;