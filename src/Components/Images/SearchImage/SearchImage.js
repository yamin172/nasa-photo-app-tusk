import React from 'react';
import axios from "axios";
import { useState } from "react";
const SearchImage = () => {
    const [image, setImage] = useState("");
    const clientId = "gTak4DrQApXHiETqM4HnFC6eq8dHoY-N8OUoMxpZx6U";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
    setImage(event.target.value);
    };
    const handleSubmit = () => {
    console.log(image);
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
    axios.get(url).then((response) => {
    console.log(response);
    setResult(response.data.results);
    });
    };
    return (
        <div className="container mt-3">
            <h1 className="text-center m-4">Photos</h1>
            <div className="d-flex justify-content-center m-5">
            <input onChange={handleChange} type="text" name="image" className="form-control w-50"   placeholder="Search for images"/>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Search</button>
            
            </div>
                <div className="row">
                {
                    result.map((image) => {
                        return <div className="col">
                            <img src={image.urls.thumb} alt="photos" className="rounded mt-5" style={{ height: '300px' }} />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SearchImage;