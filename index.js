import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { adminRouter } from "./routes/admin.route";

const app = express();

app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: false
  })
);

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/admin", adminRouter);

app.use("/api", function(req, res, next) {
  //console.log(req)
  console.log(`A new request was received at ${new Date().toLocaleString()}`);
  res.send(`Thanks for hitting my api`);
  next();
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

mongoose
  .connect(
    `mongodb+srv://akprice95:kamana24@cluster0-gpmr6.mongodb.net/products?retryWrites=true&w=majority`
  )
  .then(result => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.log(err));
