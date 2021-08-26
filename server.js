// Requirements
const path = require("path")
const morgan = require("morgan");
const express = require("express");
const app = express();
// Configuration
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, 'views')));
app.set("port", process.env.PORT || 3000);
// Template Engine
app.set("views", path.join(__dirname, '/views'));
app.set('view engine', 'pug');
// Routes
app.use(require('./routes/index'));
// Start server
app.listen(app.get("port"), () => {
    console.log("Server on port:", app.get("port"));
});
