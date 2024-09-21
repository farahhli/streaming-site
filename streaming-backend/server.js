const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // Heroku sets process.env.PORT dynamically

// Serve static files (if applicable)
app.use(express.static('public')); // If you have static files to serve

// Define routes (Example route)
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Bind to dynamic PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
