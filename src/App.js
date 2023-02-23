import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header id="header">
    <div className="d-flex flex-column">

      <div className="profile" style={{marginTop:"30px"}}>
        <h1 className="text-light"><a href="index.html">Muhammad Umar</a></h1>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Muhammad Umar</h1>
      <p>Computer Science Student <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>

  <main id="main">
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p style={{textAlign:"justify",padding:"20px"}}>I'm a highly motivated and dedicated computer science student with a passion for programming. I have a  strong background in C++, C#, and Python programming languages, and has demonstrated proficiency in SQL by earning an intermediate level Hackerrank certificate.
          As a computer science student, I developed a wide range of skills in software development, data structures, algorithms, and Operating System. I'm committed to lifelong learning and continuously seeks to expand my knowledge and skills in the field of computer science.
          I'm a creative problem solver with excellent critical thinking and analytical skills. I enjoys working collaboratively with others and has experience in team projects and collaborations.
          In My free time, I enjoys exploring new programming languages and technologies, as well as participating in programming competitions and hackathons. I am committed to using my skills and knowledge to make a positive impact in the world through the development of innovative and useful software applications.</p>
        </div>

        <div className="section-title">
        <h2>Programmer &amp; Web Developer.</h2>
        <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>16 October 2003</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>----</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0313 7136086</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lahore Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Science</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Email:</strong>umaraleem365@gmail.com <span></span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
   
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Showcasing my Abilities and Accomplishments</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">C++</span>
              <progress id="file" value="95" max="100" style={{marginRight:"5px"}}> 95% </progress>
              <i className="val">95%</i>
            </div>

            <div className="progress">
              <span className="skill">C#</span>
              <progress id="file" value="95" max="100" style={{marginRight:"5px"}}> 95% </progress>
              <i className="val">95%</i>
            </div>

            <div className="progress">
              <span className="skill">Python </span>
              <progress id="file" value="95" max="100" style={{marginRight:"5px"}}> 95% </progress>
              <i className="val">95%</i>
            </div>
            <div className="progress">
              <span className="skill">PyQt/Winform </span>
              <progress id="file" value="95" max="100" style={{marginRight:"5px"}}> 95% </progress>
              <i className="val">95%</i>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">HTML</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>

            <div className="progress">
              <span className="skill">CSS</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>

            <div className="progress">
              <span className="skill">Javascript</span>
              <progress id="file" value="70" max="100" style={{marginRight:"5px"}}> 70% </progress>
              <i className="val">70%</i>
            </div>

            <div className="progress">
              <span className="skill">Full Stack Development</span>
              <progress id="file" value="70" max="100" style={{marginRight:"5px"}}> 70% </progress>
              <i className="val">70%</i>
            </div>

          </div>

        </div>

      </div>
    </section>
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Muhammad Umar</h4>
              <p><em>Innovative and deadline-driven Web Designer with 2+ years of experience in Programming and developing user-friendly UI and Websites.</em></p>
              <ul>
                <li>Lahore Pakistan</li>
                <li>0313 7136086</li>
                <li>umaraleem365@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Computer Science</h4>
              <h5>2021 - 2025</h5>
              <p><em>University of Engineering & Technology, Lahore</em></p>
            </div>
            <div className="resume-item">
              <h4>Intermediate</h4>
              <h5>2019 - 2021</h5>
              <p><em>Standard Group of Colleges</em></p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>January 2021 - Present</h5>
              <p><em>Syabi Dev </em></p>
              <ul>
                <li>Supervised anf Trained team of Part Time Employee in Sales, Marchandising, and Inventory control.</li>
                <li>Maintained Full Product Knowledge of menu and Special.</li>
              </ul>
            </div>
          </div>
          
        </div>
        <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h5>Army Management System C++</h5>
              <h5>Army Management System C#</h5>
              <h5>Army Management System Python</h5>
              <h5>Supplier Management System</h5>
              <h5>Learning Management System windowsform and Database Sql</h5>
            </div>
      </div>
    </section>
  </main>
    </div>
  );
}

export default App;
