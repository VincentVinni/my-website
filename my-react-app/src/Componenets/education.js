import '../Styles/education.css';
import React from 'react';
import seal from '../images/seal.png';

const EDUCATION = () => {
    return(
        <div class="education-main-wrapper">
            <h2 class="education-title">EDUCATION</h2>
            

            <div class="school-wrapper">
                <img src={seal} alt="school seal" class="school-logo"/>
                <p>University of California, Berkeley <br /> <br /> 
                   Bachelor of Arts-Computer Science <br /> <br />
                </p>
                
            </div>

            <div class="coursework-stack">
                <p>Relavent Coursework</p>
                <ul>
                    <li>Structure and Interpretation of Computer Programs (CS61A)</li>
                    <li>Data Structures (CS61B)</li>
                    <li>Computer Architecture (CS61C)</li>
                    <li>Discrete Math and Probability Theory (CS70)</li>
                    <li>Database Systems (CS186)</li>
                    <li>Operating Systems (CS162)</li>
                    <li>Efficient Algorithms and Intractable Problems (CS170)</li>
                    <li>Foundations of Data Science (Data 8)</li>
                    <li>Principles and Techniques of Data Science (Data 100)</li>
                    
                </ul>
                
            </div>

        </div>
    )
}

export default EDUCATION;