import './App.css';
import ContactForm from "./ContactForm";


function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
<nav className="bg-sky-400 blue shadow-lg fixed w-full top-0 z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      <div className="text-xl font-bold text-gray-800">Kamaleshwar Parnandhi</div>

      <div className="hidden md:flex space-x-4">
        {[
          { name: "Home", link: "#home" },
          { name: "About", link: "#about" },
          { name: "My Education", link: "#my-education" },
          { name: "Hobbits", link: "#hobbits" },
          { name: "Skills", link: "#skills" },
          { name: "Projects", link: "#projects" },
          { name: "My Achievements", link: "#my-achievements" },
          { name: "Contact", link: "#contact" }
        ].map((item) => (
          <a
            key={item.link}
            href={item.link}
            className="
              px-3 py-2 
              rounded-md 
              text-gray-700 
              bg-gray-100 
              hover:bg-blue-500 
              hover:text-white 
              transition-all 
              duration-200
            "
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  </div>
</nav>


      {/* Hero Section */}
<section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 pt-16">
  {/* The main container is now a flex container for side-by-side layout */}
  <div className="flex flex-col md:flex-row items-center justify-center text-white max-w-6xl mx-auto p-4 md:p-8 gap-8">
    
    {/* Image element with adjusted margins for the side-by-side layout */}
    <img 
      src={`${process.env.PUBLIC_URL}/My.png`} 
      alt="Kamaleshwar" 
      className="w-64 h-80 object-cover border-4 border-yellow-300 shadow-lg rounded-lg flex-shrink-0"
    />
    
    {/* Container for the text content, aligned left on larger screens */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        నమస్తే, <br />Welcome My Friends <span className="text-yellow-300"><br />I'm Kamaleshwar Parnandhi</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8">Python Full Stack Developer</p>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500 py-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 text-white gap-10">
          <div className="flex justify-center md:w-1/3">
            <img 
              src={`${process.env.PUBLIC_URL}/profile1.jpg`} 
              alt="Kamaleshwar" 
              className="w-72 h-80 object-cover border-4 border-yellow-300 shadow-lg rounded-lg"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
              About Me
            </h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              My name is <span className="font-semibold text-yellow-300">P. Kamaleshwar</span>, and I’m from Anantapur.  
              I completed my graduation at <span className="font-semibold">Sri Venkateswara Degree & PG College</span>, Anantapur (affiliated with Sri Krishnadevaraya University).  
              In 2022, I joined <span className="font-semibold">Hetero Pharmaceuticals Ltd</span> as an Admin in the Preparation Team, Oncology Dept.  
              After one year, I decided to switch my career to <span className="text-yellow-300 font-semibold">Web Development</span> because of my passion for coding and problem-solving.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              I’m deeply interested in <span className="text-yellow-300">mythological stories, science, and sci-fi</span>.  
              I also enjoy exploring mysteries and playing games—especially racing (cars & bikes) and strategy-based ones.
            </p>
            <p className="text-lg md:text-xl italic mb-8 leading-relaxed">
              “My short-term goal is to get a job, learn as much as I can, and grow through experience.  
              My long-term dream is to build my own empire—whether it happens or not, I’ll keep trying until my last breath.”
            </p>
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              More About Me
            </button>
          </div>
        </div>
      </section>

      {/* My Education Section */}
      <section id="my-education" className="h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 to-red-500 pt-16">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">My Education</h1>
          <p className="text-xl md:text-2xl mb-6">📜 Internship – Various online platforms. Earned knowledge in Python, Django, HTML/CSS, and more to enhance my skills.</p>
          <p className="text-xl md:text-2xl mb-6">💻 Full Stack Web Development – The Sparks Foundation. Completed an intensive program focusing on both front-end and back-end technologies.</p>
          <p className="text-xl md:text-2xl mb-6">🎓 Bachelor of Science (B.M.C) – Sri Venkateswara Degree & PG College, Anantapur. Graduated in 2022 with a solid foundation in Science and Laboratory techniques.</p>
          <p className="text-xl md:text-2xl mb-6">🎓 Intermediate (Bi.P.C) – Sri Chaitanya Junior College, Anantapur. Graduated in 2019 with a focus on Biology and Physical Sciences.</p>
          <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Hobbits Section */}
<section id="hobbits" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 to-gray-700 pt-16 px-6">
  <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">My Hobbits</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center">
    
    {/* Reading */}
    <div className="flex flex-col items-center">
      <img 
        src={`${process.env.PUBLIC_URL}/Watching Moives.jpeg`} 
        alt="Watching Moives" 
        className="w-40 h-40 object-cover rounded-lg mb-4 shadow-lg"
      />
      <p className="text-xl md:text-2xl text-white">🎬 Watching Movies – I enjoy watching mythological and science-fiction movies. They help me relax, spark my imagination, and explore different worlds and ideas.</p>
    </div>
    
    {/* Gaming */}
    <div className="flex flex-col items-center">
      <img 
        src={`${process.env.PUBLIC_URL}/Gaming.jpg`} 
        alt="Gaming" 
        className="w-40 h-40 object-cover rounded-lg mb-4 shadow-lg"
      />
      <p className="text-xl md:text-2xl text-white">🎮 Gaming – I enjoy racing and strategy games. They challenge my reflexes and strategic thinking.</p>
    </div>
    
    {/* Exploring Mysteries */}
    <div className="flex flex-col items-center">
      <img 
        src={`${process.env.PUBLIC_URL}/Exploring Mysteries.jpg`} 
        alt="Exploring Mysteries" 
        className="w-40 h-40 object-cover rounded-lg mb-4 shadow-lg"
      />
      <p className="text-xl md:text-2xl text-white">🕵️ Exploring Mysteries – I’m fascinated by unsolved cases and enigmatic phenomena.</p>
    </div>

  </div>

  <button className="mt-12 bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
    Know More
  </button>
</section>


      {/* Skills Section */}
<section
  id="skills"
  className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
>
  <div className="container mx-auto px-6">
    <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      My Skills
    </h2>

    {/* Grid / horizontal scroll on small screens */}
    <div className="flex flex-wrap justify-center gap-6 overflow-x-auto py-6 px-2">
      {[
        { img: "Python.jpg", name: "Python", level: "Advanced" },
        { img: "HTML.jpg", name: "HTML", level: "Advanced" },
        { img: "tailwind_CSS.jpg", name: "Tailwind CSS", level: "Advanced" },
        { img: "React.js.jpg", name: "React.js", level: "Intermediate" },
        { img: "Django.jpg", name: "Django", level: "Advanced" },
        { img: "DRF.jpg", name: "Django Rest Framework", level: "Advanced" },
        { img: "curd.jpg", name: "CRUD", level: "Advanced" },
        { img: "MySQL.jpg", name: "MySQL", level: "Intermediate" },
        { img: "Git & GitHub.jpg", name: "Git & GitHub", level: "Intermediate" },
        { img: "Azure.jpg", name: "Azure", level: "Beginner" },
        { img: "Docker.jpg", name: "Docker", level: "Beginner" },
      ].map((skill, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-44 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 border border-white/20 flex flex-col items-center"
        >
          <img
            src={`${process.env.PUBLIC_URL}/${skill.img}`}
            alt={skill.name}
            className="w-20 h-20 mb-4 object-cover rounded-full"
          />
          <h3 className="font-bold text-lg text-white text-center">{skill.name}</h3>
          <p className="text-sm text-gray-300">{skill.level}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects"
  className="min-h-screen bg-gradient-to-r from-green-500 to-green-700 pt-32 scroll-mt-24">

        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-white">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Project 1: Quiz App</h3>
              <p className="text-gray-700 leading-relaxed">
                Built an interactive quiz app using React.js with reusable components. • Managed questions, score and timer using React hooks. • Loaded quiz data through REST APIs and handled loading and errors.• Designed a clean, responsive UI with Tailwind CSS. • Added result summary, progress tracking and smooth navigation. • Used React Router for page flow and GitHub for version control
                <br />                <br />
                <span className="text-indigo-600 font-semibold">Technologies:</span> Git, React.js
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Project 2: Cashier app</h3>
              <p className="text-gray-700 leading-relaxed">
                Built a restaurant cashier app with React.js for fast, responsive order handling. • Developed backend using Node.js and Express.js with full CRUD APIs.• Stored orders, menu items and billing data in MongoDB.• Tested all backend routes using Postman to ensure correct API responses.• Integrated frontend and backend for smooth order processing and billing flow  
                <br />
                <span className="font-semibold">Use Case:</span> Useful for restaurants to manage orders and billing efficiently.  
                <br />
                <span className="text-indigo-600 font-semibold">Technologies:</span> Node.js,Express.js, React.js and MongoDB.
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Project 3: my blog project-by-Django</h3>
              <p className="text-gray-700 leading-relaxed">
                A blogging platform where users can create, edit, and delete blog posts.  
                Features include user authentication, comments, and categories for better organization.
                <br />
                <span className="text-indigo-600 font-semibold">Technologies:</span> Backend: Python (Django), React, OpenAI API, Azure for deployment.
              </p>
            </div>
          
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Project 4: Retail Management System</h3>
              <p className="text-gray-700 leading-relaxed">
                Developed a web application for retail management.  
                Features: Manage Products, Customers, Orders, and Users.  
                <br />
                <span className="font-semibold">Use Case:</span> Useful for library/e-library to identify customers and manage purchases.  
                <br />
                <span className="text-indigo-600 font-semibold">Technologies:</span> Express.js, Node.js.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Project 5: AI Recruitment Management System</h3>
              <p className="text-gray-700 leading-relaxed">
                An AI-powered platform that automates hiring by analyzing job descriptions, ranking resumes, recommending top candidates, and even sourcing profiles from job portals with automated outreach.  
                <br />
                <span className="text-indigo-600 font-semibold">Technologies:</span> Backend: Python (Django), React, OpenAI API, Azure for deployment.
              </p>
            </div>
           
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="my-achievements" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 pt-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">My Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 w-full max-w-6xl">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-500 border border-white/20 flex flex-col items-center">
            <img src={`${process.env.PUBLIC_URL}/course.jpg`} alt="Python Certificate" className="w-40 h-40 object-cover rounded-lg mb-4 shadow-md" />
            <h3 className="text-xl font-semibold text-white mb-2">Python Full Stack Course</h3>
            <p className="text-gray-200 text-center">Completed at The WingSpan Global Solutions.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-500 border border-white/20 flex flex-col items-center">
            <img src={`${process.env.PUBLIC_URL}/intership.jpg`} alt="Internship Certificate" className="w-40 h-40 object-cover rounded-lg mb-4 shadow-md" />
            <h3 className="text-xl font-semibold text-white mb-2">Think Algo Club Internship</h3>
            <p className="text-gray-200 text-center">Completed at The Think Algo Club with hands-on experience in web development.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-500 border border-white/20 flex flex-col items-center">
            <img src={`${process.env.PUBLIC_URL}/TEN Intership Certificate.png`} alt="Internship Certificate" className="w-40 h-40 object-cover rounded-lg mb-4 shadow-md" />
            <h3 className="text-xl font-semibold text-white mb-2">TEN Internship</h3>
            <p className="text-gray-200 text-center">Completed at The Entrepreneurship Network experience in frontend development.</p>
          </div>
        </div>
        <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">View Certificates</button>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
  <div className="container mx-auto px-6 text-white">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">📬 Get in Touch</h2>
    <div className="flex flex-col md:flex-row items-start justify-between gap-12">

      {/* Profile Image */}
      <div className="w-full md:w-1/5 flex justify-center md:justify-start">
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Kamaleshwar" className="w-64 h-80 object-cover border-4 border-yellow-300 shadow-lg rounded-lg -mt-10 md:-mt-20"/>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <p className="text-lg md:text-xl mb-4">
          I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <p className="text-md text-gray-300 mb-6">
          You can also reach me at: 
          <a href="mailto:pkamallife@gmail.com" className="text-yellow-300 hover:underline ml-2">nagaeshwar98.com</a>
        </p>
        <p className="text-lg text-gray-200 mb-8">Phone: <span className="text-yellow-200">+91 7989390757</span></p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="https://github.com/Gayathrieshwar99" className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-black transition duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/gayathrieshwar99/" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">LinkedIn</a>
          <a href="https://x.com/pkamal991107LG" className="flex items-center gap-2 bg-sky-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-sky-700 transition duration-300">Twitter</a>
          <button onClick={() => window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank')} className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">View My Resume</button>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>© {new Date().getFullYear()} Lakshmi Kamaleshwar Parnandhi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
