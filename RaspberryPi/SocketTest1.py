# python3
import socket
import sys
import RPi.GPIO as GPIO
import time

HOST = '192.168.10.102'  # all available interfaces
# 222.237.154.71
PORT = 8092
Lightvar = 0
is_Led_On = False
led_pin = 18

# 1. open Socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print('Socket created')

s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
is_Led_On = True
GPIO.setmode(GPIO.BCM)

green = 27
red = 17
blue = 22

GPIO.setup(red, GPIO.OUT)
GPIO.setup(green, GPIO.OUT)
GPIO.setup(blue, GPIO.OUT)

Freq = 100

RED = GPIO.PWM(red,Freq)
GREEN = GPIO.PWM(green, Freq)
BLUE = GPIO.PWM(blue, Freq)

RED.start(100)
GREEN.start(100)
BLUE.start(100)

# 2. bind to a address and port
try:
    s.bind((HOST, PORT))
except socket.error as msg:
    print('Bind Failed. Error code: ' + str(msg[0]) + ' Message: ' + msg[1])
    sys.exit()

print('Socket bind complete')

# 3. Listen for incoming connections
s.listen(10)
print('Socket now listening')

# keep talking with the client
while 1:
    # 4. Accept connection
    conn, addr = s.accept()
    print('Connected with ' + addr[0] + ':' + str(addr[1]))

    # 5. Read/Send
    data = conn.recv(1024)
    if not data:
        break
    conn.sendall(data)
    print(data.decode())
    
    RED.ChangeDutyCycle(100-int(data.decode()))
    GREEN.ChangeDutyCycle(100-int(data.decode()))
    BLUE.ChangeDutyCycle(100-int(data.decode()))

conn.close()
s.close()


