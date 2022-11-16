import React, { useState, useEffect } from "react";
import Like_Dislike_SVG from './Like_Dislike_SVG';

const LikeButton = (props) => {

    const [fill, setFill] = useState('transparent');
    const [stroke, setStroke] = useState('#ACACAC');
    const [dislike, setDislike] = useState('transparent');
    

    
    return (             
        <Like_Dislike_SVG 
            like={fill} 
            setLike={setFill} 
            hover={stroke} 
            setHover={setStroke} 
            dislike={dislike} 
            setDislike={setDislike}
        />  
    )
}

export default LikeButton