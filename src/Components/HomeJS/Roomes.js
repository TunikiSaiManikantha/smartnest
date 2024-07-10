import React from 'react';
import styles from '../HomeCSS/Roomes.module.css';
import { FaTemperatureHigh, FaPowerOff, FaShieldAlt } from 'react-icons/fa';

const roomData = [
    {
        name: 'Living Room',
        devices: 4,
        temperature: '24°C',
        status: {
            temperatureInside: true,
            powerOn: true,
            security: true,
            motionRecognition: true,
            locksClosed: true
        }
    },
    {
        name: 'Kitchen',
        devices: 6,
        temperature: '24°C',
        status: {
            temperatureInside: true,
            powerOn: true,
            security: false,
            motionRecognition: false,
            locksClosed: true
        }
    }
];

const Rooms = () => {
    return (
        <div className={styles['rooms-container']}>
            <header className={styles.header}>
                <h1>Rooms</h1>
                <p>Currently you can manage {roomData.length} rooms in your home</p>
            </header>

            {roomData.map((room, index) => (
                <div key={index} className={styles['room-card']}>
                    <h2>{room.name}</h2>
                    <p>{room.devices} devices to manage</p>
                    <div className={styles['room-status']}>
                        <div className={styles['status-item']}>
                            <FaTemperatureHigh className={styles['status-icon']} />
                            <span>Temperature Inside</span>
                            <span>{room.temperature}</span>
                        </div>
                        <div className={styles['status-item']}>
                            <FaPowerOff className={styles['status-icon']} />
                            <span>Power on</span>
                            <span className={room.status.powerOn ? styles.active : styles.inactive}></span>
                        </div>
                        <div className={styles['status-item']}>
                            <FaShieldAlt className={styles['status-icon']} />
                            <span>Security</span>
                            <span className={room.status.security ? styles.active : styles.inactive}></span>
                        </div>
                        <div className="additional-info">
                            <p>{room.status.motionRecognition ? 'Motion recognition is active' : 'Motion recognition is inactive'}</p>
                            <p>{room.status.locksClosed ? 'Locks are closed' : 'Locks are open'}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Rooms;
