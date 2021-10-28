import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import RandomImage from '../RandomImage/RandomImage';
import SearchImage from '../SearchImage/SearchImage';

const Image = () => {
    return (
        <div>
            <Navbar />
            <SearchImage />
            <RandomImage />
        </div>
    );
};

export default Image;