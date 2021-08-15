import React from 'react';
import './Skill.css';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Skill = () => {
    return(
        <div className="skill">
            <Link to="/"><motion.button id="button"
             whileTap={{scale: 0.9}}
             whileHover={{scale: 1.1}}
             >Home</motion.button></Link>
            <motion.div
             id="nodejs"
             className="skills"
             whileDrag={{scale: 1.1}}
             whileTap={{scale: 0.9}}
             drag
             dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
            >
                <h1>Node js</h1>
            </motion.div>
            <motion.div
             id="expressjs"
             className="skills"
             whileDrag={{scale: 1.1}}
             whileTap={{scale: 0.9}}
             drag
             dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
            >
                <h1>Express js</h1>
            </motion.div>
            <motion.div
             id="reactjs"
             className="skills"
             whileDrag={{scale: 1.1}}
             whileTap={{scale: 0.9}}
             drag
             dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
            >
                <h1>React js</h1>
            </motion.div>
            <motion.div
             id="postgres"
             className="skills"
             whileDrag={{scale: 1.1}}
             whileTap={{scale: 0.9}}
             drag
             dragConstraints={{left: 10, right: 10, bottom: 10, top: 10}}
            >
                <h1>Postgresql</h1>
            </motion.div>
        </div>
    );
}

export default Skill;