// Footer.js
import React from 'react';
import styles from '../HomeCSS/Fotter.module.css'; // Import the CSS module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <footerhead className={styles.head}>
            <h5>Smart Nest</h5>
            <em><small>"Smart Control, Anytime, Anywhere"</small></em>
            </footerhead>
            <div className={styles.footerContent}>
                <ul className={styles.socials}>
                    <li><a href="#facebook">facebook<i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#twitter">twitter<i className="fab fa-twitter"></i></a></li>
                    <li><a href="#instagram">instagram<i className="fab fa-instagram"></i></a></li>
                    <li><a href="#linkedin">linkedin<i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#Git-Hub">Git-Hub<i className="fab fa-linkedin-in"></i></a></li>
                </ul>
                <p>&copy; 2024 Smart Nest. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
