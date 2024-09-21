const express = require('express');
const app = express();

// Middleware (optional) - Serves static files if needed
app.use(express.static('public'));

// Root route (you can add more routes as needed)
app.get('/', (req, res) => {
  res.send('Hello, welcome to the streaming site!');
});

// Listen on the dynamic port Heroku provides (or default to 3000 for local development)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
