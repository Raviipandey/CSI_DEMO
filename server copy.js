var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cors=require('cors');
app.use(cors());

var login=require('./routes/core_login');
var minutes=require('./routes/core_minutes');
var profile=require('./routes/core_profile');
var attendance=require('./routes/attendance');
var feedback=require("./routes/feedback");
var proposal=require('./routes/core_proposal');
var creative=require('./routes/creative');
var publicity=require('./routes/publicity');
var technical=require("./routes/technical");
var report=require("./routes/report.js");

app.use('/login',login);
app.use('/minutes',minutes);
app.use('/profile',profile);
app.use('/attendance',attendance);
app.use('/feedback',feedback);
app.use('/proposal',proposal);
app.use('/creative',creative);
app.use('/publicity',publicity);
app.use('/technical',technical);
app.use('/report',report);

app.get("/",(req,res)=>{
return res.send("Welcome to CSI-DBIT");
});

//Port Listening
app.listen(9000,(req,res)=>{
    console.log("Listening on 9000");
});
