const express = require('express');
const path = require('path');
const app = express();

// Serve static files from current directory
app.use(express.static(__dirname));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Quiz Website running at http://localhost:${PORT}`);
});

function showSection(section) {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';

    document.querySelector(`.${section}`).style.display = 'block';
}


