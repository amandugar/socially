const mongoose = require("mongoose")

async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://amandugar:amandugar@cluster0.y6axd.mongodb.net/socialapp?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    )
    console.log("Mongodb connected")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDb
