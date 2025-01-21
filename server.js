const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3010;

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Simple route to render an HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Cosmic Coffee is brewing on http://localhost:${PORT}`);
});
