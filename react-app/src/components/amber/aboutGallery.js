import React, { useState, useEffect} from 'react';
import AboutMeCard from '../amber/aboutMeCard';
import aboutAmber from "../../images/aboutAmber4.svg"


const AboutGallery = () => {
    return(
         <AboutMeCard>
        <img src={aboutAmber} />
        </AboutMeCard>
    )
};

export default AboutGallery;