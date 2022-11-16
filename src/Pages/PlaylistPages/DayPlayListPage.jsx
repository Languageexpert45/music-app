import React from "react";
import Main from '../MusicPage/Main'

const DayPlayListPage = (props) => {

    return (
        <Main {...props} songs={props.dayPlaylist}/>
    )
    
}

export default DayPlayListPage