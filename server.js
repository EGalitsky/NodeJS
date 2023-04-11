const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE_LOCAL;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('DB connected');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running');
});
