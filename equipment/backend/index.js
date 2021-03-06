var express = require('express')
var userRoute = require('./routes/user.route');
var equipmentRoute = require('./routes/equipment.route');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var md5 = require('md5'); 
console.log(md5("123"));


var authRoute = require('./routes/auth.route');
var middlewareAuth = require('./middlewares/auth.middleware');
var middlewareAdmin = require('./middlewares/admin.middleware');

// getting-started.js
var mongoose = require('mongoose');
// , useUnifiedTopology: true  // Ben trong mongoose.connect
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/express-demo', { useNewUrlParser:true, useUnifiedTopology: true})
.then(() => {
  console.log("Successfully connect to MongoDB.");
  initial();
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
});


const db = require("./models");
const Role = db.role;

const app = express()
const port = 3000

//PUG
app.set('views', './views') //views: the directory where the template files are located
app.set('view engine', 'pug')   //view engine: the template engine to use

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

app.use(cookieParser("hoanghon"));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

//File PUBLIC
app.use(express.static('public'));

// Open for back to normal
// app.get('/', middlewareAuth.requireAuth, function (req, res) {
//   res.render('index', {
//     userId: req.signedCookies.userId,
//   });
// })

app.get('/', function (req, res) {
  // res.render('index');
  res.send("Hello World");
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
// app.use('/api/users', middlewareAuth.requireAuth, userRoute);
app.use('/api/equipments', equipmentRoute);
// app.use('/api/equipments', middlewareAuth.requireAuth, middlewareAdmin.checkAdmin, equipmentRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Add ROLES
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}