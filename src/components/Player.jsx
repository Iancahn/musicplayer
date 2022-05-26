import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Player() {
    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"></input>
                <p>End Time</p>
            </div>
            <div className="play-control"></div>
            <FontAwesomeIcon className="play" icon={faPlay} />
        </div >
    )
}


export default Player;