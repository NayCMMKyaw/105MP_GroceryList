
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require ('bcrypt');
var jwt = require('jsonwebtoken');

const port = 8000;
const app = express();

const connection = mysql.createConnection({
    host: 'server2.bsthun.com',
    port: '6105',
    user: 'lab_1dqizu',
    password: 'whwVtiCCKueU0mc3',
    database: 'lab_blank01_1d3holy'
});
connection.connect(() => {
    console.log('Database is connected');
});
//export connection to use in other files
global.connection = connection;

//connect with frontend
// app.use(
//     cors({
//       origin: ['http://localhost:5174', 'http://localhost:5173'],
//       credentials: true,
//     })
//   );
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cookieParser());
app.use(express.json());

//for home page
app.get('/', require('./welcome.js'));

app.post('/signup', require('./signup.js'));

app.post('/login', require('./login.js'));
//to authorize usertoken and pass control to next routes
app.use((req, res, next) => {
    try{
        const token = req.cookies.UserToken;
        const decoded = jwt.verify(token, "my-secret-key");
        if (decoded) {
            res.locals.userId = decoded.userId;
            next();
        } else {
            res.json({
                success: false,
                message: "User is not logged in",
            });
        }
    } catch (error) {
        if ( error ) {
            return res.json({
                success: false,
                data: null,
                error: error.message,
            });
        }
    }
});

app.get('/me', require('./getUser.js'));

app.get('/mylist', require('./getAllLists.js'));

app.post('/item', require('./createItem.js'));

app.delete('/item', require('./deleteItem.js'));

app.patch('/item', require('./editItem.js'));

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
});