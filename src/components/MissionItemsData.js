import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { subscribe } from '../redux/missions/missionsSlice';

const MissionItems = (props) => {
  const [subscribed, setSubscribed] = useState(!props.isSubscribed);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(subscribe(props.item.mission_id));
    setSubscribed((prev) => prev = !prev);
  };

  const style = {
    backgroundColor: subscribed ? 'rgb(65, 65, 236)' : 'rgb(145, 139, 139)',
  };
  const btnStyle = {
    borderColor: subscribed ? 'red' : 'black',
    color: subscribed ? 'red' : 'black',
  };

  return (
    <div className="alternate-clr">
      <div className="mission-headers">
        <div><p>{props.item.mission_name}</p></div>
        <div className="mission-disc"><p>{props.item.description}</p></div>
        <div><p className="active-toggle" style={style}>{subscribed ? 'Active Member' : 'Not a member'}</p></div>
        <div>
          <p>
            <button type="button" className="subscribe-btn" onClick={handleClick} style={btnStyle}>
              {subscribed ? 'Leave Mission' : 'Join Mission'}
            </button>
          </p>
        </div>
      </div>
    </div>

  );
};

export default MissionItems;
