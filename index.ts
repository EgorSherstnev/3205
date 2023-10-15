require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import router from './routes/index';
const cors = require('cors');

const PORT = process.env.PORT || 7000;

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use('/api', router)
// app.get('/', (req: Request, res: Response) => {
//    res.send("Сервер Работает");
// });

const start = async () => {
   try {
      app.listen(PORT, () => console.log(`Server started on ${PORT}`));
   } catch (e) {
      console.log(e);
   }
}

start();
