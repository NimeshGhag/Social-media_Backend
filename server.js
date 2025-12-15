require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/db/db");
const port = process.env.PORT;

connectToDB();

app.listen(port, () => {
  console.log("Server is running on port");
});
