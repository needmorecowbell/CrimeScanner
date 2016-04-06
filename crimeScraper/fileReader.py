myfile= open("log.txt")

data=myfile.readlines()
for x in range(0,data.__len__()):
    eles= data[x].split(';')
    print(eles[4])#print location
myfile.close()