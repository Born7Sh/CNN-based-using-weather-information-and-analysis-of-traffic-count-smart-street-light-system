#python3
import socket
import sys

HOST = '192.168.25.59' #all available interfaces
#222.237.154.71
PORT = 8001
Lightvar = 0

#1. open Socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print ('Socket created')

s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

#2. bind to a address and port
try:
    s.bind((HOST, PORT))
except socket.error as msg:
    print ('Bind Failed. Error code: ' + str(msg[0]) + ' Message: ' + msg[1])
    sys.exit()

print ('Socket bind complete')

#3. Listen for incoming connections
s.listen(10)
print ('Socket now listening')


#keep talking with the client
while 1:
    #4. Accept connection
    conn, addr = s.accept()
    print ('Connected with ' + addr[0] + ':' + str(addr[1]))
    
    #5. Read/Send
    data = conn.recv(1024)
    if not data:
        break
    conn.sendall(data)    
    print(data.decode())  
    
    if True:
        f = open("helloClient.txt", 'w')
        f.write(data.decode())
        f.close
        
        f = open("helloClient.txt", 'r')
        line = f.readline()
        print(line, "txt is : ")
        f.close()      
    
conn.close()
s.close()


