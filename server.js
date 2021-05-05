// Requirements
const express = require('express');
const app = express();
// Configuration
app.use("port", process.env.PORT || 3000);
// Routes
app.use(require('./routes/index.js'));
// Start server
app.listen(app.get("port"), () => {
    console.log(`Server on port: ${port}`);
});