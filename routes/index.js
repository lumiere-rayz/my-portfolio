var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
router.get('/', (req, res) => res.render('home', { title: 'Home' }));
router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));
router.get('/projects', (req, res) => res.render('projects', { title: 'Projects' }));
router.get('/services', (req, res) => res.render('services', { title: 'Services' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact' }));
router.post('/submit_contact', (req, res) => {
  // Handle the form data here...

  // After processing, redirect to home:
  res.redirect('/');
});


module.exports = router;
