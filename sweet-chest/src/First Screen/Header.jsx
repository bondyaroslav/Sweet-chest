import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                Sweet Chest
            </div>
            <div className={styles.contacts}>
                <div className="address">
                    address
                </div>
                <div className="telephone">
                    <div className="number">0 (050) 000-00-00</div>
                    <div className="work-plan">Daily from 9:00 to 20:00</div>
                </div>
            </div>
        </div>
    );
};

export default Header;