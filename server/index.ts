import express from "express";
const app = express();
const PORT = 5000

app.get("/api", (req:any, res: any) => 
    res.json({"users" : ["userOne", "userTwo"]})
)

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})