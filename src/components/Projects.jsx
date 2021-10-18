import React from 'react';
import ProjectCard from "./ProjectCard.jsx";

const website = { "title": "This Website", "tech": "Pure HTML, CSS, JS", "description": "This pretty simple website you're looking at right now. Making this website taught me a lot about HTML and CSS, and also about making a website responsive.", "githubLink": "https://github.com/jensenzhng/personal-website"}

class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <ProjectCard {...website}></ProjectCard>
            </div>
        )
    }
    }

export default Projects;