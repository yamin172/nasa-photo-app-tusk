import React from 'react';

const SearchImage = () => {
    return (
        <div className="container mt-3">
            <h1 className="text-center">Unsplash Photos</h1>
            <div className="d-flex justify-content-center">
                <input type="search" placeholder="search image"  className="form-control w-50" />
                <button className="btn btn-primary" type="submit"  >Search</button>
            </div>
        </div>
    );
};

export default SearchImage;