import React from 'react';
import styles from './Centerblock.module.css'

const CenterblockHeader = (props) => {
    return (
        <h2 className={styles.header}>{props.header}</h2>
    )
}
export default CenterblockHeader