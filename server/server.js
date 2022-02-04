var cookieSession = require('cookie-session');
const express = require('express');
const helmet = require("helmet");

const app = express();
const port = 3000;

app.use(helmet());

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

app.get('/', function (req, res, next) {
    // Update views
    req.session.views = (req.session.views || 0) + 1
  
    // Write response
    res.end(req.session.views + ' views')
})


app.use('/', require('./route/postsRoute'));

app.listen(port, () => {
  console.log(`click me: http://localhost:${port}`)
})