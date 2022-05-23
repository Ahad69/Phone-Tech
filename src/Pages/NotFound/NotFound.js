import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='notfound-content'>
            <h1 className='text-6xl text-red-600'>404 Not Found</h1>
            <FontAwesomeIcon className="gear" icon={faGear} />
            <p className='text-xl text-red-600'>Phone Tech pages isn't available in this URL</p>
            </div>
        </div>
    );
};

export default NotFound;