/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((store) => store.missions.missionsData);
  const filteredMissions = missions.filter((mission) => mission.isSubscribed === true);

  return (
    <main>
      <div className="subscribed-missions">
        <h3>My Missions</h3>
        <ul>
          { filteredMissions.map((mission) => {
            return <li key={mission.mission_id}>{mission.mission_name}</li>;
          }) }
        </ul>
      </div>
    </main>
  );
}

export default Profile