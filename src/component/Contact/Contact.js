import React from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';

const Contact = () => {
    return(
        <div className="contact">
            <div className="blogNav">
                <Link className="link right" to="/">
                    <h3 className="nav back">Home</h3>
                </Link>
                <Link className="link left" to="/blog">
                    <h3 className="nav">Blog</h3>
                </Link>
            </div>
            <section className="grid">
                <div id="right">
                    <h1><span>Thank you</span><br/>for visiting</h1>
                    <p id="note">Hey feel free to leave your <span id="opinion">opinion</span> means a lot</p>
                </div>
                <div id="left">
                    <input id="email" placeholder="Example@gmail.com" type="text"/>
                    <textarea id="area" placeholder="Tell me what's on your mind"/>
                    <button id="button">Send</button>
                </div>
            </section>
        </div>
    )
}

export default Contact;