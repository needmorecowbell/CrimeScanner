from flask import Flask

application = Flask(__name__)

@application.route("/")
def hello():  
    return "Hello World!"


@application.route("/locations" ,method=["GET"])
def getLocations():
    pass
@application.route("/disposition" ,method=["GET"])
def getDisposition():
    pass
@application.route("/occurred" ,method=["GET"])
def getTimeOccurred():
    pass
@application.route("/crimes" ,method=["GET"])
def getCrime():
    #return crimes from database
    pass
if __name__ == "__main__":  
    application.run()