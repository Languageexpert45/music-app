import React  from "react";
import styles from'./Popup.module.scss';
import { useEffect, useState } from 'react';

const Popup = ({ children, visible, setVisible, position, setPosition }) => {
  const [rootClasses, setRootClasses] = useState([styles.box, styles.closed]);

  useEffect(() => {
    if (visible) {
      setRootClasses([styles.box, styles.active]);
    }
  }, [visible]);

  useEffect(() => {
    if (position === 1) {
      setRootClasses([styles.box, styles.active, styles.left1]);
    }

    if (position === 2) {
      setRootClasses([styles.box, styles.active, styles.left2]);
    }

    if (position === 3) {
      setRootClasses([styles.box, styles.active, styles.left3]);
    }
  }, [position]);

  const closePopup = () => {
    setRootClasses([styles.box, styles.left2, styles.closed]);
  };

  return (
    <div className={rootClasses.join(' ')}>
      <div className={styles.content}>{children}</div>
      <p className={styles.close} onClick={closePopup}>
        x
      </p>
    </div>
  );
};
export default Popup