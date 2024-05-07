import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className= "footer">
        
        <div className= "socialMedia">
            <a href= "https://www.instagram.com/ainaz_the_best/" target="_blank">
                <InstagramIcon/>
            </a>
            <a href= "https://www.linkedin.com/in/ainaz-estiri-03b0b5195/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href= "https://github.com/AinazEstiri" target="_blank">
                <GithubIcon/>
            </a>
            
        </div>

        <p> &copy; 2024 AinazEstiriTech.dev</p>
        
        </div>
  )
}

export default Footer