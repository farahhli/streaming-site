const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/stream', (req, res) => {
  res.send('Streaming API endpoint');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});