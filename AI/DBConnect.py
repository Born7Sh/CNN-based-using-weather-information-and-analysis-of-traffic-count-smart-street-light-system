# -*- coding: utf-8 -*-
"""
Created on Fri Jun 18 14:24:32 2021

@author: HSJ
"""

import pymysql

class DBConnect:
    def __init__(self):
        self.db = pymysql.connect(host = '13.125.25.248', user = 'root',password = 'wsp159159!',db = 'nodejs',charset = 'utf8')
        self.cursor = self.db.cursor()
        
    def getDb(self):
        return self.db
    
    def getCursor(self):
        return self.cursor