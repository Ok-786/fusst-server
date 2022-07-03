const { addCompany } = require("../controllers/user.js");
const router = require("express").Router();

router.post("/company", addCompany);
router.get("/company", () => {
    return res.json({ message: "New Company Added Sucessfully" });
});

module.exports = router;
