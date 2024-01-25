import './Styles/app.css';
import NAVBAR from './Componenets/navbar'
import SOCIALS from './Componenets/socials';
import GREYBOX from './Componenets/greybox';
import EDUCATION from './Componenets/education';
import myImage from './images/me.jpeg'; 
import PROJECTS from './Componenets/projects';


function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div class="main_page">
      
      <section class="container column" id="main_header">
        <div class="main_header">
          <h2 class="header_name">Vincent Myint</h2>

          <div>
                      <span class="type">
              <span>
                <span>Hello world!</span>
                <span>Nice to meet you!</span>
                <span>Enjoy your stay!</span>
              </span>
            </span>
          </div>
          
          {/* <button class="skip-down-button"onClick={() => scrollToSection('body')}>V</button> */}
        </div>
      </section>

      <section class="nav-bar">
        <NAVBAR></NAVBAR>
      </section>

      <section class="container column" id="body">
        {/* <h2 class="header_name" id="bottom-header-name">"Be crazy enough to think you can change the world"</h2> */}
        <GREYBOX id="greybox-middle"></GREYBOX>
        <img src={myImage} alt="profile" id="profile-picture"/>
      </section>

      <section class="container column" id="body-education">
        <EDUCATION></EDUCATION>
      </section>

      <section class="container column" id="body-projects">
        <PROJECTS></PROJECTS>        
      </section>

      <section class="container column" id="footer">
        <SOCIALS></SOCIALS>
      </section>

      
    </div>
  );
}

export default App;
