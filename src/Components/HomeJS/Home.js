// Home.js

import React from 'react';
import styles from '../HomeCSS/Home.module.css';
import image1 from '../images/image1.jpg';  // Example image paths
import image2 from '../images/image2.png';  // Replace with actual image paths

import Home2 from './Home2';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.title}>Welcome to Smart Nest</h1>
            
            <div className={styles.imageSlider}>
                <img src={image2} alt="Slide 2" className={styles.slide} />
                <img src={image1} alt="Slide 1" className={styles.slide} />
            </div>
            <br />
            <br />
            <Home2 />
            
            <div className={styles.infoSection}>
                <h2>About Smart Nest</h2>
                <p>Smart Nest is an innovative home automation solution that integrates IoT technology to provide seamless control over your home environment. Using ESP32 microcontrollers, sensors, and relays, our system offers a user-friendly interface through React JS and Firebase to monitor and manage your smart devices efficiently.</p>
            </div>
        </div>
    );
};

export default Home;
