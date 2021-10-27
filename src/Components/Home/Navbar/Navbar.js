import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid container">
                    <a className="navbar-brand" as={Link} href="/home">PHOTOS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-auto" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" as={Link} href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" as={Link} href="/image">Image</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" as={Link} href="/post">Post</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " as={Link} href="/album">Album</a>
                        </li>
                    </ul>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;