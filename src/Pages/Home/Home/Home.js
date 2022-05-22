import React from 'react';
import Banner from '../Banner/Banner';
import BusinessCard from '../BusinessCard/BusinessCard';
import HomeCards from '../HomeCards/HomeCards';
import Logos from '../Logos/Logos';
import Manufacturers from '../Manufacturers/Manufacturers';
import Reviews from '../Reviews/Reviews';

import './Home.css'

const Home = () => {

    return (
        <div>
        
            <Banner></Banner>
            <HomeCards></HomeCards>
            <BusinessCard></BusinessCard>
            <Logos></Logos>
            <Manufacturers></Manufacturers>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;