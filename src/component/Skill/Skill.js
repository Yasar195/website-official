import React from 'react';
import './Skill.css';
import {Link} from 'react-router-dom';

const Blog = () => {
    return(
        <div className="blog">
            <div className="blogNav">
                <Link className="link right" to="/">
                    <h3 className="back">Home</h3>
                </Link>
                <Link className="link left" to="/contact">
                    <h3 className="nav">Contact me</h3>
                </Link>
            </div>
            <div className = "skills">
                <h1>My skills</h1>
                <div id="skill">
                    <div className="skill">
                        <h2>HTML</h2>
                    </div>
                    <div className="skill">
                        <h2>CSS</h2>
                    </div>
                    <div className="skill">
                        <h2>React js</h2>
                    </div>
                    <div className="skill">
                        <h2>Javascript</h2>
                    </div>
                    <div className="skill">
                        <h2>Node js</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;