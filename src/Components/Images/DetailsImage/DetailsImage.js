import React from 'react';

const DetailsImage = ({images}) => {

    return (
        <div className="row">
            {
                images.map((image => {
                    return <div className="col" key={images.id}>
                        <img src={image.urls.regular} alt="photos" className="mt-4 rounded-3" style={{ height: '300px' }}/>
                    </div>
                }))
            }
        </div>
    );
};

export default DetailsImage;