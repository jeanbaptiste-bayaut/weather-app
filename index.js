import 'dotenv/config'
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const app = express();

import { router } from './app/routers/router.js';

app.set('view engine', 'ejs');
app.set('views', './app/views')



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })