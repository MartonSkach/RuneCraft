import React from 'react';

import Champion from './Champion/Champion';
import '../../styles/ChampionList.css';

const championList = () => {
  let champList = ["Akali", "Aurelion Sol", "Cho'gath", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus", "Karthus",]
  return (
    <div className='championList'>
      {champList.map((element) =>
        <div key={element} >
          <Champion name={element}/>
        </div>
      )}
    </div>
  )
};

export default championList; 