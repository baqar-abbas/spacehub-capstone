/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { MissionItemHead } from './missionItemsHead';
import { MissionItems } from './MissionItemsData';

function Missions() {
  const data = useSelector((store) => store.missions.missionsData);
  
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