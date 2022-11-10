import { useEffect, useState } from "react";
import styles from'./Popup.module.css'


const Popup = ({children, visible, setVisible, position}) => {

    const rootClasses = [styles.box]
    if (visible) {
        rootClasses.push(styles.active)
    }

    if (position == '1') {
        rootClasses.push(styles.left1)
    }

    if (position == '2') {
        rootClasses.push(styles.left2)
    }

     if (position == '3') {
        rootClasses.push(styles.left3)
    }

    return (
        <div className={rootClasses.join(' ')} >
            <div className={styles.content}>
                {children}
            </div>
            <p className={styles.close} onClick={() => setVisible(false)} >x</p>
        </div>
    )
}
export default Popup