const express = require("express");
const router = express.Router();

const {
  readContact,
  createContact,
  editContact,
  deleteContact,readContactbyid
} = require("../controller/contact");

router.get("/contacts", readContact);
router.get("/contacts/:id", readContactbyid);
router.post("/contacts", createContact);
router.put("/contacts/:id", editContact);
router.delete("/contacts/:id", deleteContact);

module.exports = router;
