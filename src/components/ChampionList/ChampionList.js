import React from 'react';

import Champion from './Champion/Champion';


const championList = () => {
  let champList = ["Akali", "Aatrox", "Karthus", "Varus", "Cho'gath"]
  return (
    <div className='championList'>
      <p>na he</p>
      {champList.map((element) =>
        <div  key={element} >
          <Champion name={element}/>
          <p>na mi</p>
        </div>
      )}
    </div>
  )
};

export default championList; 