const express = require("express")
const app = express();
 const cors = require('cors')
 app.use(cors({
     origin: "http://127.0.0.1:3000"
 }))
app.get("/", (req, res) =>{
    res.json({name: "Code Bless You", Subscribe: true})
})

app.listen(5000,()=> console.log("Server is listeningon 5000"))
//npm install cors
//nodemon server