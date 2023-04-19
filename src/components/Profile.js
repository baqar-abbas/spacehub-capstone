import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((store) => store.missions.missionsData);
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  const filteredMissions = missions.filter((mission) => mission.isSubscribed === true);

  return (
    <main>
      <div className="subscribed-missions">
        <h3>My Missions</h3>
        <ul>
          { filteredMissions.map((mission) => <li key={mission.mission_id}>{mission.mission_name}</li>)}
        </ul>
      </div>
      <div className="subcribed-rockets margin">
        <h3>my rockets</h3>
        <ul>
          { filteredRockets.map((rocket) => {
            const rocketId = rocket.id;
            return <li key={rocketId}>{rocket.name}</li>;
          }) }
        </ul>
      </div>
    </main>
  );
};

export default Profile;
