import React from "react";
import styles from'./Popup.module.css'

const Popup = ({active, props}) => {
    return (
        <div className={ active ? `${styles.box} ${styles.hidden}` : `${styles.box} ${styles.box.left}=${props.position}`}>
            <div className={styles.scroll}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Lorem, ipsum dolor.</li>
                    <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
                    <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
                    <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
                    <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
 
    )
}
export default Popup