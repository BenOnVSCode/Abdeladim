import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import '../Styles/main.css'
import { useInView } from "react-intersection-observer"
import { featuredImg, featuredTitle, featuredName, featuredDes } from '../Styles/animate'

const Featured = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start("visible")
        }
    }, [controls, inView]);

    
    return (
        <motion.section className="featured">
            <motion.div className="left">
                <motion.div className="inner3 transition">
                    <motion.p
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={featuredTitle}
                    className="subtitle">
                        Featured 
                    </motion.p>
                    <motion.a 
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={featuredName}
                    className="featured-title" href="">
                        Virtual banking Website
                    </motion.a>
                    <motion.p
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={featuredDes}
                    className="featured-desc">
                       Virtual Banking template with react, react-scroll, styled-components and some hooks.
                    </motion.p>
                </motion.div>
            </motion.div>
            <motion.img 
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={featuredImg}
            className="right featured-img transition" src="https://i.ibb.co/D7sZtyQ/scrnli-11-28-2020-1-37-25-PM.png" alt="featured-project" />
        </motion.section>
    )
}

export default Featured
