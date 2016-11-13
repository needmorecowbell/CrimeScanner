from flask import Flask

application = Flask(__name__)

@application.route("/")
def hello():  
    return "Hello World!"


@application.route("/locations")["GET"]
def getLocations():
    pass
def getDisposition():
    pass
def getTimeOccurred():
    pass
def getCrime():
    pass
if __name__ == "__main__":  
    application.run()