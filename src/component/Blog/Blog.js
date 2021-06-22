import React from 'react';
import './Blog.css';
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
        </div>
    )
}

export default Blog;