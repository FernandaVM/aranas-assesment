#test1: Flask Web Service

from flask import Flask, request, jsonify
app = Flask(__name__)

data = '' #variable to save the request data 

@app.route('/', methods = ['GET','POST'])
def req():
    global data
    if request.method == 'POST':
        data = request.get_json() 
        if data:
            return 'Data saved :)'
    if request.method == 'GET':
        response = ''
        if data != '':
            response += data['name']+','+data['last_name']+','+data['date_of_birth']+','+data['skills'][0]+','+data['skills'][1] #properties of the JSON object concatenated split by coma
        return response
        

app.run()