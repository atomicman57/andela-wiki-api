import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';


// Set up the express app
const app = express();

// // Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

export default app;