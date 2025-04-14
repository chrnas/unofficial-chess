const express = require('express');
const axios = require('axios'); // For fetching the API stream
const cors = require('cors');
const app = express();

app.use(cors())
// Serve static files (optional, in case you have a frontend)
app.use(express.static('public'));
// Set up a route to proxy the Lichess stream
app.get('/', async (req, res) => {
    try {
        // Set headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Open a connection to the Lichess API
        const lichessStream = await axios.get('https://lichess.org/api/tv/feed', {
            responseType: 'stream',
        });

        // Forward the stream to the client
        lichessStream.data.on('data', (chunk) => {
            const eventData = chunk.toString();
            res.write(`data: ${eventData}\n\n`); 
        });

        // Handle stream end
        lichessStream.data.on('end', () => {
            res.end();
        });

        // Handle stream errors
        lichessStream.data.on('error', (err) => {
            console.error('Error streaming data:', err);
            res.end();
        });
    } catch (error) {
        console.error('Error connecting to Lichess API:', error.message);
        res.status(500).send('Failed to connect to Lichess API');
    }
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
