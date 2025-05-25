// src/components/TeamMemberCard.js
import React from 'react';

const TeamMemberCard = ({ name, role, image, bio }) => {
  return (
    <div className="team-member-card">
      <img src={image} alt={name} className="team-member-image" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default TeamMemberCard;
