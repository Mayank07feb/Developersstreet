const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const seoData = require('./seoData');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.locals.RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
app.locals.siteName = 'Developers Street';

/* SEO middleware */
app.use((req, res, next) => {
  const route = req.path.replace('/', '') || 'home';
  res.locals.title = seoData[route]?.title || 'Developers Street';
  res.locals.description =
    seoData[route]?.description ||
    'Developers Street provides scalable web and mobile app development, SEO, and digital marketing solutions.';
  next();
});

/* Pages */
app.get('/', (req, res) => res.render('index'));
app.get('/services', (req, res) => res.render('services'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));

/* LEGAL PAGES */
app.get('/privacy-policy', (req, res) => res.render('privacy'));
app.get('/terms-and-conditions', (req, res) => res.render('terms'));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message from ${name} (${email}): ${message}`);
  res.send('Thank you for contacting Developers Street!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
