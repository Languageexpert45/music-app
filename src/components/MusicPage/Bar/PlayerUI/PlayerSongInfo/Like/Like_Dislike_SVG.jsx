import React, { useState, useEffect } from "react";

const Like_Dislike_SVG = ({like, setLike, hover, setHover, dislike, setDislike}) => {

    const [count, setCount] = useState(0);

    const LikeDislikeSwitcher = () =>{
        setCount(count +1)
        if (count === 0) {
            setLike('#696969')
            setDislike('transparent')
        }
        if (count === 1) {
            setDislike('white')
            setLike('transparent')
        }
        if (count >= 1) {
            setCount(0)
        }
    }

    const setToBright = () => {
        setHover('white')
    }

    const setToDim = () => {
        setHover('#ACACAC')
    }
    
    return (             
        <svg style={{cursor: 'pointer'}} onMouseEnter={setToBright} onMouseLeave={setToDim} onClick={LikeDislikeSwitcher} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill={like}/>
        <path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke={hover}/>
        <path d='M1.00049 0.703125L15.0005 13.2031' stroke={dislike}/>
        </svg>    
    )
}

export default Like_Dislike_SVG