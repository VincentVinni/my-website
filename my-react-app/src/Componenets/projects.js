import '../Styles/projects.css';
import React, { useState } from 'react';

const PROJECTS = () => {

    const [text, setText] = useState('>');
    const [text2, setText2] = useState('>');
    const [text3, setText3] = useState('>');
    const [text4, setText4] = useState('>');
    const [text5, setText5] = useState('>');
    const [text6, setText6] = useState('>');
    const [text7, setText7] = useState('>');
    const [isVisibleOne, setVisibleOne] = useState(false); 
    const [isVisibleTwo, setVisibleTwo] = useState(false); 
    const [isVisibleThree, setVisibleThree] = useState(false); 
    const [isVisibleFour, setVisibleFour] = useState(false); 
    const [isVisibleFive, setVisibleFive] = useState(false); 
    const [isVisibleSix, setVisibleSix] = useState(false); 
    const [isVisibleSeven, setVisibleSeven] = useState(false); 


    const toggleVisibleOne = () => {
        setVisibleOne(!isVisibleOne);
        isVisibleOne ? setText('>') : setText('v');
    }

    const toggleVisibleTwo = () => {
        setVisibleTwo(!isVisibleTwo);
        isVisibleTwo ? setText2('>') : setText2('v');
    }

    const toggleVisibleThree = () => {
        setVisibleThree(!isVisibleThree);
        isVisibleThree ? setText3('>') : setText3('v');
    }

    const toggleVisibleFour = () => {
        setVisibleFour(!isVisibleFour);
        isVisibleFour ? setText4('>') : setText4('v');
    }

    const toggleVisibleFive = () => {
        setVisibleFive(!isVisibleFive);
        isVisibleFive ? setText5('>') : setText5('v');
    }

    const toggleVisibleSix = () => {
        setVisibleSix(!isVisibleSix);
        isVisibleSix ? setText6('>') : setText6('v');
    }

    const toggleVisibleSeven = () => {
        setVisibleSeven(!isVisibleSeven);
        isVisibleSeven ? setText7('>') : setText7('v');
    }

    // const addParagraph = (id, message) => {
    //     const lineBreak = document.createElement("br");
    //     const element = document.getElementById(id);
    //     const paragraph = document.createElement("p");
    //     paragraph.textContent = "This is a new paragraph!";
        
    //     element.appendChild(lineBreak);
    //     element.appendChild(paragraph);
        
    //   };

    return(
        <div className='main-project-wrapper'>
            <h2> &gt;&gt;&gt; Projects</h2>
            <div className='project-container'>

                <div className='project' id="project-one">
                    <button onClick={toggleVisibleOne}>{text}</button>
                    <p>Cloud Developer at MSK Cancer Research Center</p>
                    
                </div>

                {isVisibleOne && (
                    <div className="project-one-info info">
                        <p>Description: Working to reduce latency and achieve serverless infastructure with MSK's blood cells and bone marrow tiling tools</p>
                        <p>Technologies used: Java, AWS Amplify, AWS Fargate, Docker</p>
                    </div>
                )}

                <div className='project row-two'>
                    <button onClick={toggleVisibleTwo}>{text2}</button>
                    <p>Project Flant</p>
                </div>

                {isVisibleTwo && (
                    <div className="project-two-info info">
                        <p>Description: Working to reduce cloud computing costs by utilizing AWS EC2 spot instance purchases backed by machine learning algorithms</p>
                        <p>Technologies used: Java, Spring Boot, AWS</p>
                    </div>
                )}


                <div className='project row-three'>
                    <button onClick={toggleVisibleThree}>{text3}</button>
                    <p>Moodify</p>
                </div>

                {isVisibleThree && (
                    <div className="project-three-info info">
                        <p>Description: A web application that uses AI/ML to analyze the lyrical meaning of songs backed by emotional context through Speech Prosody and Emotional Sentiment Analysis</p>
                        <p>Technologies used: ReactJS, NodeJS, MongoDB, Auth0, HumeAI</p>
                    </div>
                )}

                <div className='project row-four'>
                    <button onClick={toggleVisibleFour}>{text4}</button>
                    <p>Where's Oski?</p>
                </div>

                {isVisibleFour && (
                    <div className="project-four-info info">
                        <p>Description: An interactive mobile application with rewards, leaderboard, and live feed and map for Berkeley students to track Berkeley's mascot, Oski, by uploading a picture </p> 
                        <p>Technologies used: React Native, Flask, Firebase</p>
                    </div>
                )}


                <div className='project row-five'>
                    <button onClick={toggleVisibleFive}>{text5}</button>
                    <p>Pokémon Game</p>
                </div>

                {isVisibleFive && (
                    <div className="project-five-info info">
                        <p>Description: Recreation of the classic Pokémon game with pseudorandom world generation, customized sprite movement, gameplay mechanics and seeking enemies!</p> 
                        <p>Technologies used: Java</p>
                    </div>
                )}

                <div className='project row-six'>
                    <button onClick={toggleVisibleSix}>{text6}</button>
                    <p>Personal Website</p>
                </div>
                
                {isVisibleSix && (
                    <div className="project-six-info">
                        <p>Description: The website you are viewing right now!</p> 
                        <p>Technologies used: ReactJS, JSX, CSS</p>
                    </div>
                )}


                {/* <div className='project row-seven'>
                    <button>&gt;</button>
                    <p>Ants</p>
                </div> */}

                <div className='project row-eight'>
                    <button onClick={toggleVisibleSeven}>{text7}</button>
                    <p>Spam Email Classifier</p>
                </div>

                {isVisibleSeven && (
                    <div className="project-six-info info">
                        <p>Description: Built and trained a logistic regression classifier to determine whether emails are spam or not spam</p> 
                        <p>Technologies used: Pandas, Numpy, Scikit-learn</p>
                    </div>
                )}

            </div>

        </div>
        
    )    
}

export default PROJECTS;