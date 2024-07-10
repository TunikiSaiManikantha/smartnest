import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { signOut } from 'firebase/auth';
import styles from '../HomeCSS/Navbar.module.css'; // Import the CSS Module
import image from "../images/imagelog.png";
import imageprofile from "../images/profile.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signinup'); // Redirect to sign-in page after signing out
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={image} alt="Logo" /> {/* Replace with your logo path */}
      </div>
      <ul className={styles.navbarLinks}>
        <li><Link to="/home" className={styles.navLink}>Home</Link></li>
        <li><Link to="/switches" className={styles.navLink}>Switches</Link></li>
        <li><Link to="/led" className={styles.navLink}>Led Strip</Link></li>
        <li className={styles.navDropdown}>
          <button className={styles.dropdownToggle}>Devices</button>
          <div className={styles.dropdownMenu}>
          <Link to="/rooms" className={styles.dropdownItem}>Rooms</Link>
            <Link to="/temperature" className={styles.dropdownItem}>Temperatures</Link>
            <Link to="/camera" className={styles.dropdownItem}>Cameras</Link>
            <Link to="/power" className={styles.dropdownItem}>Power</Link>
          </div>
        </li>
      </ul>
      <div className={styles.profileAndSignIn}>
        <Link to="/profile" className={styles.profileButton}>
          <img src={imageprofile} alt="Profile" /> {/* Replace with your profile image path */}
        </Link>
        <button onClick={handleSignOut} className={styles.navbarSignin}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;

