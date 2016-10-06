
import requests
import csv
from bs4 import BeautifulSoup


def logDataCSV(separated):
    myfile = open("log.txt", 'a')
    for element in separated:
        #print(element+" TEST")
        myfile.write(element+";")
    myfile.write("\n")
   
    
    
def separateResults(html):
    """Displays text of separated div tags in form of a
    dictionary ("incident#","occurred","reported","nature","offenses","location","disposition")"""
    #ans=["incident#","occurred","reported","nature","offenses","location","disposition"] 
    
    elements=html.text.splitlines() #split information by each new line into list
    ans=[]#start empty list
    
    for element in elements:
        if(len(element)>1):
            if(element.find("charged with")):
                ans.append(element[element.find(":")+1:])
            else:
                ans.append(element[element.find(":")+3:])#substring so only information is shown, then append
        
    return ans




pageNum=0
dataAvailable=True

while dataAvailable: # are there still pages to scrape

    print("Page: "+str(pageNum))
    url= "http://police.psu.edu/daily-crime-log?field_reported_value[value]&page="+str(pageNum) # url+ page incrementation
    raw= requests.get(url)# request the raw html text from psu incident log
    
    soup = BeautifulSoup(raw.text,"html.parser")# lets take this raw text and put it into a filter that does nothing yet.

    crimeSet=soup.find_all("div",{"class": "views-row"})# gets each chunk of crime log (holds all data for each incident)

    #print(crimeSet)  
    if(len(crimeSet)>0): #is the crimeSet empty
    
    
        for crime in crimeSet:#iterate through every crime
           separated= separateResults(crime)#store clean data in list
           #log data from list
           logDataCSV(separated)
    else:
        dataAvailable=False #no more data
        
        
    pageNum+=1
    

