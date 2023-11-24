import '../Styles/social.css';
import React from 'react';

const SOCIALS = () => {
    return(
        <div class="main-social-wrapper">
            <p class="parent-title">socials</p>
            <div class="social-chain">
                <a class="first" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">resume</a>
                <p> -- </p>
                <a class="second" href="https://github.com/VincentVinni" target="_blank">github</a>
                <p> -- </p>
                <a class="third" href="https://www.instagram.com/vaung20/" target="_blank">instagram</a>
                <p> -- </p>
                <a class="fourth" href="https://www.linkedin.com/in/vincent-myint/" target="_blank">linkedin</a>
            </div>
        </div>
    )
}

export default SOCIALS;