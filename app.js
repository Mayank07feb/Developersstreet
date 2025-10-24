const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const app = express();
const PORT = 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// ✅ Pass site key to all EJS templates
app.locals.RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;

// Routes
app.get('/', (req, res) => res.render('index', { title: 'Home' }));
app.get('/services', (req, res) => res.render('services', { title: 'Services' }));
app.get('/projects', (req, res) => res.render('projects', { title: 'Projects' }));
app.get('/about', (req, res) => res.render('about', { title: 'About' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact' }));

// Contact form POST
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message from ${name} (${email}): ${message}`);
  res.send('Thank you for contacting Developersstreet!');
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
