// src/components/TeamSection.js
import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import teamData from '../data/teamData';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
