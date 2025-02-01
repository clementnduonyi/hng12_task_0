const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());

// GET request route
app.get('/', (req, res) => {
    const response = {
        email: 'meggaclem@gmail.com',  // My HNG12 workspace email
        current_datetime: new Date().toISOString(),  // ISO 8601 format
        github_url: 'https://github.com/clementnduonyi/hng12_task_0'  // GitHub repo URL
    };
    res.status(200).json(response);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
