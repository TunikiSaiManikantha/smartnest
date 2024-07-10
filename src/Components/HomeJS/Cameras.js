// camerasystem.js

import React from 'react';
import styles from '../HomeCSS/Cameras.module.css';

const Camera = () => {
    const cameraData = [
        { id: 1, section: '1st floor', status: 'Closed', imgSrc: 'path_to_image1' },
        { id: 2, section: '2nd floor (courtyard)', status: 'Opened', imgSrc: 'path_to_image2' },
        { id: 3, section: '3rd floor (courtyard)', status: 'Opened', imgSrc: 'path_to_image3' },
        { id: 4, section: '4th floor (courtyard)', status: 'Opened', imgSrc: 'path_to_image4' },
    ];

    return (
        <div className={styles.cameraSystem}>
            <header className={styles.headerc}>
                <h1>Camera Security System</h1>
                <nav>
                    <button className={styles.navButton}>Sensors</button>
                    <button className={styles.navButton}>Cameras</button>
                </nav>
            </header>
            <br/>
            <div className={styles.cameraList}>
                {cameraData.map(camera => (
                    <div key={camera.id} className={`${styles.cameraCard} ${styles[camera.status.toLowerCase()]}`}>
                        <img src={camera.imgSrc} alt={`Camera view from ${camera.section}`} className={styles.cameraImage} />
                        <div className={styles.cameraInfo}>
                            <p>Section: {camera.section}</p>
                            <p>Status: {camera.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Camera;
