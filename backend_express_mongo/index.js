const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index")

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("api/v1",rootRouter);

app.listen(PORT,(err) => {
    if(err) console.log(err);
    console.log("Server listening on PORT : ",PORT);
});