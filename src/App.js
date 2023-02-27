import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header id="header">
    <div className="d-flex flex-column">

      <div className="profile" style={{marginTop:"30px"}}>
        <h1 className="text-light"><a href="index.html">Muhammad Shahbaz Rafique</a></h1>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#projects" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Projects</span></a></li>
          <li><a href="#certificates" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Certificates</span></a></li>
          
        </ul>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Muhammad Shahbaz Rafique</h1>
      <p>Computer Science Student <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>

  <main id="main">
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p style={{textAlign:"justify",padding:"20px"}}>I am a computer science student with a passion for programming and web development. My skills include programming in C++, C#, and Python, as well as web development using HTML, CSS, JavaScript, React JS, Node.js, and MongoDB. I have experience creating a variety of web applications, including a quiz application and an e-commerce website called DreamLight.
          In My free time, I enjoys exploring new Web Technologies. I am committed to using my skills and knowledge to make a positive impact in the world through the development of innovative and useful software applications.</p>
        </div>

        <div className="section-title">
        <h2>Programmer &amp; Web Developer.</h2>
        <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>03 October 2003</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>tierslimited.com</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0307 9066139</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lahore Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Science</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Email:</strong>shahbazrafique101@gmail.com<span></span></li>
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
              <span className="skill">HTML</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>

            <div className="progress">
              <span className="skill">CSS</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>

            <div className="progress">
              <span className="skill">Javascript</span>
              <progress id="file" value="85" max="100" style={{marginRight:"5px"}}> 85% </progress>
              <i className="val">85%</i>
            </div>
            <div className="progress">
              <span className="skill">React Js</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>
            <div className="progress">
              <span className="skill">Python</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">PyQt</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">Node Js</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>

            <div className="progress">
              <span className="skill">MongoDb</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div>

            <div className="progress">
              <span className="skill">React Native</span>
              <progress id="file" value="70" max="100" style={{marginRight:"5px"}}> 70% </progress>
              <i className="val">70%</i>
            </div>

            <div className="progress">
              <span className="skill">C++</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">C#</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">Windows Form</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
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
              <h4>Muhammad Shahbaz Rafique</h4>
              <p><em>Multi-skilled computer science student with expertise in programming and web development, creating innovative solutions with a focus on user experience.</em></p>
              <ul>
                <li>Lahore Pakistan</li>
                <li>03079066139</li>
                <li>shahbazrafique101@gmail.com</li>
                <li><a href="https://www.linkedin.com/in/muhammad-shahbaz-rafique-108330237/">LinkedIn Profile</a></li>
                <li><a href="https://github.com/Shahbaz-Rafique">GitHub</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Computer Science</h4>
              <h5>2021 - 2025</h5>
              <p><em>University of Engineering & Technology, Lahore</em></p>
              <h4>Subjects</h4>
              <p><em>Programming Fundamentals</em></p>
              <p><em>Object Oriented Programming</em></p>
              <p><em>Data Structures</em></p>
              <p><em>Database</em></p>
              <p><em>Operating System</em></p>
              <p><em>Digital Logic Design</em></p>
              <p><em>Computer Organization & Assembly Language</em></p>
            </div>
            <div className="resume-item">
              <h4>Aspire Leader Program - Harvard University</h4>
              <h5>January 2023-July 2023</h5>
            </div>
            <div className="resume-item">
              <h4>Intermediate Pre-Engineering</h4>
              <h5>2019 - 2021</h5>
              <p><em>Punjab Group of Colleges, Gujranwala</em></p>
              <h4>Subjects</h4>
              <p><em>Physics</em></p>
              <p><em>Chemistry</em></p>
              <p><em>Mathematics</em></p>
            </div>
            <div className="resume-item">
              <h4>Matric</h4>
              <h5>2019 - 2021</h5>
              <p><em>Science Base School, Gujranwala</em></p>
              <h4>Subjects</h4>
              <p><em>Physics</em></p>
              <p><em>Chemistry</em></p>
              <p><em>Mathematics</em></p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Teacher Assistant (Programming Fundamentals)</h4>
              <h5>December 2022 - Present</h5>
              <a href="https://uet.edu.pk/"><p><em>University Of Engineering & Technology, Lahore</em></p></a>
              <ul>
                <li>As a teacher assistant for programming fundamentals at UET Lahore, I have helped numerous students develop their programming skills and achieve success in their coursework.</li>
                <li>As a teacher assistant, my approach to teaching programming fundamentals involves breaking down complex concepts into simple, easy-to-understand language, and encouraging students to apply their knowledge in practical ways.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Mentor Full Stack Development</h4>
              <h5>January 2023 - Present</h5>
              <a href="https://apacdirectory.hackclub.com/club/uet"><p><em>HackClub UET</em></p></a>
              <ul>
                <li>As a mentor of full stack development at HackClub Uet, I am responsible for guiding and teaching students about the latest web technologies and best practices in the field.</li>
                <li>As a mentor, my approach to teaching full-stack development involves helping students develop a deep understanding of the underlying concepts and principles that drive modern web applications. This includes topics such as client-side and server-side scripting, front-end development using HTML/CSS/JavaScript, back-end development using Node.js/Express.js, database management using MongoDB, and more.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Co-Lead Flutter Developement</h4>
              <h5>December 2022 - Present</h5>
              <a href="https://gdsc.community.dev/university-of-engineering-and-technology-uet-lahore-campus/"><p><em>Google Developer Student Club UET</em></p></a>
              <ul>
                <li>As a Co-Lead Development at Google Developer Student Club Uet, I am passionate about teaching and learning about Flutter. My role involves equipping students with the skills and knowledge needed to develop innovative, high-quality mobile applications.</li>
              </ul>
            </div>
          </div>
          
        </div>
        <section id="projects" className='projects'>
        <div className="section-title">
        <h2>Projects</h2>
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>DreamLight - Ecommerce Website</h4>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>July 2022-August 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>DreamLight is an e-commerce website that I created using React JS, and MongoDB. The website allows users to View a varierty of products include Dressing,jewelries,Electronics etc. User can Make account on DreamLight and also set his/her profile also can add product to cart. For online payemnt I have Integrate STRIPE in it.</p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Online Quiz Website</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://online-quiz-app.000webhostapp.com/" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>March 2022-April 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Online Quiz App is also one of Project of Web development. It was developed in HTML, CSS, Javascript and Mongodb, Nodejs for Backend. The Motivation for making this website is to take our Education System towards advanced Technologies. With some Modification, this website can be used for the Computerized Quiz of the Schools.</p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Quizzler - Mobile Application</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://expo.dev/@shahbazrafique/Quizzler?serviceType=classic&distribution=expo-go" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>November 2022-December 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>A quizzler mobile app is a software application that runs on mobile devices, such as smartphones and tablets, and is designed to deliver quizzes to users. This apps can include a wide variety of quiz categories, such as general knowledge, history, science, sports, and pop culture, and can be used for entertainment, education, or both. Users can take the quizzes solo. Some apps also have features like leaderboards, achievements, and rewards for high scores.</p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Online Shopping Management System</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Shahbaz-Rafique/Shopping-Management-System-Winform" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>Junuary 2022-March 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>I have created this Project in c# language. This include the User and Admin Portal. Both have access of different things. Adming can take view of all the products and activities done by users.</p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Supplier Management System</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Shahbaz-Rafique/Supplier-Management-System" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>October 2022-December 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>The Mobile Supplier Management System is designed for the distribution of cell phones to shopkeepers. It consists of three users: Manager, Employees, and Riders. The Manager can add, view, update, and delete employees and riders, add products, view stock availability, fuel usage, rider orders, and employees management reports, and send emails. The Employee can add, view, and manage riders, view and manage orders, view products, track rider order status, give bonuses, and manage fuel usage. The Rider can take orders, view assigned orders, view route, view delivered orders, and view bonuses. The system is aimed at optimizing the supply chain and ensuring timely delivery of products to customers.</p>
        </div>
        </section> 

        <section id="certificates" className='certificates'>
        <div className="section-title">
        <h2>Certificates</h2>
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>SQL Intermediate Certificate - By HackerRank</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.hackerrank.com/certificates/0075035a1fe4" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>Feb 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Microsoft SQL Server · SQL Server Management Studio · Transact-SQL (T-SQL) · MySQL</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>SQL Certificate - By TestDome</h4>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>Feb 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Microsoft SQL Server · SQL Server Management Studio · Transact-SQL (T-SQL) · SQL</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Full Stack Developer - By DigitalAdda</h4>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>January 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Full Stack development · Html · CSS · Javascript · React · MongoDb · Nodejs</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Typing Certificate</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.typing.com/apiv1/student/tests/212455638/137870500/certificate?language=en" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>September 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>49 WPM with 99% Accuracy</p>
        </div>
        </section> 
      </div>
    </section>
  </main>
    </div>
  );
}

export default App;
