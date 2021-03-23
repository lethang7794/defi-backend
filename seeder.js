var seeder = require('mongoose-seed');

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
// const BACKEND_URL = process.env.BACKEND_URL;

// Connect to MongoDB via Mongoose
seeder.connect(MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels(['./models/user.js']);

  // Clear specified collections
  seeder.clearModels(['User'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    /********************************** USER MODEL **************************************/
    model: 'User',
    documents: [
      {
        name: 'Admin',
        email: 'admin',
        password: 'admin',
      },
      {
        name: 'Harry',
        email: 'harry@potter.com',
        password: 'password',
      },
      {
        name: 'Ron',
        email: 'ron@weasley.com',
        password: 'password',
      },
      {
        name: 'Hermione',
        email: 'hermione@granger.com',
        password: 'password',
      },
    ],
  },
];
