const express = require("express");
const app = express();
const routes = require("./routes/routing");

app.use(routes);
// console.log(routes);

app.use(bodypars);

app.listen(4000, () => {
    console.log("node server is listening at port 4000");
});