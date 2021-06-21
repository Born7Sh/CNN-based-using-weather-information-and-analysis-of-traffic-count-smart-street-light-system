#python3

import socket

HOST = '192.168.10.106'
PORT = 8092

while True:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((HOST, PORT))
    
    f = open("helloClient.txt", 'r')
    line = f.readline()
    print(line, "txt is : ")
    f.close()
    
    s.send(line.encode(encoding='utf_8', errors='strict'))
    data = s.recv(1024)
    print ('result: ' + data.decode())
    s.close()
