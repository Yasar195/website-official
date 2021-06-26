import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <section>
                <div className="nav">
                    <Link className="link" to="/skill">
                        <h3 className="nav">My skills</h3>
                    </Link>
                    <Link className="link" to="/contact">
                        <h3 className="nav">Contact me</h3>
                    </Link>
                </div>
                <h1 className="main">Hey</h1>
                <div className="anim"></div>
                <p className="para">I am <span id="text">yasar arafath</span> a <span id="text">front end</span> developer from kerala</p>
            </section>
            <section>
                <div className="aboutme">
                    <h1>About me</h1>
                    <p>
                        i am an computer science undergraduate student from kerala. iam interested in computer science and how computer's actually works since my childhood days.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;