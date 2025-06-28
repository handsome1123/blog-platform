// src/components/TeamSection.js
const TeamSection = () => {
  return (
    <section class="team-section">
            <div class="container">
                <h2 class="section-title" data-lang="meet-team">Meet Our Team</h2>
                <div class="team-grid">
                    {/* Team members will be added once photos and bios are provided */}
                    <div class="team-member">
                        <div class="member-photo">
                            <img src="assets/images/placeholder-team-1.jpg" alt="Team Member" />
                        </div>
                        <h3>Aung Kyaw</h3>
                        <p class="member-role">Founder & Host</p>
                        <p class="member-bio">Cultural historian with a passion for connecting Myanmar's past with its present diaspora experiences.</p>
                    </div>
                    
                    <div class="team-member">
                        <div class="member-photo">
                            <img src="assets/images/placeholder-team-2.jpg" alt="Team Member" />
                        </div>
                        <h3>Nilar Win</h3>
                        <p class="member-role">Content Creator</p>
                        <p class="member-bio">Culinary expert specializing in traditional Myanmar recipes with a modern twist.</p>
                    </div>
                    
                    <div class="team-member">
                        <div class="member-photo">
                            <img src="assets/images/placeholder-team-3.jpg" alt="Team Member" />
                        </div>
                        <h3>Min Thu</h3>
                        <p class="member-role">Videographer</p>
                        <p class="member-bio">Visual storyteller capturing the beauty of cultural experiences through a cinematic lens.</p>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default TeamSection;
