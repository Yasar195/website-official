import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <section>
                <div className="nav">
                    <Link className="link" to="/blog">
                        <h3 className="nav">Blog</h3>
                    </Link>
                    <Link className="link" to="/contact">
                        <h3 className="nav">Contat me</h3>
                    </Link>
                </div>
                <h1 className="main">Hey</h1>
                <div className="anim"></div>
                <p className="para">I am <span id="text">yasar arafath</span> a <span id="text">front end</span> developer from kerala</p>
            </section>
        </div>
    )
}

export default Home;