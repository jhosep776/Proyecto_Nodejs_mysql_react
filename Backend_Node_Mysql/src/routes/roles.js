const express =require('express');
const router = express.Router();
 

const rol =require('../controllers/roles')

router.get("/:id?", rol.list)
router.post("/", rol.save)
router.put("/:id", rol.update)
router.delete("/:id", rol.deleted)

module.exports=router;