const express = require("express");
const app = express.Router();

require("./endpoints/user")(app);
require("./endpoints/product")(app);
require("./endpoints/cart")(app);
require("./endpoints/order")(app);




module.exports = app;