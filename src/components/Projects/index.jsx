import React from 'react';
import ProjectCard from "../ProjectCard";

const website = { "title": "This Website", "tech": "ReactJS", "description": "This website you're looking at right now! I originally made this in just HTML/JS/CSS, and I ported it over to ReactJS in the span of 2 days :) This website taught me a lot about HTML and CSS, and also about making a website responsive.", "githubLink": "https://github.com/jensenzhng/personal-website-react"}
const twitterMonitor = { "title": "Twitter Monitor", "tech": "Backend NodeJS + Discord API", "description": "A Discord bot that posts tweets in a fraction of a second - while monitoring up to 100 Twitter users. Detects any possible images, videos, and users mentioned in a tweet.", "githubLink": "https://github.com/jensenzhng/twittermonitor"};
const orbitalVisualizer = { "title": "Orbital Visualizer", "tech": "Frontend HTML, CSS and JS + Backend Firebase, JS", "description": "Built for the NASA SpaceApps Hackathon. Over 20,000 objects orbiting Earth are displayed along with information about the body and the ability to filter by debris, rocket bodies, and payloads.", "githubLink": "https://github.com/jensenzhng/cesium-visualizer", link: 'https://orbitalvisualizer.earth/'};
const offerIDBot = { "title": "Walmart Offer ID Bot", "tech": "Backend NodeJS + Discord API", "description": "Scrapes the Offer ID and information of a Walmart product given the SKU, or the SKU from an Offer ID. Useful when running Walmart bots that have Offer ID mode.", "githubLink": "https://github.com/jensenzhng/offer-id-bot"};
const bbMonitorScript = { "title": "Best Buy Monitor Script", "tech": "Backend NodeJS", "description": "Scrapes the availability of a product on Best Buy.", "githubLink": "https://github.com/jensenzhng/best-buy-monitor"};
const idyll = { "title": "Idyll (In-Progress)", "tech": "Frontend HTML, CSS and JS + Backend Firebase, NodeJS", "description": "Check back soon...", "link": "https://idyll.shop/"};
//{ "title": "", "tech": "", "description": "", "githubLink": ""};

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <ProjectCard {...website}></ProjectCard>
                <ProjectCard {...twitterMonitor}></ProjectCard>
                <ProjectCard {...orbitalVisualizer}></ProjectCard>
                <ProjectCard {...offerIDBot}></ProjectCard>
                <ProjectCard {...bbMonitorScript}></ProjectCard>
                <ProjectCard {...idyll}></ProjectCard>
            </div>
        )
    }
}

export default Projects;