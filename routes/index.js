// Router
const { Router } = require("express");
const router = Router();
// GET
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
// Export Router
module.exports = router;