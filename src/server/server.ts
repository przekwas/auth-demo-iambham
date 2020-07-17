import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as passport from 'passport';
import routes from './routes';

import './middlewares/passport';

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(express.json());
app.use(routes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));