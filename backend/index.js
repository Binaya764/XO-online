const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows your HTML file to talk to this server
app.use(express.json()); // Allows the server to read JSON data

// A "Route" to receive game results
app.post('/game-result', (req, res) => {
    const { winner, moves } = req.body;
    
    console.log(`Game Over! Winner: ${winner}, Total Moves: ${moves}`);
    
    // For now, we just send a success message back
    res.json({ message: "Result received by the server!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});