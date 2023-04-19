/* eslint-disable */

import React from "react";
import { useDispatch } from "react-redux";
import subscribe from '../redux/missions/missionsSlice'

export const MissionItems = (props) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(subscribe);
    }

    return (
        <div className="mission-headers">
            <div><p>{props.item.mission_name}</p></div>
            <div className="mission-disc"><p >{props.item.description}</p></div>
            <div><p>Active Members</p></div>
            <div><p><button onClick={handleClick}>Join Mission</button></p></div>
        </div>
    )
}
