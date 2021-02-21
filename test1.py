#test1: Flask Web Service

from flask import Flask, request, json, jsonify
app = Flask(__name__)

data = '' #variable to save the request data 

@app.route('/', methods = ['GET','POST'])
def req():
    global data
    if request.method == 'POST':
        data = request.get_json() 
        if data:
            return ("Data saved",200,{})
            
    if request.method == 'GET':
        response = ''
        if data:
            dataList = [] #list to save json object values 
            for val in data.values():
                dataList.append(val)

            response = ','.join([str(elem) for elem in dataList]) #concatenate list values with commas 
        
        return response
        
app.run()