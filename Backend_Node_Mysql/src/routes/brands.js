const express =require('express');
const router = express.Router();
 
const brands=require('../controllers/brands')
 

router.get("/:id?", brands.list)
router.post("/", brands.save)
router.put("/:id", brands.update)
router.delete("/:id", brands.deleted)

module.exports=router;