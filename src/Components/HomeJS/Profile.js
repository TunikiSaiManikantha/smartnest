import React, { useState } from 'react';
import styles from '../HomeCSS/Profile.module.css';
import { FaUserEdit } from 'react-icons/fa';
import Image from "../images/profile.png";
const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'First Name',
    lastName: 'Last  Name',
    email: 'sophie@sample.com',
    bio: 'About you',
    portfolioName: 'Upwork',
    portfolioLink: 'www.sophie.com',
    categories: {
      first: 'Legal',
      second: 'Tech & Internet',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the profile data
    console.log(profile);
  };

  return (
  <>
  <br/>
    <div className={styles.container}>
      <h1 className={styles.title}>My Account</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.profilePicContainer}>
          <img src={Image} alt="Profile" className={styles.profilePic} />
          <FaUserEdit className={styles.editIcon} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={profile.firstName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={profile.lastName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="bio">About</label>
          <textarea id="bio" name="bio" value={profile.bio} onChange={handleChange}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="portfolioName">Portfolio Name</label>
          <input type="text" id="portfolioName" name="portfolioName" value={profile.portfolioName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="portfolioLink">Portfolio Link</label>
          <input type="text" id="portfolioLink" name="portfolioLink" value={profile.portfolioLink} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="categories">1st Category</label>
          <input type="text" id="firstCategory" name="firstCategory" value={profile.categories.first} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="categories">2nd Category</label>
          <input type="text" id="secondCategory" name="secondCategory" value={profile.categories.second} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label>
            <input type="checkbox" />
            I would like to receive notifications
          </label>
        </div>
        <button type="submit" className={styles.saveButton}>Save Changes</button>
      </form>
    </div>
    <br/>
    </>
  );
};

export default Profile;
