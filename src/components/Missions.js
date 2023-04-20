import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItemHead from './missionItemsHead';
import MissionItems from './MissionItemsData';
import { fetchMission } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  const data = useSelector((store) => store.missions.missionsData);
  const isLoading = useSelector((store) => store.missions.isLoading);
  const error = useSelector((store) => store.missions.error);
  const isSubscribed = useSelector((store) => store.missions.isSubscribed);

  if (isLoading) {
    return 'loading...';
  }
  if (error) {
    return error;
  }

  return (
    <div className="missions-container">
      <MissionItemHead />
      <ul>
        {data.map((item) => <MissionItems key={item.mission_id} item={item} isSubscribed={isSubscribed} />)}
      </ul>
    </div>

  );
}

export default Missions;
