import React from "react";
import Main from '../MusicPage/Main'

const PlayListPage = (props) => {



    return (
        <Main {...props} songs={props.top100DanceHits} header='Топ 100'/>
    )
    
}

export default PlayListPage