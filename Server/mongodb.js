const mongoose = require('mongoose');
//connect to the moongoose 
mongoose.connect('mongodb://localhost/test');
//create a schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String
});
//create a model
const User = mongoose.model('User', userSchema);
//create a user
const user = new User({
    username: 'admin',
    password: 'admin'
});
//save the user
user.save(function(err, user) {
    if (err) {
        console.log(err);
    }
    console.log(user);
}
);
//find the user
User.findOne({ username: 'admin' }, function(err, user) {
    if (err) {
        console.log(err);
    }
    console.log(user);
}
);
