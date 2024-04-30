const express = require("express");
const {
  getProduct,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getProduct);
router.get("/:id", getProductByID);
router.post("/", createProduct);

//update a product
router.put("/:id", updateProduct);
//delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
