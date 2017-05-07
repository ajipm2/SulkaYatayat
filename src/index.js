import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cons from 'consolidate';
import routes from './routes';

let app = express();

let APP_PORT = process.env.PORT || 8969;
let APP_HOST = process.env.HOST || '192.168.1.139';

app.engine('dust', cons.dust);

app.set('port',APP_PORT);
app.set('host',APP_HOST);
app.set('view engine', 'dust');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', routes);

app.listen(app.get('port'),app.get('host'), function () {
  console.log('Ready');
});

module.exports = app;