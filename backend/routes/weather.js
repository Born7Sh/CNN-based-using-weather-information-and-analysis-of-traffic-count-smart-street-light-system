/*
  공공데이터 포털에서 제공하는 	동네예보 조회서비스를 이용
*/

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');
const config = require('../config.json')
require('moment-timezone');


router.get('/', function(req, res, next) {
  const url1 = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
  const connection = mysql.createConnection({
    host:config.host, user : config.user, password : config.password, database:config.database
  });
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);        
      return;    
    }
    console.log('connected as id ' + connection.threadId);
  });  
  //key정보를 숨겨야 함.
  const key = config.key;

  moment.tz.setDefault("Asia/Seoul");
  const date = moment().format('YYYYMMDD');
  const base_time = moment().format('HH')+'00';
  
  console.log(base_time);
  console.log(moment().format('YYYY-MM-DD'));
  console.log(moment().format('HH:00:00'));
  const db_timev = moment().format('HH:00:00');
  const db_datev = moment().format('YYYY-MM-DD');
  const nx = '56';
  const ny = '122';
  const dataType = 'XML';

  // url
  const all_url = url1 + '?serviceKey=' + key +  '&dataType=' + dataType + '&base_date=' + date + '&base_time=' + base_time + '&nx='
      + nx + '&ny=' + ny;
  //console.log(all_url);
  

  
  request(all_url, function (err, res, body) {
     $ = cheerio.load(body);
    console.log("정왕본동 날씨 예보");

    var i=0;
    var arr = [];
    $('item').each(function (idx) {
 
      arr[i] = $(this).find('obsrValue').text();
      i=i+1;
      
    });
    // connection.query("INSERT INTO `weather` (temperature, humidity, wind_speed, precipitation_type) VALUES(" + T1H + "," + REH + "," + WSD + ",", PTY);
    const PTY = arr[0];
    const REH = arr[1];
    const WSD = parseFloat(arr[7]);
    const T1H = parseFloat(arr[3]);
    connection.query("INSERT INTO `weather` set `datev` = " + `'${db_datev}'` + ", `timev` = " + `'${db_timev}'` + ", `temperature` = " + T1H + ", `humidity` ="+REH+",`wind_speed` ="+WSD+", `precipitation_type` = "+PTY);
    connection.end(()=>{
      console.log("connection end");
    });
  });
  
});

module.exports = router;
