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
    const [text8, setText8] = useState('>');
    const [text9, setText9] = useState('>');
    const [text10, setText10] = useState('>');
    const [text11, setText11] = useState('>');
    const [isVisibleOne, setVisibleOne] = useState(true); 
    const [isVisibleTwo, setVisibleTwo] = useState(false); 
    const [isVisibleThree, setVisibleThree] = useState(false); 
    const [isVisibleFour, setVisibleFour] = useState(false); 
    const [isVisibleFive, setVisibleFive] = useState(false); 
    const [isVisibleSix, setVisibleSix] = useState(false); 
    const [isVisibleSeven, setVisibleSeven] = useState(false); 
    const [isVisibleEighth, setVisibleEighth] = useState(false); 
    const [isVisibleNinth, setVisibleNinth] = useState(false); 
    const [isVisibleTenth, setVisibleTenth] = useState(false); 
    const [isVisibleEleven, setVisibleEleven] = useState(false); 


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

    const toggleVisibleEighth = () => {
        setVisibleEighth(!isVisibleEighth);
        isVisibleEighth ? setText8('>') : setText8('v');
    }

    const toggleVisibleNinth = () => {
        setVisibleNinth(!isVisibleNinth);
        isVisibleNinth ? setText9('>') : setText9('v');
    }

    const toggleVisibleTenth = () => {
        setVisibleTenth(!isVisibleTenth);
        isVisibleTenth ? setText10('>') : setText10('v');
    }

    const toggleVisibleEleven = () => {
        setVisibleEleven(!isVisibleEleven);
        isVisibleEleven ? setText11('>') : setText11('v');
    }

    return(
        <div className='main-project-wrapper'>
            <h2> &gt;&gt;&gt; <b>Projects</b></h2>
            <div className='project-container'>

                <div className='project' id="project-eleven">
                    <button onClick={toggleVisibleEleven}>{text11}</button>
                    <p><b>Software Engineer Intern at UCSF</b></p>
                    
                </div>

                {isVisibleEleven && (
                    <div className="project-eleven-info info">
                        <p>Description: Developed <b>Infastructure as Code</b> to deploy and manage <b>1Million+ rows of Cancer CT Scan data</b> onto <b>AWS</b> to provision with <b>serverless infastructure</b> and advanced querying functionalities</p>
                        <p><b>Technologies used:</b> TypeScript, Python, AWS, Terraform, PostgreSQL</p>
                    </div>
                )}



                <div className='project' id="project-eigth">
                    <button onClick={toggleVisibleEighth}>{text8}</button>
                    <p><b>Software Engineer Intern at OurCo</b></p>
                    
                </div>

                {isVisibleEighth && (
                    <div className="project-eighth-info info">
                        <p><b>Description:</b> Built OurCo's third iteration of their mobile app using <b>TypeScript, AWS CDK, and Firebase</b> managing media files and photos with various <b>AWS Resources: EventBridge, Lambda, Kinesis, S3</b>. Further designed <b>GraphQL schemas</b>  with <b>SQL</b> queries and <b>GraphQL resolvers</b> for <b>CRUD operations</b> resulting in <b>60% decrease in app latency</b></p>
                        <p><b>Technologies used:</b> TypeScript, Python, AWS, GraphQL, PostgreSQL, Terraform</p>
                    </div>
                )}


                <div className='project' id="project-one">
                    <button onClick={toggleVisibleOne}>{text}</button>
                    <p><b>Software Engineer Intern at MSK Cancer Research Center</b></p>
                    
                </div>

                {isVisibleOne && (
                    <div className="project-one-info info">
                        <p><b>Description: </b>Trained and Deployed<b></b> MSK's <b>Convoluted Neural Network</b> powered blood cells and bone marrow web tiling tool on <b>AWS Sagemaker</b>. Acheieved <b>serverless infastructure</b> by deploying containerized application onto <b>Amazon Fargate</b>. <b>Reduced tiling latency by 80%</b>.</p>
                        <p><b>Technologies used:</b> TypeScript, Java, AWS, Docker</p>
                    </div>
                )}

                <div className='project row-two'>
                    <button onClick={toggleVisibleTwo}>{text2}</button>
                    <p><b>Software Engineer Intern at TFG: Project Flant</b></p>
                </div>

                {isVisibleTwo && (
                    <div className="project-two-info info">
                        <p><b>Description:</b> Working to <b>reduce cloud computing</b> costs by utilizing <b>AWS EC2 spot instance</b> purchases backed by machine learning algorithms. <b>Reduced average costs by 70%</b>.</p>
                        <p><b>Technologies used:</b> Java, Spring Boot, AWS</p>
                    </div>
                )}

                <div className='project row-three'>
                    <button onClick={toggleVisibleNinth}>{text9}</button>
                    <p><b>Compare.AI</b></p>
                </div>

                {isVisibleNinth && (
                    <div className="project-three-info info">
                        <p><b>Description:</b> A <b>web application </b> that compiles <b>AI-generated</b> images with real-images side by side. Built a real-time chatbot integrating <b>LangChain with Meta's LLama3</b> incorporating a <b>historically-aware retreiver using FAISS</b> with a <b>VectorStore</b> to mimic human conversations. Additionally, implemented an <b>end-to-end</b> chat feature with <b>WebSockets</b> for users to guess which chat log is human</p>
                        <p><b>Technologies used:</b> NextJS, Express, NodeJS, Supabase, LangChain, WebSockets, Redux</p>
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

                <div className='project'>
                    <button onClick={toggleVisibleTenth}>{text10}</button>
                    <p><b>PintOS</b></p>
                </div>

                {isVisibleTenth && (
                    <div className="project-three-info info">
                        <p><b>Description:</b> Extended Stanford's simple operating systems framework for the 80x86 architecture by implementing process control, virtual memory, various syscalls, multi-threading functionalities, locking/blocking, and extensible files with subdirectories and caches</p>
                        <p><b>Technologies used:</b> C/C++, Assembly, Linux, Shell</p>
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