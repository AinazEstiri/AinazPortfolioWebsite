import React from "react";
import "../styles/AboutMe.css";
import {motion} from "framer-motion"


function Home(){
    return(
            <div className="about">
                <motion.h2
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
                    viewport={{ once: true, amount: .5}}
                >
                    About Me
                </motion.h2>

                <div className="aboutMe">
                    <motion.p
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.5}}}
                        viewport={{ once: false, amount: .5}}
                    >I'm a driven Woman in Tech with a passion for innovation. With expertise in software and business, I thrive on developing and leading innovative projects within collaborative teams. Known for my dedication, honesty, and meticulous attention to detail, I prosper in dynamic environments where I can take ownership of projects and drive them to success.</motion.p>

                    <motion.p
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.5}}}
                        viewport={{ once: false, amount: .5}}
                    >With a background in communication, marketing, and technology support, I bring a unique blend of skills to the table, enabling me to connect with clients and deliver exceptional results.</motion.p>

                    <motion.p
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.5}}}
                        viewport={{ once: false, amount: .5}}
                    > I also have great interest in AI and Machine Learning. Im fueled by passion to continue learning diligently and growing my knowledge in this field as I gain my Masters Degree at University of California San Diego.</motion.p>

                    <motion.p
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0, transition: {delay: 0.4, duration: 0.5}}}
                        viewport={{ once: false, amount: .5}}
                    > Beyond my technical pursuits, I also have a keen interest in management, eager to explore opportunities to lead and inspire teams towards success.</motion.p>
                
                    <button>
                        <motion.a 
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.5}}}
                            viewport={{ once: false, amount: .5}}
                            href={require("../assets/Ainaz Estiri Resume.pdf")} target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
                            Resume
                        </motion.a>
                    </button>
                
                </div>
            </div>


    )

}

export default Home