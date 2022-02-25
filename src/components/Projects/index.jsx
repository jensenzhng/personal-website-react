import React from 'react';
import ProjectCard from "../ProjectCard";
import './index.css'

const Website = { "title": "This Website", "tech": "ReactJS", "description": "This website you're looking at right now! I originally made this in just HTML/JS/CSS, and I ported it over to ReactJS :) This website taught me a lot about HTML and CSS, and also about making a website responsive.", "githubLink": "https://github.com/jensenzhng/personal-website-react"}
const twitterMonitor = { "title": "Twitter Monitor", "tech": "Backend NodeJS + Discord API", "description": "A Discord bot that posts tweets in a fraction of a second - while monitoring up to 100 Twitter users. Detects any possible images, videos, and users mentioned in a tweet.", "githubLink": "https://github.com/jensenzhng/twittermonitor", "link": "/about/monitor"};
const OrbitalVisualizer = { "title": "Orbital Visualizer", "tech": "Frontend HTML, CSS and JS + Backend Firebase, JS", "description": "Built for the NASA SpaceApps Hackathon. Over 20,000 objects orbiting Earth are displayed along with information about the body and the ability to filter by debris, rocket bodies, and payloads.", "githubLink": "https://github.com/jensenzhng/cesium-visualizer", link: '/about/orbital/'};
const ToysRUsBot = { "title": "ToysRUS Bot", "tech": "NodeJS", "description": "This is a script to automatically buy a product off of the ToysRUs website. I built this to both learn more about HTTP requests and also in hopes of getting a PS5 :)", "githubLink": ""};
const StockBot = { "title": "Stock Bot", "tech": "Backend NodeJS + Discord API", "description": "My friend commissioned me to write a Discord bot that allows him to inform other people of his opinion on the stock market. Currently, the bot is in over 23 Discord servers and reaches about 2 thousand people.", "githubLink": "https://github.com/jensenzhng/stock-bot-public"}
const MarkovBot = { "title": "Markov Bot", "tech": "Backend NodeJS + Discord API", "description": "A Discord bot that generates text using Markov chains. It can generate text based on previous words said in a Discord channel. It can also generate text based on a user's input.", "githubLink": ""}
const BrainlyUnblocker = { "title": "Brainly Unblocker", "tech": "Javascript", "description": "Brainly only allows you to view one answer a day, which is annoying if you want to learn how to do homework problems. This chrome extension bypasses their blocker automatically, so you don't have to worry about a thing.", "githubLink": "https://github.com/jensenzhng/brainly-unblocker"};
// const offerIDBot = { "title": "Walmart Offer ID Bot", "tech": "Backend NodeJS + Discord API", "description": "Scrapes the Offer ID and information of a Walmart product given the SKU, or the SKU from an Offer ID. Useful when running Walmart bots that have Offer ID mode.", "githubLink": "https://github.com/jensenzhng/offer-id-bot"};
const bbMonitorScript = { "title": "Best Buy Monitor Script", "tech": "Backend NodeJS", "description": "Scrapes the availability of a product on Best Buy.", "githubLink": "https://github.com/jensenzhng/best-buy-monitor"};
const DiscordSniper = { "title": "Discord Sniper", "tech": "NodeJS + Discord API", "description": "A script that, given a Discord token, can instantly join servers and claim Nitros. Can be used to join exclusive invite-only Discord servers and to get free months of Nitro.", "githubLink": "https://github.com/jensenzhng/discord-toolbox"}
const Idyll = { "title": "Idyll (In-Progress)", "tech": "Frontend HTML, CSS and JS + Backend Firebase, NodeJS", "description": "Check back soon...", "link": "https://idyll.shop/"};
// { "title": "", "tech": "", "description": "", "githubLink": ""};

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <ProjectCard {...Website} />
                <ProjectCard {...twitterMonitor} />
                <ProjectCard {...OrbitalVisualizer} />
                <ProjectCard {...ToysRUsBot} />
                <ProjectCard {...StockBot} />
                <ProjectCard {...MarkovBot} />
                <ProjectCard {...BrainlyUnblocker} />
                <ProjectCard {...bbMonitorScript} />
                <ProjectCard {...DiscordSniper} />
                <ProjectCard {...Idyll} />
            </div>
        )
    }
}

export default Projects;