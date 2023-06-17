from flask import Flask, render_template, request, json, redirect, url_for
import requests
import urllib.request, json
from api_address import  generate_page
from get_data import *
import os

app = Flask(__name__)

@app.route("/")
def launch():
    return render_template("music.html")

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
        name = get_name()
        print(name)
        identity = get_id()
        print(identity)
        picture = get_picture(data)
        print(picture)
        picture_2 = get_picture_medium(data)
        print(picture_2)
        tracklist= tracklist(data)
        print(tracklist)
        return render_template('music.html', artist=artist, identity=identity, picture=picture, picture_2=picture_2, tracklist=tracklist)
    return render_template('music.html')


if __name__ == '__main__':
    app.run(port='8000', debug=True)