import '../Styles/education.css';
import React from 'react';
import seal from '../images/seal.png';
import cal from '../images/cal.png';

const EDUCATION = () => {
    return(
        <div class="education-main-wrapper">
            <h2 class="education-title">EDUCATION</h2>
            

            <div class="school-wrapper">
                <img src={cal} alt="school seal" class="school-logo"/>
                <p>University of California, Berkeley <br /> <br /> 
                   Bachelor of Arts-Computer Science <br /> <br />
                </p>
                
            </div>

            <div class="coursework-stack">
                <p><b><i>Relevant Coursework </i></b></p>
                                
                <div className='coursework-content'>
                    <p>Data Structures & Algorithms (CS61B)</p>
                    <p>Efficient Algorithms (CS170)</p>
                    <p>Artificial Intelligence & Machine Learning (CS189)</p>
                    <p>Structure of Computer Programs (CS61A)</p>
                    <p>Computer Architecture (CS61C)</p>
                    <p>Discrete Math and Probability Theory (CS70)</p>
                    <p>Database Systems (CS186)</p>
                    <p>Operating Systems (CS162)</p>
                    <p>Computer Security (CS161)</p>
                    <p>Foundations of Data Science (Data 8)</p>
                    <p>Principles of Data Science (Data 100)</p>
                </div>
                
                
            </div>

        </div>
    )
}

export default EDUCATION;