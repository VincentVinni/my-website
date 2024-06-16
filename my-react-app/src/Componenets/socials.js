import '../Styles/social.css';
import React from 'react';
import resume from '../images/resume.pdf';


const SOCIALS = () => {
    return(
        <div class="main-social-wrapper">
            <p class="parent-title">socials</p>
            <div class="social-chain">
                <a class="first" href={resume} target="_blank">resume</a>

                <a class="second" href="https://github.com/VincentVinni" target="_blank">github</a>

                <a class="third" href="https://www.instagram.com/vaung20/" target="_blank">instagram</a>

                <a class="fourth" href="https://www.linkedin.com/in/vincent-myint/" target="_blank">linkedin</a>
            </div>
        </div>
    )
}

export default SOCIALS;