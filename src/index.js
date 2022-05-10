const express = require("express")
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 9898

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    req.json({ message: "Hallo Boy" })
})

app.listen(PORT, () => console.log("listening on port", PORT))
