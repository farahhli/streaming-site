const express = require('express');
const app = express();

const port = process.env.PORT || 3000;  // Use the port provided by Heroku or default to 3000 locally

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
