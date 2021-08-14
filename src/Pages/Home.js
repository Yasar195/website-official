import React from 'react';
import './Home.css';
import {motion} from 'framer-motion';

const Home = () => {

    const text = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

    return(
        <div className="Home">
            <section>
                <motion.h1 initial="hidden" animate="visible" transition={{duration: 2}} variants={text} id="hai">Hai</motion.h1>
                <motion.p variants={text} initial="hidden" animate="visible" transition={{duration: 3}} id="para">I am Yasar arafath a web developer from kerala</motion.p>
                <motion.div drag
                initial="hidden"
                animate="visible"
                variants={text}
                transition={{duration: 5}}
                dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
                whileDrag={{scale: 1.1}} id="purple" className="anim">
                    <h1>Front-end development</h1>
                </motion.div>
                <motion.div drag
                initial="hidden"
                animate="visible"
                variants={text}
                transition={{duration: 5}}
                dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
                whileDrag={{scale: 1.1}}
                id="tomato" className="anim">
                    <h1>back-end development</h1>
                </motion.div>
                <div className="links">
                    <motion.button whileHover={{scale:1.1}} whileTap={{scale: 0.9}}>Projects</motion.button>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Skills</motion.button>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Contact me</motion.button>
                </div>
            </section>
            <section>
                <h1 id="about">About me</h1>
                <p id="about_para">I am a 2nd year undergraduate student persuing degree in computer science and engineering. I am really passionate about what i do. Really open to new opertunities.</p>
                <motion.div
                 drag
                 dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
                 whileDrag={{scale: 1.1}}
                 initial="hidden"
                 animate="visible"
                 transition={{duration: 5}}
                 variants={text}
                 className="anim_about"
                >
                    <h1>Computer science and engineering</h1>
                </motion.div>
            </section>
        </div>
    )
}

export default Home;