/*
  공공데이터 포털에서 제공하는 	한국환경공단_에어코리아_대기오염통계 현황을 이용
*/

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');
const config = require('../config.json');

require('moment-timezone');


router.get('/', function(req, res, next) {
  const url1 = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst';
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
  const key = config.finedust;

  moment.tz.setDefault("Asia/Seoul");
  const date = moment().format('YYYYMMDD');
  const base_time = moment().format('HH')+'00';
  
  // console.log(base_time);
  // console.log(moment().format('YYYY-MM-DD'));
  // console.log(moment().format('HH:00:00'));
  const db_timev = moment().format('HH:00:00');
  const db_datev = moment().format('YYYY-MM-DD');
  const sido = '%EA%B2%BD%EA%B8%B0';
  const nx = '56';
  const ny = '122';
  const dataType = 'XML';

  // url
  const all_url = url1 + '?serviceKey=' + key +  '&returnType=' + dataType + '&sidoName=' 
  + sido + '&searchCondition=hour' + '&numOfRows=100';
  //console.log(all_url);
  

  
  request(all_url, function (err, res, body) {
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xhr = new XMLHttpRequest;
    xhr.open('GET', all_url);
    console.log(all_url);
    


    xhr.onreadystatechange = function() { // 요청에 대한 콜백
      $ = cheerio.load(body);
      if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
        if (xhr.status === 200 || xhr.status === 201) {
         // console.log(document.getElementById("pm25Value").innerHTML = httpRequest.responseText);
          fine10 = [];
          fine25 = [];
          i=0;
          // console.log(xhr.responseText);
          console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
          $('item').each(function (idx) {
            fine10[i] = $(this).find('pm10Value').text();
            fine25[i] = $(this).find('pm25Value').text();
            i=i+1;
          });
        } else {
          console.error(xhr.responseText);
          console.log('err');
        }
        console.log(fine10[13] + " " + fine25[13]+ " " + db_datev + " "+ db_timev); 
        connection.query("UPDATE `weather` set `fine_dust10` = " + `'${fine10[13]}'` + ",`Findust2_5` = " + `'${fine25[13]}'` + "WHERE `datev` = " + `'${db_datev}'` + "AND `timev` ="  + `'${db_timev}'`);
        connection.end(()=>{
          console.log("connection end");
        });
      }
    };
    xhr.open('GET', all_url); // 메소드와 주소 설정
    xhr.send();
    
 
    
  });
  
});

module.exports = router;