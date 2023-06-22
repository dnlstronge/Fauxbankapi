import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Fake banking api server');
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})