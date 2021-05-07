# -*- coding: utf-8 -*-
"""
Created on Tue Mar 16 11:53:55 2021

@author: HSJ
"""

import datetime
import pymysql

class Weather:
    
   # def __init__(self): 
        
        
    def setWeather(self,weathers):
        self.datev = weathers[0][1]
        self.timev = weathers[0][2]
        self.temperature = weathers[0][3]
        self.humidity = weathers[0][4]
        self.wind_speed = weathers[0][5]
        self.precipitation_type = weathers[0][6]  
        self.fine_dust10 = weathers[0][7]
        self.fine_dust2_5 = weathers[0][8]

    def getTemperature(self):
        return self.temperature
    
    def getPrec_type(self):
        return self.precipitation_type
    
    def getHumidity(self):
        return self.humidity

    def getDust25(self):
        return 15
    
    def getWeather(self,db,cursor):
        sql = """select * from weather where datev = %s and timev = %s"""
        now = datetime.datetime.now()
        del_now = datetime.timedelta(hours = 1)
        now = now-del_now
        nowstr = now.strftime('%Y-04-01 %H:00:00')
        dt = nowstr.split()
        cursor.execute(sql,(dt[0],dt[1]))
        self.weather = list(cursor.fetchall())
        db.commit()
        
        print(self.weather)
        self.setWeather(self.weather)
        
    
