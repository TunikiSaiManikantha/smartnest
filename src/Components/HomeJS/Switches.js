// RoomSwitches.js
import React, { useState } from 'react';
import { FaLightbulb, FaFan, FaTv, FaFire } from 'react-icons/fa';
import { MdAcUnit, MdRouter } from 'react-icons/md';
import ToggleSwitch from '../Toggleswitch/Toggleswitchs';
import styles from "../HomeCSS/Swiches.module.css"; // Corrected import path



const roomDevicesData = [
    {
        name: 'Living Room',
        devices: [
            { type: 'Lamps', id: 'livingRoomLamps', count: 4 },
            { type: 'Fans', id: 'livingRoomFans', count: 2 },
            { type: 'TV', id: 'livingRoomTV', count: 1 },
            { type: 'AC', id: 'livingRoomAC', count: 1 }
        ]
    },
    {
        name: 'Kitchen',
        devices: [
            { type: 'Lamps', id: 'kitchenLamps', count: 3 },
            { type: 'Heater', id: 'kitchenHeater', count: 1 },
            { type: 'Wi-Fi', id: 'kitchenWifi', count: 1 }
        ]
    }
];

const RoomSwitches = () => {
    const initialDeviceState = roomDevicesData.reduce((acc, room) => {
        room.devices.forEach(device => {
            acc[device.id] = { checked: false };
        });
        return acc;
    }, {});

    const [devices, setDevices] = useState(initialDeviceState);
    const [newDeviceType, setNewDeviceType] = useState('');
    const [newDeviceRoom, setNewDeviceRoom] = useState('');

    const handleToggle = (deviceId) => {
        setDevices({
            ...devices,
            [deviceId]: { checked: !devices[deviceId].checked }
        });
    };

    const handleAddNewDevice = () => {
        if (newDeviceType && newDeviceRoom) {
            const newDeviceId = `${newDeviceRoom}${newDeviceType.replace(/\s+/g, '')}`;
            setDevices({
                ...devices,
                [newDeviceId]: { checked: false }
            });
            roomDevicesData.find(room => room.name === newDeviceRoom).devices.push({
                type: newDeviceType,
                id: newDeviceId,
                count: 1
            });
            setNewDeviceType('');
            setNewDeviceRoom('');
        }
    };

    const handleTurnOffAllDevices = () => {
        const updatedDevices = Object.keys(devices).reduce((acc, key) => {
            acc[key] = { checked: false };
            return acc;
        }, {});
        setDevices(updatedDevices);
    };

    return (
<div className={styles.switchesContainer}> {/* Use styles object for class name */}
    <header className={styles.header}>
        <h1>Welcome Nest!</h1>
        <p>Manage your devices across all rooms</p>
    </header>

    {roomDevicesData.map((room, index) => (
        <div key={index} className={styles.roomCard}> {/* Use styles object for class name */}
            <h2>{room.name}</h2>
            <div className={styles.devicesGrid}> {/* Use styles object for class name */}
                {room.devices.map((device, i) => (
                    <div key={i} className={styles.deviceCard}> {/* Use styles object for class name */}
                        <div className={styles.deviceInfo}> {/* Use styles object for class name */}
                            {device.type === 'Lamps' && <FaLightbulb className={styles.deviceIcon} />} {/* Use styles object for class name */}
                            {device.type === 'Fans' && <FaFan className={styles.deviceIcon} />} {/* Use styles object for class name */}
                            {device.type === 'TV' && <FaTv className={styles.deviceIcon} />} {/* Use styles object for class name */}
                            {device.type === 'AC' && <MdAcUnit className={styles.deviceIcon} />} {/* Use styles object for class name */}
                            {device.type === 'Heater' && <FaFire className={styles.deviceIcon} />} {/* Use styles object for class name */}
                            {device.type === 'Wi-Fi' && <MdRouter className={styles.deviceIcon} />} {/* Use styles object for class name */}
                            <span>{device.type}</span>
                        </div>
                        <div className={styles.deviceStatus}> {/* Use styles object for class name */}
                            <span>{device.count} total</span>
                            <ToggleSwitch
                                id={device.id}
                                checked={devices[device.id].checked}
                                onChange={() => handleToggle(device.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ))}

    <div className={styles.controls}> {/* Use styles object for class name */}
        <input
            type="text"
            placeholder="Device Type"
            value={newDeviceType}
            onChange={(e) => setNewDeviceType(e.target.value)}
        />
        <input
            type="text"
            placeholder="Room Name"
            value={newDeviceRoom}
            onChange={(e) => setNewDeviceRoom(e.target.value)}
        />
        <button className={styles.addDevice} onClick={handleAddNewDevice}> {/* Use styles object for class name */}
            Add New Device
        </button>
        <button className={styles.turnOffAll} onClick={handleTurnOffAllDevices}> {/* Use styles object for class name */}
            Turn Off All Devices
        </button>
    </div>
</div>

    );
};

export default RoomSwitches;
