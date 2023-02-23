const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static('public'));

// Set up database connection
// mongoose.connect('mongodb://localhost/social-network', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

// mongoose.set('strictQuery', true)

// Define API routes
app.use('/api/users', require('./routes/api/user-routes'));
app.use('/api/thoughts', require('./routes/api/thought-routes'));

db.once('open', ()=> {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
