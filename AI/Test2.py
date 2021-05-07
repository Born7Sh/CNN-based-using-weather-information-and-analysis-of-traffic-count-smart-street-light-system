
# -*- coding: utf-8 -*-
"""
Created on Tue Feb  2 14:30:00 2021

@author: HSJ
"""
#import RPi.GPIO as GPIO

class StrLight:
    brt=0
    is_Led_On = False
    is_On = False
    is_Ok = True
    p_num = 0
    c_num = 0
    total_num =0
    frm_num = 0
    led_pin = 19
    def __init__(self): 
        print("새 데이터 생성")
    
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
        print("서버통신완료")
    
    def getLedStatus(self):
        return self.is_Led_On
    
    def setLedPin(self,pin):
        self.led_pin = pin
        
    def setLedBrt(self,brt):
        self.brt = brt
        if brt>=100:
            self.brt = 99
        """
        self.pwm_led.ChangeDutyCycle(self.brt)
        """
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