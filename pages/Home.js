import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/ProfilePic.jpg"; 
import "../styles/Home.css";
import Typical from "react-typical";
import { motion } from "framer-motion";

function Home() {
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoop(true);
    }, 3000); // Start looping after 1 second of inactivity
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home">
      <div className="about">
        <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.5 } }}
            viewport={{ once: true, amount: 0.5 }}
            src={ProfilePic} className="App-logo" alt="Profile Picture"/>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.5 } }}
          viewport={{ once: true, amount: 0.5 }}
        >

          {" "}
          My name is Ainaz Estiri
        </motion.h1>
        <ol className="list"></ol>
        <div className="promptHome">
          <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } }}
                viewport={{ once: true, amount: 0.5 }}
          >
            {" "}
            I am a{" "}
            <Typical
              loop={loop ? Infinity : 0} // Loop infinitely if loop state is true, otherwise don't loop
              wrapper="b"
              steps={[
                "Software Developer 💻",
                1500,
                "Agile Problem Solver 💭",
                1500,
                "Strategic Thinker 🧠",
                1500,
                "Mission Driven Professional 👩🏻‍💻",
                1500,
                "Creator and Designer 👩🏻‍🎨",
                1500,
                "UI/UX Consultant 🤔",
                1500,
                "Detail Focused Individual 🧐",
                1500,
                "Marketing Specialist 📈",
                1500,
                "Conscientious Team Player 🫱🏼‍🫲🏻",
                1500,
                "Professional Swimmer 🏊🏼‍♀️ & Fitness Enthusiast 💪🏼",
                1500,
                "Scuba Diver 🤿",
                1500,
                "Pianist 🎹 & Vocalist 🎤",
                1500,
                "Culinary Explorer 🍱",
                1500,
                "World Traveler 🌎",
                1500,
                "Disney and Animation Connoisseur 🍿",
                1500,
                "Competitive Gamer 🎮",
                1500,
              ]}
            />
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Home;
