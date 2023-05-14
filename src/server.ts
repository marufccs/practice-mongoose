import mongoose from "mongoose";
import app from "./app";

const port = 5000;

// Database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }
}

main();
