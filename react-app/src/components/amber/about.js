import React, { useState, useEffect} from 'react';
import AboutMeCard from '../amber/aboutMeCard';
import vrcc from "../../images/VRCC.gif"


const About = () => {
    return(
         <AboutMeCard>
        {/* <h2>test amber x</h2> */}
        <img src={vrcc}/>
        </AboutMeCard>
    )
};

export default About;