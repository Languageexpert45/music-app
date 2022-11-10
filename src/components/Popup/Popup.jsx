import React from "react";
import styles from'./Popup.module.css'



const Popup = ({children, visible, setVisible, position}) => {
    const rootClasses = [styles.box]
    if (visible) {
        rootClasses.push(styles.active)
    }

    if (position == '350px') {
        rootClasses.push(styles.box)
    }

    if (position == '550px') {
        rootClasses.push(styles.box1)
    }

     if (position == '750px') {
        rootClasses.push(styles.box2)
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