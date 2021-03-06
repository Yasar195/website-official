import React from 'react';
import './Home.css';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className="Home">
            <section>
                <motion.h1 id="hai">Hai</motion.h1>
                <motion.p id="para">I am Yasar arafath a web developer from kerala</motion.p>
                <motion.div drag
                whileTap={{scale: 0.9}}
                dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
                whileDrag={{scale: 1.1}} id="purple" className="anim">
                    <h1>Front-end development</h1>
                </motion.div>
                <motion.div drag
                dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
                whileDrag={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                id="tomato" className="anim">
                    <h1>back-end development</h1>
                </motion.div>
                <div className="links">
                    <motion.button whileHover={{scale:1.1}} whileTap={{scale: 0.9}}
                    >Projects</motion.button>
                    <Link to="/skill"><motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                    >Skills</motion.button></Link>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                    >Contact me</motion.button>
                </div>
            </section>
            <section>
                <h1 id="about">About me</h1>
                <p id="about_para">I am a 2nd year undergraduate student persuing degree in computer science and engineering. I am really passionate about what i do. Really open to new opertunities.</p>
                <motion.div
                 drag
                 dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
                 whileDrag={{scale: 1.1}}
                 whileTap={{scale: 0.9}}
                 className="anim_about"
                >
                    <h1>Computer science and engineering</h1>
                </motion.div>
            </section>
        </div>
    )
}

export default Home;