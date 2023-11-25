import '../Styles/projects.css';
import React, { useState } from 'react';

const PROJECTS = () => {

    const [text, setText] = useState('v');
    const [text2, setText2] = useState('>');
    const [text3, setText3] = useState('>');
    const [text4, setText4] = useState('>');
    const [text5, setText5] = useState('>');
    const [text6, setText6] = useState('>');
    const [text7, setText7] = useState('>');
    const [isVisibleOne, setVisibleOne] = useState(true); 
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
            <h2> &gt;&gt;&gt; <b>Projects</b></h2>
            <div className='project-container'>

                <div className='project' id="project-one">
                    <button onClick={toggleVisibleOne}>{text}</button>
                    <p><b>Cloud Developer at MSK Cancer Research Center</b></p>
                    
                </div>

                {isVisibleOne && (
                    <div className="project-one-info info">
                        <p><b>Description:</b> Deployed MSK's blood cells and bone marrow web tiling tool to <b>AWS Amplify</b>. Working to achieve <b>serverless infastructure</b>. <b>Reduced tiling latency by 80%</b>.</p>
                        <p><b>Technologies used:</b> Java, AWS Amplify, AWS Fargate, Docker</p>
                    </div>
                )}

                <div className='project row-two'>
                    <button onClick={toggleVisibleTwo}>{text2}</button>
                    <p><b>Project Flant</b></p>
                </div>

                {isVisibleTwo && (
                    <div className="project-two-info info">
                        <p><b>Description:</b> Working to <b>reduce cloud computing</b> costs by utilizing <b>AWS EC2 spot instance</b> purchases backed by machine learning algorithms. <b>Reduced average costs by 70%</b>.</p>
                        <p><b>Technologies used:</b> Java, Spring Boot, AWS</p>
                    </div>
                )}


                <div className='project row-three'>
                    <button onClick={toggleVisibleThree}>{text3}</button>
                    <p><b>Moodify</b></p>
                </div>

                {isVisibleThree && (
                    <div className="project-three-info info">
                        <p><b>Description:</b> A <b>web application</b> that uses <b>AI</b> with <b>OpenAI and HumeAI</b> to analyze the lyrical meaning of songs backed by emotional context through Speech Prosody and Emotional Sentiment Analysis</p>
                        <p><b>Technologies used:</b> ReactJS, NodeJS, MongoDB, Auth0, HumeAI</p>
                    </div>
                )}

                <div className='project row-four'>
                    <button onClick={toggleVisibleFour}>{text4}</button>
                    <p><b>Where's Oski?</b></p>
                </div>

                {isVisibleFour && (
                    <div className="project-four-info info">
                        <p><b>Description:</b> A <b>React Native</b> powered <b>mobile application</b> with rewards, leaderboard, and live feed to gamify finding Berkeley's mascot, Oski, by uploading a picture. Utilized <b>React Native Maps</b> to integrate a live map of Oski sightings and <b>Firebase</b> for managing <b>user authentication</b> and <b>database management</b>.</p>
                        <p><b>Technologies used:</b> React Native, Flask, Firebase</p>
                    </div>
                )}


                <div className='project row-five'>
                    <button onClick={toggleVisibleFive}>{text5}</button>
                    <p><b>Pokémon Game</b></p>
                </div>

                {isVisibleFive && (
                    <div className="project-five-info info">
                        <p><b>Description:</b> Recreation of the classic Pokémon game with <b>pseudorandom world generation</b> using a <b>graph based implementation</b>. Utilized <b>OOP</b> to customize sprite movement, gameplay mechanics and leveraged <b>Dijkstra's Algorithm</b> for seeking enemies!</p> 
                        <p><b>Technologies used:</b> Java</p>
                    </div>
                )}

                <div className='project row-six'>
                    <button onClick={toggleVisibleSix}>{text6}</button>
                    <p><b>Personal Website</b></p>
                </div>
                
                {isVisibleSix && (
                    <div className="project-six-info">
                        <p><b>Description:</b> The website you are viewing right now! Made with <b>ReactJS</b> :D</p> 
                        <p><b>Technologies used:</b> ReactJS, JSX, CSS</p>
                    </div>
                )}


                {/* <div className='project row-seven'>
                    <button>&gt;</button>
                    <p>Ants</p>
                </div> */}

                <div className='project row-eight'>
                    <button onClick={toggleVisibleSeven}>{text7}</button>
                    <p><b>Spam Email Classifier</b></p>
                </div>

                {isVisibleSeven && (
                    <div className="project-six-info info">
                        <p><b>Description:</b> Built and trained a <b>logistic regression classifier</b> to determine whether emails are spam or not spam. Received a <b>90% test accuracy</b>.</p> 
                        <p><b>Technologies used:</b> Pandas, Numpy, Scikit-learn</p>
                    </div>
                )}

            </div>

        </div>
        
    )    
}

export default PROJECTS;