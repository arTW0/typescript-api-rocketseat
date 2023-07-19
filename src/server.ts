import express from 'express'

const app = express()

app.get("/", (req, res) => {
  return res.json({ message: "Hello World - NLW04" })
})

app.post("/courses", (req, res) => {
  const { name } = req.body

  return res.json({ name })
})

app.listen(3333, () => console.log("Server is running!"))