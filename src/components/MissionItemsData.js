/* eslint-disable */

import React from "react";

export const MissionItems = (props) => {
    
    const handleClick = () => {

    }

    return (
        <div className="mission-headers">
            <div><p>{props.item.mission_name}</p></div>
            <div className="mission-disc"><p >{props.item.description}</p></div>
            <div><p>Active Members</p></div>
            <div><p><button>Join Mission</button></p></div>
        </div>
    )
}
