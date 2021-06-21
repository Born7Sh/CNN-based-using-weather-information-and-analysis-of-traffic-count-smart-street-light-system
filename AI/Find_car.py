 # -*- coding: utf-8 -*-
"""
Created on Fri Jun 18 14:26:00 2021

@author: HSJ
"""

from DBConnect import DBConnect
from difflib import SequenceMatcher
from datetime import datetime

class Find_Car:
    
    car_num_list = []
    
    
    def __init__(self):
        self.DBConnect = DBConnect()
        self.db = self.DBConnect.getDb()
        self.cursor = self.DBConnect.getCursor()
        
    def getNumSeries(self):
        
        sql = """select carnum from car_num"""
        self.cursor.execute(sql)
        self.car_num_list_ori = list(self.cursor.fetchall())
        
        for i in range (0,len(self.car_num_list_ori)):
            self.car_num_list.append(self.car_num_list_ori[i][0])
    
    def findNumSeries(self,num_list):
        find_num_list = []
       
        for i in self.car_num_list:
            for j in num_list:
                ratio = SequenceMatcher(None,i,j).ratio()
                if ratio>0.7:
                   
                    find_num_list.append([i,j,ratio])
                    
        return find_num_list
    
    def updateNumDb(self,num_list,sl_code):
        now = datetime.now()
        name = now.strftime('%Y-%m-%d %H:%M:%S')
        
        #commit test
        for i in num_list:
            print(i[0])
            sql = """insert into detected_car_num(carnum,detected_sl_code,detected_carnum,detected_time) values(%s,%s,%s,%s)"""
            val = (i[0],sl_code,i[1],now)
            self.cursor.execute(sql,val)
            self.db.commit()
        
        return num_list
