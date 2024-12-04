const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(require('cors')());

app.get('/api/hello', (req, res) => {
    res.send('Hello from Node.js!');
});

app.listen(port, () => {
    console.log(`Node.js server running at http://localhost:${port}`);
});
