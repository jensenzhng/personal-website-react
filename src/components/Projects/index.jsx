import React from 'react';
import ProjectCard from "../ProjectCard";

const website = { "title": "This Website", "tech": "Pure HTML, CSS, JS", "description": "This pretty simple website you're looking at right now. Making this website taught me a lot about HTML and CSS, and also about making a website responsive.", "githubLink": "https://github.com/jensenzhng/personal-website"}
const twitterMonitor = { "title": "Twitter Monitor", "tech": "Backend NodeJS + Discord API", "description": "A Discord bot that posts tweets in a fraction of a second - while monitoring up to 100 Twitter users. Detects any possible images, videos, and users mentioned in a tweet.", "githubLink": "https://github.com/jensenzhng/twittermonitor"};
const orbitalVisualizer = { "title": "Orbital Visualizer", "tech": "Frontend HTML, CSS and JS + Backend Firebase, JS", "description": "Built for the NASA SpaceApps Hackathon. Over 20,000 objects orbiting Earth are displayed along with information about the body and the ability to filter by debris, rocket bodies, and payloads.", "githubLink": "https://github.com/jensenzhng/cesium-visualizer", link: 'https://orbitalvisualizer.earth/'};
//{ "title": "", "tech": "", "description": "", "githubLink": ""};

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <ProjectCard {...website}></ProjectCard>
                <ProjectCard {...twitterMonitor}></ProjectCard>
                <ProjectCard {...orbitalVisualizer}></ProjectCard>
            </div>
        )
    }
}

export default Projects;