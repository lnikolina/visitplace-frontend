import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.send("Hello world u browser") //ispis u browser ide preko res , .send ispisuje string
   console.log("Hello world") //ispi u konzolu
}) 

app.listen(port, () => console.log ("Slušam na portu ${port}!"))