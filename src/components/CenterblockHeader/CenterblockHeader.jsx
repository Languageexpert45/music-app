import React from 'react';
import styles from './CenterblockHeader.module.scss'
import { useParams } from "react-router-dom";

const CenterblockHeader = () => {
    
    const {name} = useParams()

    return (
        <h2 className={styles.header}>Название</h2>
    )
}
export default CenterblockHeader