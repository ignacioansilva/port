import './App.css';
import './blobz.css';
import foto from "./imagenes/Imagen de WhatsApp 2022-11-10 a las 11.35.33 (2).jpg"
import js from "./imagenes/JavaScript.png"
import pjdata from "./imagenes/pj-data.png";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function App() {
  return (
    <div className="App">
      <header className="App-header">


      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F25757" fill-opacity="1" d="M0,192L40,192C80,192,160,192,240,208C320,224,400,256,480,277.3C560,299,640,309,720,272C800,235,880,149,960,138.7C1040,128,1120,192,1200,192C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>



        
           <div className="blob"> 
           <Zoom>
            <div className="blob-1">
              <div >
                <img className="picture" src={foto} alt="personal-pic"/>
              </div>
           
            <div className="white-blob">
  
              <svg
              width="700"
              height="700"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                
                
                
                
                
                
                
                <clipPath id="shape">
                  <path fill="currentColor" d="M779,633Q653,766,493,777.5Q333,789,221.5,644.5Q110,500,181,285Q252,70,494.5,79.5Q737,89,821,294.5Q905,500,779,633Z"></path>
                </clipPath>
              </defs>
            
              

              <g  clip-path="url(#shape)">
                <path fill="#F2F2F2" d="M779,633Q653,766,493,777.5Q333,789,221.5,644.5Q110,500,181,285Q252,70,494.5,79.5Q737,89,821,294.5Q905,500,779,633Z" />
              </g>

              
            
            </svg>


            </div>
            <p className="presentation"><b>¡Hello!</b>
             <br />
              My name is Ignacio. I'm 19 years old and I'm a programmer and passionate about technology and web development. I´ve studied at Soy Henry from the beginning of 2022. I also completed some programming courses with which I learned to use JavaScript, TypeScript, React, Node.js, Express, MySQL, Git, GitHub, etc. Currently I've ended my studies and I'm looking for my first job as a Developer.
            </p>
            </div> 
            </Zoom>
            </div> 
      </div>
      </header>

      <Fade left>
      <div data-aos="fade-up" className="section-img">
        <img src={pjdata} alt="pj-data" />
        <h1>MY TECHNOLOGIES</h1>
      </div>
      </Fade>
 
      <Fade right>
      <section className="technologies">
        <div data-aos="fade-up" className="techs">
          <div className="tech-images">
          <div className="blob-js">
              <img src={js} alt="js"/>
            </div>
            <div className="blob-js">
              <img src={js} alt="js"/>
            </div>
            <div className="blob-js">
              <img src={js} alt="js"/>
            </div>
            <div className="blob-js">
              <img src={js} alt="js"/>
            </div>
            <div className="blob-js">
              <img src={js} alt="js"/>
            </div>
            <div className="blob-js">
              <img src={js} alt="js"/>
            </div>

          </div>
          
        </div>
      </section>
      </Fade>

    </div>
  );
}

export default App;
