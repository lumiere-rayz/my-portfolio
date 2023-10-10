const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Assuming you have a 'views' folder where all your EJS templates reside.
const viewsDir = path.join(__dirname, 'views');

// Define your pages and the data they require (if any)
const pages = [
    { 
      template: 'home.ejs', 
      output: 'index.html', 
      data: { title: "Home Page" } // Title for the Home page
    },
    { 
      template: 'about.ejs', 
      output: 'about.html', 
      data: { title: "About Me" } // Title for the About Me page
    },
    { 
      template: 'projects.ejs', 
      output: 'projects.html', 
      data: { title: "My Projects" } // Title for the Projects page
    },
    { 
      template: 'services.ejs', 
      output: 'services.html', 
      data: { title: "Services I Offer" } // Title for the Services page
    },
    { 
      template: 'contact.ejs', 
      output: 'contact.html', 
      data: { title: "Contact Me" } // Title for the Contact page
    }
    // ... add other pages as required, ensuring you provide necessary data for each template
  ];
  

pages.forEach(page => {
  ejs.renderFile(path.join(viewsDir, page.template), page.data, {}, (err, str) => {
    if (err) throw err;
    
    // Assuming you have a 'public' directory where the static files will be saved.
    fs.writeFileSync(`public/${page.output}`, str);
    console.log(`Generated ${page.output} from ${page.template}`);
  });
});
