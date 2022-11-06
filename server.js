require("dotenv").config()
const cors = require("cors")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3500

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "cointerior",
    backend: true,
    age: 18,
    bio: "I'm Ijaola Omoniyi, I'm a backend NodeJS developer"
  })
})

/*const validOperation = (req, res, operation_type) => {
  const slackUsername = "cointerior"
  if (operation_type == "addition") {
    return res.status(200).json({ slackUsername, result: `${x + y}`, operation_type })
  } else if (operation_type == "subtraction") {
    return res.status(200).json({ slackUsername, result: `${x - y}`, operation_type })
  } else  if (operation_type == "multiplication") {
    return res.status(200).json({ slackUsername, result: `${x * y}`, operation_type })
  } else {
    return res.status(400).json({ "error": "Enter a valid operation"})
  } 
} */

app.post("/", (req, res) => {
  const { operation_type } = req.body
  let { x, y } = req.body
  console.log(x)
  console.log(y)
  console.log(x)
  console.log(y)
  const opt = ["addition", "subtraction", "multiplication"]
  if (!operation_type || !x || !y) {
    return res.status(400).json({ "error": "You need to provide the correct information"})
  }
  if (typeof x === "string" || typeof y === "string") {
    return res.status(400).json({ "error": "x and y must be a number or integer datatype NOT string"})
  }

  if (!opt.includes(operation_type)) {
    return res.status(400).json({ "error": "Enter a valid operation"})
  }
  if (operation_type == "addition") {
    return res.status(200).json({ slackUsername: "cointerior", result: `${x + y}`, operation_type })
  } else if (operation_type == "subtraction") {
    return res.status(200).json({ slackUsername: "cointerior", result: `${x - y}`, operation_type })
  } else if (operation_type == "multiplication") {
    return res.status(200).json({ slackUsername: "cointerior", result: `${x * y}`, operation_type })
  } else {
    res.status(400).json({ "error": "Enter a valid operation"})
  } 
//  validOperation(operation_type)
  console.log("correct")
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})