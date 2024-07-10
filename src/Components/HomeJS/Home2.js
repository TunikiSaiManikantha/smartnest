// HomeSystem.js

import React from 'react';
import styles from '../HomeCSS/Home2.module.css';
// Ensure this import is correct


const Homem2 = ({ insideTemperature, outsideTemperature }) => {
    return (
        <div className={styles.homeSystem}>
            <div className={styles.status}>
                <div className={`${styles.statusItem} ${styles.lights}`}>
                    <h3>LIGHTS</h3>
                    <span className={styles.span}> 4 lamps</span>
                    <span className={styles.span}> 1 in use</span>
                </div>
                <div className={`${styles.statusItem} ${styles.brightness}`}>
                    <h3>BRIGHTNESS</h3>
                    <span className={styles.span}> 50%</span>
                </div>
                <div className={`${styles.statusItemt} ${styles.temperature}`}>
                    <h6>TEMPERATURE</h6>
                    <div>
                        <span className={styles.spant}> Inside the Room </span>
                        <span className={styles.spant}> {insideTemperature !== null ? `${insideTemperature}°C` : 'No data loading...'} </span>
                    </div>
                    <div>
                        <span className={styles.spant}> Outside the Room </span>
                        <span className={styles.spant}> {outsideTemperature !== null ? `${outsideTemperature}°C` : 'Loading...'} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homem2;

