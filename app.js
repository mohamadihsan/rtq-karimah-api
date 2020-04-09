/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Main / Server ]
 */

const express       = require('express'); // library express
const bodyParser    = require('body-parser'); // turns response into usable format
const cors          = require('cors'); // allow or disallow cross-site communication
const fs            = require('fs');
const helmet        = require('helmet'); // create header that protect from attacks (security)
const morgan        = require('morgan'); // add some logging capabilities 
const path          = require('path');
const rfs           = require('rotating-file-stream'); // combined log file per day in /log

// import route Mobile
const authRoutesMobile              = require('./routes/mobile/auth');
const authRoutesMobileTransaction   = require('./routes/mobile/transaction');

// import route
const authIndex             = require('./routes/');
const authRoutes            = require('./routes/auth');
const roleManagementRoutes  = require('./routes/role-management');

const app = express();

// cors middleware
// const whitelist = [ 'http://localhost:3000', 'http://198.168.1.88:3000' ]
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         }else{
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// Create LOG
// const logDirectory  = path.join(__dirname, 'log')
// // ensure log directory exists
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// // create a rotating write stream
// var globalLogStream = rfs.createStream('global.log', {
//     interval: '1d', // rotate daily
//     path: logDirectory,
//     compress: "gzip" // compress rotated files
// })
// // write log into file on folder log & show in terminal
// app.use(morgan('combined', { stream: globalLogStream }));


//body parsing middleware
app.use(helmet());
// app.use(cors(corsOptions));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// show log in terminal without write log into file
app.use(morgan('combined'));


// Route API Mobile
app.use('/api/v1/m/', authRoutesMobile);
app.use('/api/v1/m/', authRoutesMobileTransaction);

// Route API
app.use('/', authIndex);
app.use('/api/v1/', authRoutes);
app.use('/api/v1/', roleManagementRoutes);

// Running Server on Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));