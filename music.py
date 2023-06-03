from flask import Flask, render_template, request, json, redirect, url_for
import requests
import urllib.request, json
from api_address import  generate_page
import os

app = Flask(__name__)

@app.route("/music", methods=['POST', 'GET'])
def home():
    if request.method == 'POST':
        artist = request.form['artist']
        print (artist)
        url =  generate_page(artist)
        print (url)
        response = requests.get(url)
        data = response.json()
        print(data)

    return render_template ("music.html")

if __name__ == '__main__':
    app.run(port='8000', debug=True)