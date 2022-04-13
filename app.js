// import and variables
const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//connect to the  mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));


//listen to port
app.listen(port, () => {

    console.log(`listening on port ${port}`);

}
);


// register the view engine
app.set('view engine', 'ejs'); // set view engine to ejs
app.set ('views', './views'); // set views folder
app.use ("/",express.static('static')); // set static folder








//render the intro page [ the first page the user see ]
app.get('/', (req, res) => {
    res.render  ('intro'), {
        };
      
    
});
//render the loginPage
app.get('/sign-in', (req, res) => {
    
    res.render  ('sign-in');
  //chack if the username and password currently exist in the database and if they do, redirect to the home page
    User.findOne({ username: 'admin' }, function(err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            res.redirect('/home');
        }
    }
    );

    
});
//render the registerPage
app.get('/sign-up', (req, res) => {
    res.render  ('sign-up');
});
// 404 page - if the user enter a wrong url return this page
app.use((req, res) => {
    res.status(404).render('404');
}



);