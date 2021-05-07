# -*- coding: utf-8 -*-
"""
Created on Tue Feb  2 14:30:00 2021

@author: HSJ
"""

import pymysql
import weather
from datetime import datetime

#import RPi.GPIO as GPIO


class StrLight:
    code = 1
    brt=0
    is_Led_On = False
    is_On = False
    is_Ok = True
    p_num = 0
    c_num = 0
    total_num =0
    frm_num = 0
    led_pin = 18
    w_brt = 0
    def __init__(self): 
        self.db = pymysql.connect(host = '13.124.150.142', user = 'root',password = 'wsp159159!',db = 'nodejs',charset = 'utf8')
        self.cursor = self.db.cursor()
    
    def setPeopleNum(self,num):
        self.p_num = num
    
    def addPeopleNum(self,num):
        self.p_num = self.p_num + num
    
    def setCarNum(self,num):
        self.c_num = num
    
    def addCarNum(self,num):
        self.c_num = self.c_num + num
        
    def setTotalNum(self):
        self.total_num = self.p_num + self.c_num
    
    def addFrmNum(self):
        self.frm_num = self.frm_num + 1
    
    def getFrmNum(self):
        return self.frm_num
    
    def getPeopleAvgNum(self):
       if self.frm_num != 0:
           return self.p_num/self.frm_num
    
    def getCarAvgNum(self):
        if self.frm_num != 0:
           return self.c_num/self.frm_num
       
    def getTotalNum(self):
        return self.total_num
    
    def turnOn(self,TF):
        self.is_On = TF
    def checkStatus(self,OK):
        self.is_Ok = OK
    
    def serv_Com(self):
        now = datetime.now()
        name = now.strftime('%Y-%m-%d %H:%M:%S')
        self.insert_road_statistic(name)
    
    def getLedStatus(self):
        return self.is_Led_On
    
    def setLedPin(self,pin):
        self.led_pin = pin
        
    def setLedBrt(self):
        self.brt = self.w_brt
        if self.brt>=100:
            self.brt = 99
        #self.pwm_led.ChangeDutyCycle(self.brt)
    
    def setLedOn(self):
        self.is_Led_On = True
        """
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.led_pin,GPIO.OUT)
        self.pwm_led = GPIO.PWM(self.led_pin,500)
        self.pwm_led.start(100)
        """   
   
    def setLedOff(self):
        self.is_Led_On = False
        """
        GPIO.cleanup()
        """  
    def getWeather(self):
        self.weat = weather.Weather()
        self.weat.getWeather(self.db,self.cursor)
        
    def insert_road_statistic(self,time):
        #update road_statistics set date_time = "2021-04-01 11:00:00", human_traffic = 5 where sl_code = 1;
        #sql = """insert into road_statistics(sl_code,date_time,human_traffic,vehicle_traffic,llumination) values(%s,%s,%s,%s,%s)"""
        sql = """insert into road_statistics_total(sl_code,date_time,human_traffic,vehicle_traffic,llumination) values(%s,%s,%s,%s,%s)"""
        val = (time,int(self.p_num),int(self.c_num),int(self.brt),self.code)
        self.cursor.execute(sql,val)
        self.db.commit()
        sql = """update road_statistics set date_time = %s, human_traffic = %s, vehicle_traffic = %s, llumination = %s where sl_code = %s"""
        val = (time,int(self.p_num),int(self.c_num),int(self.brt),self.code)
        self.cursor.execute(sql,val)        
        self.db.commit()
        
    def getStrInfo(self):
        sql = """select * from street_light where sl_codeid = %s"""
        self.cursor.execute(sql,self.code)
        self.info = list(self.cursor.fetchall())
        self.db.commit()
        self.setInfo(self.info)
        
    def setInfo(self,info):
        self.x = info[0][1]
        self.y = info[0][2]
        self.re_date = info[0][3]
        self.ins_date = info[0][4]
        self.fail_st = info[0][5]
        self.left_sl = info[0][6]
        self.right_sl = info[0][7]
    
    #def getBrt(self,sl_code):
        
        
    def calByTra(self):
        if (self.total_num>2 and self.total_num<=15):
            self.w_brt = self.w_brt + 2*self.total_num
        elif (self.total_num>15):
            self.w_brt = self.w_brt + 30
            
    def calByWea(self):
        if(self.weat.getDust25()>30 and self.weat.getDust25()<=70):
            self.w_brt = self.w_brt + 5
        elif(self.weat.getDust25()>70):
            self.w_brt = self.w_brt + 20
        
        if(int(self.weat.getPrec_type()) == 4):
            self.w_brt = self.w_brt + 20
        
        now = datetime.now()
        if(now.hour>=18 and int(self.weat.getPrec_type())>=3):
            self.w_brt = self.w_brt + 5*int(self.weat.getPrec_type())
        
    #def calByBrt(self):
        
    #def calByLR(self):

str1 = StrLight()

str1.getWeather()