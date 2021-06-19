const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const moment = require('moment');
const http = require('http');
const ejs = require('ejs');
const static = require('serve-static');

//한 번에 다 불러올 수 있게 통합하기
const Weather = require('./models/weather');
const {sequelize} = require('./models');

const weatherRouter = require('./routes/weather');
const finedustRouter = require('./routes/finedust');
//const loginRouter = require('../web/login');

const app = express();
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views',{
    express: app,
    watch: true,
});

sequelize.sync({ force: false})
    .then(() =>{
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.set('view engine','ejs');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/weather', weatherRouter);
app.use('/web',static(path.join(__dirname,'web')));
app.use('/finedust', finedustRouter);

app.get('/camera', function(req,res) {
    res.render('camera.ejs');
});

app.get('/statistics', async(req,res,next)=>{ // 2
    moment.tz.setDefault("Asia/Seoul");
    const db_datev = moment().format('YYYY-MM-DD');
    const db_timev = moment().subtract(1,'hour').format('HH:00:00');
    //const db_nowtime = db_timev.subtract(1, 'hours');
    var weather_value = "null";
    console.log(db_datev);
    console.log(db_timev);
    try{
        const weather = await Weather.findAll({
            attributes: ['temperature', 'precipitation_type','fine_dust10'], where: {datev: db_datev, timev: db_timev}
        });
        //finedust10 = weather[0].fine_dust10;
        if(weather[0].precipitation_type==0){
            weather_value = "Sunny";
        }else if(weather[0].precipitation_type==2 || weather[0].precipitation_type==6){
            if(weather[0].temperature<0)
                weather_value = "Rainy"
            else
                weather_value = "Snowy";
        }
        if(weather[0].precipitation_type==3 || weather[0].precipitation_type==7)
            weather_value = "Snowy";
        if(weather[0].precipitation_type==1 || weather[0].precipitation_type==4 || weather[0].precipitation_type==5)
            weather_value = "Rainy";
        console.log(weather[0].temperature, weather_value, weather[0].fine_dust10);
        res.render('statistics',{temp : weather[0].temperature, pty : weather_value, finedust: weather[0].fine_dust10});
    }catch(err){
        next(err);
    }
    
});
// app.get('/hello', function(req,res){ // 2
//     res.render('statics',{temp :'15'});
// });

app.use(function(req,res,next){
    if(!req.secure)
        res.redirect('http://13.125.25.248:3000/web/login.html');
});


app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
})

app.use((err,req,res,next) =>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트에서 대기 중');
});

