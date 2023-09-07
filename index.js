const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/userRouter");
const conn = require("./db/conn");
app.use(express.json());
app.use("/users", routes)
conn.sync().then(()=>{
    app.listen(PORT);
    console.log("Listennig on 3000")
}).catch((error) => console.log(error))

module.exports = app;