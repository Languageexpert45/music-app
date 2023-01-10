import React from 'react';
import styles from './CenterblockHeader.module.scss'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const CenterblockHeader = () => {
    
    const {id} = useParams()
    const [title, setTitle] = useState('')

     useEffect(() => {
       if (id === '1') {
         setTitle('Классическая музыка');
       }
       if (id === '2') {
         setTitle('Электронная музыка');
       }
       if (id === '3') {
         setTitle('Рок музыка');
       }
       if (id === '4') {
         setTitle('Избранное');
       }
       if (id === undefined) {
         setTitle('Все Трэки');
       }
     }, [id]);

    return (
        <h2 className={styles.header}>{title}</h2>
    )
}
export default CenterblockHeader