import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import '../Styles/main.css'
import { useInView } from "react-intersection-observer"
import {Herox,  Svg1, Svg2, Svg3, Svg4,  Svg5, Svg6, Svg7, scroll} from '../Styles/animate'

const Hero = () => {





    return (
        <motion.div 
        className="hero">
            <motion.div 
            variants={Herox}
            initial="hidden"
            animate="visible"
            className="content">
                <motion.div >
                    <motion.h1  >Beautifully Crafted Web Exprience </motion.h1>
                    <motion.div 
                    className="meet">
                        <motion.span> 👇 </motion.span>
                        <motion.p>Meet Abdeladim</motion.p>
                    </motion.div>
                    <motion.div
                    className="scroll-icon">
                        <motion.span
                            variants={scroll}
                            initial="hidden"
                            animate="visible"
                        className="scroll-icon-ab">
                        </motion.span>
                    </motion.div>
                    
                </motion.div>
            </motion.div>
            <motion.svg
                
            xmlns="http://www.w3.org/2000/svg" className="hero-design" style={{ width:"686",  height:"688", viewBox:"0 0 686 688", transform: "translate(0px, 0px)", opacity: "1"}}>
                <motion.g
                    
                id="blockdesign" transform="translate(-935 -289)">
                <motion.rect
                    variants={Svg1}
                    initial="hidden"
                    animate="visible"
                className="square-anim" data-name="Rectangle 2"  style={{width:"172", height:"172", rx:"19", transform:"matrix(1,0,0,1,1277,289)", fill:"#6e00ff", transformOrigin: "0px 0px", dataSvgOrigin:"0 0"}}/>
                <motion.rect
                    variants={Svg2}
                    initial="hidden"
                    animate="visible"
                className="square-anim" data-name="Rectangle 10" style={{width:"172", height:"172", rx:"86", transform:"matrix(1,0,0,1,1277,461)", fill:"#ff64cb", dataSvgOrigin:"0 0", transformOrigin: "0px 0px"}}/>
                <motion.rect
                    variants={Svg3}
                    initial="hidden"
                    animate="visible"
                className="square-anim" data-name="Rectangle 8"  style={{width:"172", height:"172", rx:"19", transform:"matrix(1,0,0,1,1449,461)", fill:"#e5d5fa", transformOrigin: "0px 0px", dataSvgOrigin:"0 0"}}/>
                <motion.rect 
                    variants={Svg4}
                    initial="hidden"
                    animate="visible"
                className="square-anim" data-name="Rectangle 5" style={{width:"172", height:"172", rx:"19", transform:"matrix(1,0,0,1,1277,633)", fill:"#6e00ff", dataSvgOrigin:"0 0", transformOrigin: "0px 0px"}}/>
                <motion.rect
                    variants={Svg5}
                    initial="hidden"
                    animate="visible"
                className="square-anim" data-name="Rectangle 3"  style={{width:"172", height:"172", rx:"19", transform:"matrix(1,0,0,1,1107,461)", fill:"#fff", transformOrigin: "0px 0px", dataSvgOrigin:"0 0"}}/>
                <motion.rect
                    variants={Svg6}
                    initial="hidden"
                    animate="visible"
                className="square-anim" data-name="Rectangle 9" style={{width:"172", height:"172", rx:"86", transform:"matrix(1,0,0,1,1107,633)", fill:"#00f7ff", dataSvgOrigin:"0 0", transformOrigin: "0px 0px"}}/>
                <motion.rect
                    variants={Svg7}
                    initial="hidden"
                    animate="visible"
                className="square-anim" data-name="Rectangle 7"  style={{width:"172", height:"172", rx:"19", transform:"matrix(1,0,0,1,935,633)_", fill:"#872bff", opacity:"0.17",  transformOrigin: "0px 0px", dataSvgOrigin:"0 0"}}/>
                <motion.rect className="square-anim" data-name="Rectangle 4" style={{width:"172", height:"172", rx:"19", transform:"matrix(1,0,0,1,1107,805)", fill:"#fff", dataSvgOrigin:"0 0", transformOrigin: "0px 0px"}}/>
                </motion.g>
            </motion.svg> 
        </motion.div>
    )
}

export default Hero
