import { createCustomerController } from "../controllers/createCustomer";
import { getCustomersController } from "../controllers/getCustomers";
import { getCustomerController } from "../controllers/getCustomer";




const express = require("express");

const router = express.Router();

console.log("customers route");

router.get("/", getCustomersController)
router.post("/", createCustomerController)

router.get("/:id", getCustomerController)


module.exports = router;