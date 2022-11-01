import React from "react";
import popup from'./Popup.module.css'

const Popup = ({active}) => {
    return (
        <div className={ active ? `${popup.box} ${popup.hidden}` : popup.box} >
            <div className={popup.scroll}>
                <ul className={popup.list}>
                    <li className={popup.listItem}>Lorem, ipsum dolor.</li>
                    <li className={popup.listItem}>Lorem ipsum dolor sit amet.</li>
                    <li className={popup.listItem}>Lorem ipsum dolor sit amet.</li>
                    <li className={popup.listItem}>Lorem ipsum dolor sit amet.</li>
                    <li className={popup.listItem}>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </div>
 
    )
}
export default Popup
// `${active} ? ${popup.box} ${popup.hidden} : ${popup.box}`