// Router
const router = require("express").Router();
// GET
router.get('/', (req, res) => {
    res.render("index");
});
// Export Router
module.exports = router;