import {React, useParams} from "react";
import Main from '../MusicPage/Main'

const PlayListPage = (props) => {


    return (
        <Main {...props} songs={songs[0].artist} header='Топ 100'/>
    )
    
}

export default PlayListPage