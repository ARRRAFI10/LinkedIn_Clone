import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Avatar, Button } from '@mui/material';
import React from 'react';
import './Rightside.css';
import Rahimspic from './rahim.jpeg';
import Markpic from './Mark.webp'

const RightPanel = () => {
  // Dummy data for "People You May Know"
  const peopleYouMayKnow = [
    {
      id: 1,
      name: 'Musfiqur Rahim',
      mutualConnections: 20,
      profileImage: Rahimspic,
    },
    {
        id: 2,
        name: 'Tamim Iqbal',
        mutualConnections: 31,
        profileImage: Markpic,
    }
   
  ];

  return (
    <div className="rightPanel">
      <div className="rightPanel__section">
        <h4>People You May Know</h4>
        {peopleYouMayKnow.map((person) => (
          <div className="rightPanel__person" key={person.id}>
            <Avatar className='image' src={person.profileImage} alt={person.name} />
            <div className="rightPanel__personInfo">
              <p>{person.name}</p>
              <p>{person.mutualConnections} mutual connections</p>
            </div>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PersonAddIcon style={{ fontSize: 15 }} />} 
            >
              Follow
            </Button>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default RightPanel;
