import React  from "react";
import styles from'./Popup.module.scss';


const Popup = ({children, visible, setVisible, position}) => {
    
    let rootClasses = [styles.box]
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

    const closePopup = () => {
        setVisible(false)
    }

    return (
        <div className={rootClasses.join(' ')} >
            <div className={styles.content}>
                {children}
            </div>
            <p  className={styles.close} onClick={closePopup}>x</p>
        </div>
    )
}
export default Popup