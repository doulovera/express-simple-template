// Requirements
const express = require('express');
const app = express();
// Configuration
app.use("port", process.env.PORT || 3000);
// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});
// Start server
app.listen(app.get("port"), () => {
    console.log(`Server on port: ${port}`);
});