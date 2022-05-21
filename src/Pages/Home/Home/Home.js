import React from 'react';
import Products from '../../Products/Products';



import './Home.css'

const Home = () => {

    return (
        <div>
            <h1 className='gradient-text'>This is Heading</h1>
            <Products></Products>
        </div>
    );
};

export default Home;