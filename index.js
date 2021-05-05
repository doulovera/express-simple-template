// Requirements
const path = require("path")
const express = require('express');
const app = express();
// Configuration
app.use(express.static(path.join(__dirname, 'views')));
app.set("port", process.env.PORT || 3000);
// Routes
app.use(require('./routes/index'));
// Start server
app.listen(app.get("port"), () => {
    console.log(`Server on port: ${app.get("port")}`);
});
