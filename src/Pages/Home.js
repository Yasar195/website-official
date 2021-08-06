import React from 'react';
import './Home.css';
import {motion} from 'framer-motion';

const Home = () => {
    return(
        <div className="Home">
            <motion.h1
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2
                }}
                className="heading"
            >Hai</motion.h1>
            <p className="para">I am Yasar arafath a web-developer from kerala</p>
            <div className="links">
                <motion.button 
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                id="button">
                    Projects
                </motion.button>
                <motion.button
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                id="button">
                    About me
                </motion.button>
                <motion.button
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                id="button">
                    Blog
                </motion.button>
                <motion.button
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                id="button">
                    Contact me
                </motion.button>
            </div>
        </div>
    )
}

export default Home;