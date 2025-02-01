const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());

// Route to handle the GET request
app.get('/', (req, res) => {
    const response = {
        email: 'your-email@example.com',  // Replace with your email
        current_datetime: new Date().toISOString(),  // ISO 8601 format
        github_url: 'https://github.com/yourusername/your-repo'  // Replace with your GitHub repo URL
    };
    res.status(200).json(response);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
