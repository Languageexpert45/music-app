import React  from "react";
import styles from'./Popup.module.scss';
import { useEffect, useState, useRef } from 'react';

const Popup = ({ children, visible, setVisible, position }) => {
  const [rootClasses, setRootClasses] = useState([styles.box, styles.closed]);

  const popupRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!popupRef.current.contains(e.target)) {
        setRootClasses([styles.box, styles.left2, styles.closed]);
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  useEffect(() => {
    if (visible && position === 1) {
      setRootClasses([styles.box, styles.left1]);
    }

    if (visible && position === 2) {
      setRootClasses([styles.box, styles.left2]);
    }

    if (visible && position === 3) {
      setRootClasses([styles.box, styles.left3]);
    }
  }, [position, visible]);

  return (
    <div ref={popupRef} className={rootClasses.join(' ')}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default Popup