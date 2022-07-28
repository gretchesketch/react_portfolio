import './App.css';
import Image from "./images/futuramaquizapp.jpg";
import Image2 from "./images/linkedin_profile2.jpg";
import Image3 from "./images/passwordGeneraterScreenshot.jpg";
import Image4 from "./images/project1screenshot.jpg";
import Image5 from "./images/login.jpg";


function App() {
  return (
    <div className="App">
      <header className="App-header">

  
        <nav>
          <ul>
           <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </ul>
        </nav>
   


    <section class="hero">
        <sub class="hero-content"></sub>
        <h1 class="hero-title">
            Gretchen Jensen
        </h1>
        <h2 class="hero-subtitle">
            Rising Webdeveloper.
        </h2>
    </section>


<main>

    <div class="container" id="about">
        <h1>Hi! I'm Gretchen</h1>
        <img src={Image2} alt=""/>
        <pre id="float1">              Casual hello. I am Gretchen, and at 29 decided to change my career path. With an interest in technology, I am attending a bootcamp through Georgia Tech. 
          In my pursuit of coding knowledge, I have worked with many languages, libraries, frameworks, and been introduced to tons of new coding concepts. The biggest take 
          away however is that I will never run out of reading material. Good thing I love reading.I have worked in both a group and on my own to complete assignments using 
          HTML, CSS, Javascript, Node.js, express, APIs both server and client side, bootstrap, MySQL, inquirer, handlebars, etc. I have 
          used both Github and Heroku to host 
          my apps and have a familiarity with Git. I am not done though and am thrilled to continue growing and utilizing current and 
          future coding practices
        </pre>
    </div>


    <div class="container" id="projects">
        <h1>Sample Work</h1>

        <main class="grid">
            <section class="card">
              <header>GitCocktail</header>
              <a href="https://gretchesketch.github.io/project1_Cocktail-Recipe/"><img src={Image4} alt=""/></a>
            </section>
            <section class="card">
              <header>Futurama Quiz</header>
              <a href="https://gretchesketch.github.io/quiz-app/"><img src={Image} alt="" /></a>
            </section>
            <section class="card">
              <header>Password Generater</header>
              <a href="https://gretchesketch.github.io/HW_3_Password-Generater/"><img src={Image3} alt="" /></a>
            </section>
            <section class="card">
              <header>DOOD: video game forum</header>
              <a href="https://glacial-badlands-86135.herokuapp.com/"><img src={Image5} alt="" /></a>
            </section>
            {/* <section class="card">
              <header>coming soon...</header>
              <img src="https://images.unsplash.com/photo-1600606281534-a84eedec0c5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="pink ball shaped mushroom growing on a log" />
            </section>
            <section class="card">
              <header>coming soon...</header>
              <img src="https://images.unsplash.com/photo-1600177781554-45c3d6d21896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="purple mushroom in the woods" ></img>
            </section> */}
          </main>

    </div>

    <div class="container" id="contact">
        <menu>
            <h1>Reach me at:</h1>
                 
                 <p>follow me on <a id="linked" href="https://www.linkedin.com/in/gretchen-jensen-23721415a/"><img id="linkedin" src="http://assets.stickpng.com/images/58e91afdeb97430e81906504.png" alt="Linked In logo"/></a>
                </p>

                <p>check out more of my work on <a id="git" href="https://github.com/gretchesketch"><img id="git" src="https://pngimg.com/uploads/github/github_PNG20.png" alt="GitHub logo"/></a>
                </p>

                <p>Click here to view my resume: <a id="resume" href="https://docs.google.com/document/d/1O0r-hnZrf5fAD47lnSsMICZ1r6Iab3-jtdzvCiiaEdw/edit?usp=sharing"><img id="resume" src="https://clipartart.com/images/resume-icons-clipart-7.jpg" alt="GitHub logo"/></a>
                </p>
        </menu>
    </div>
</main>

<footer>
  <h2>created by Gretchen Jensen</h2>
  <h3>last updated July</h3>
</footer>
        
 
      </header>
    </div>
  );
}

export default App;
