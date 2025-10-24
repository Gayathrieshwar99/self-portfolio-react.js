 " Portfolio by React.js "



Part 1: Project setup \& Initialization:



1\.	Pre-requisites :

 	->Node.js \& npm: To install Node.js  in Ur system.

2\.   Create the React Application :

 	-> Open your terminal and run it:

 		"**npx create-react-app Self-portfolio-by-React.js** "

 	-> Change to ur project folder

 		"**cd Self-portfolio-by-React.js**"

 	->After installing the dependencies:

 		"**npm install** "

3\.  Install and Configure Tailwind CSS :

 	-> Install Tailwind and its peer dependencies:

 		 "**npm install -D tailwindcss postcss autoprefixer** "

 	=> Explanation:



 	-D → Installs as devDependencies (not needed in production, only during build/development).

 	tailwindcss → The main Tailwind framework.

 	postcss → A tool that transforms CSS with plugins (Tailwind works through PostCSS).

 	autoprefixer → A PostCSS plugin that automatically adds vendor prefixes (e.g., -webkit-, -moz-) 	for better browser support.

 	Essentially, this command installs all the components Tailwind requires to function within Vite.



 	-> Generate the tailwind.config.js and postcss.config.js files:

 		" **npx tailwindcss init -p** "



 	=>Explanation:



 	npx → Runs a package without needing to install it globally.

 	tailwindcss init → Creates a tailwind.config.js file.

 	This is where you customise your Tailwind setup (colours, fonts, dark mode, etc.).

 	-p → Shortcut to also create a postcss.config.js file along with it.

 	PostCSS config ensures Tailwind + Autoprefixer are used properly when building your project.



Configure Tailwind: Open tailwind.config.js and add the paths to all your template files.

 		-> JavaScript file

Add the Tailwind Directives: Replace the entire content of your ./src/index.css file with:

 		->css

Run the Development Server

 		-> " **npm run dev** "





Part 2: Project Structure \& Planning :

-> Organise your src folder like this:

SELF-PORTFOLIO

|-Build

 	|-static

 		|-css

 		|-js

|-assets-manifest.js

 	|-favicon.ico

 	|-index.html

 	|-logo192.png

 	|-logo512.png

 	|-manifest.json

 	|-profile.jpg

 	|-Resume.pdf|

 	|-robots.txt

|-node\_modules

|-Public

 	|-favicon.ico

 	|-index.html

 	|-logo192.png

 	|-logo512.png

 	|-manifest.json

 	|-profile.jpg

 	|-Resume.pdf|

 	|-robots.txt

|-src

 	|-App.css

 	|-App.js

 	|-App.test.js

 	|-index.css

 	|-index.js

 	|-logo.svg

 	|-reportWebVitals.js

 	|-setupTests.js

|-.eslintrc.js

|-.gitignore

|-package-lock.json

|-package.json

|-postcss.config.js

|-README.md

|-tailwind.confi.js



Part 3: Building the Components (The Code):



1.App.js (The Main Layout)

2.components/Header.jsx (Navigation Bar)

3.components/Hero.jsx (The Introduction Section)

4.components/ProjectCard.jsx (Reusable Component)

5.components/Projects.jsx (Uses ProjectCard)



Part 4: Development Server Start :

->" **npm start** " run it terminal

