import React from 'react';
import Player from './PlayerUI/PlayerControl/Player';
import { useState, useEffect } from 'react';

const Bar = ({tracks}) => {

    return <Player tracks={tracks} />;
}
export default Bar