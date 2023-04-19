/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MissionItemHead } from './missionItemsHead';
import { MissionItems } from './MissionItemsData';
import { fetchMission } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission())
  }, [dispatch]);

  const data = useSelector((store) => store.missions.missionsData);
  const isLoading = useSelector((store) => store.missions.isLoading)
  const error = useSelector((store) => store.missions.error)
  
  if (isLoading) {
    return 'loading...'
  };
  if (error) {
    return error
  };

  return (
    <div >
      <MissionItemHead />
      <ul>
        {data.map((item) => 
            <MissionItems key={item.mission_id} item={item} />
        )}
      </ul>
    </div>
    
  );
}

export default Missions;