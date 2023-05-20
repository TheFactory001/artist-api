from flask import Flask, Response, render_template, request
from flask_cors import CORS, cross_origin
import requests


app = Flask(__name__)


CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
api_url = "https://api.deezer.com/search/artist?q=eminem&limit=1"


@app.route("/", methods=['POST', 'GET'])
# @cross_origin
def home():
    artist_info = {}
    artist_info['top_5_tracks'] = {}
    if request.method == 'POST':
        request_data = request.form
        artist_name = request_data['artist_name']
        print("good")
        api_url = f"https://api.deezer.com/search/artist?q={artist_name}&limit=1"
        artist_data = requests.get(api_url).json()

        if artist_data['data'] != []:
            artist_details = artist_data['data'][0]

            artist_info['artist_image'] = artist_details['picture_medium']
            artist_info['artist_link'] = artist_details['link']
            artist_info['artist_name'] = artist_name
            artist_id = artist_details['id']
            top_5_tracks = requests.get(
                f'https://api.deezer.com/artist/{artist_id}/top?limit=5').json()['data']
            # print(top_5_tracks)
            print(artist_info)
            top_5_tracks_info = {'tracks_title': [], 'tracks_audio': []}
            top_5_tracks_title = []
            top_5_tracks_audio_preview = []
            for each_track_data in top_5_tracks:
                top_5_tracks_title.append(each_track_data['title'])
                top_5_tracks_audio_preview.append(each_track_data['preview'])

            top_5_tracks_info['tracks_title'] = top_5_tracks_title
            top_5_tracks_info['tracks_audio'] = top_5_tracks_audio_preview
            print(top_5_tracks_info)
            artist_info['top_5_tracks'] = top_5_tracks_info

            return render_template('index.html', artist_info=artist_info)
        else:
            artist_info['artist_name'] = f"{artist_name} : Artist not found"

            return render_template('index.html', artist_info=artist_info)
    return render_template('index.html', artist_info=artist_info)


@app.route("/get-artist", methods=['POST', 'GET'])
def find_artist():
    artist_info = {}
    artist_info['top_5_tracks'] = {}
    if request.method == 'POST':
        return_data = []
        try:
            artist_name = request.get_json()['searched_artist']

        except:
            artist_name = request.form['artist_name']

        api_url = f"https://api.deezer.com/search/artist?q={artist_name}&limit=1"
        artist_data = requests.get(api_url).json()

        if artist_data['data'] != []:
            artist_details = artist_data['data'][0]

            artist_info['image'] = artist_details['picture_medium']
            artist_info['link'] = artist_details['link']
            artist_info['name'] = artist_name
            artist_id = artist_details['id']
            top_5_tracks = requests.get(
                f'https://api.deezer.com/artist/{artist_id}/top?limit=5').json()['data']
            # print(top_5_tracks)
            print(artist_info)
            top_5_tracks_info = {'tracks_title': [], 'tracks_audio': []}
            top_5_tracks_title = []
            top_5_tracks_audio_preview = []
            for each_track_data in top_5_tracks:
                top_5_tracks_title.append(each_track_data['title'])
                top_5_tracks_audio_preview.append(each_track_data['preview'])

            top_5_tracks_info['tracks_title'] = top_5_tracks_title
            top_5_tracks_info['tracks_audio'] = top_5_tracks_audio_preview
            print(top_5_tracks_info)
            artist_info['top_5_tracks'] = top_5_tracks_info
            return_data.append(artist_info)

            return artist_info
        else:
            artist_info['artist_name'] = f"{artist_name} : Artist not found"

            return artist_info
    return render_template('index.html', artist_info=artist_info)


@app.route("/artist")
def get_artist():
    return [{"id": 1, 'image': 'https://e-cdns-images.dzcdn.net/images/artist/62e6edfaf5461eeb5b7310903229607a/250x250-000000-80-0-0.jpg',
             'link': 'https://www.deezer.com/artist/9822974', 'name': 'XXXTentacion'}, {"id": 2, 'image': 'https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/250x250-000000-80-0-0.jpg', 'link': 'https://www.deezer.com/artist/246791', 'name': 'Drake'}]


@app.route("/search_artist", methods=["Get", "POST"])
def search_artist():
    if request.method == "POST":
        return_data = []
        try:
            artist_name = request.get_json()["searched_artist"]
        except:
            artist_name = request.form['searched_artist']
        my_data = [{"id": 1, 'image': 'https://e-cdns-images.dzcdn.net/images/artist/62e6edfaf5461eeb5b7310903229607a/250x250-000000-80-0-0.jpg',
                    'link': 'https://www.deezer.com/artist/9822974', 'name': 'XXXTentacion'}, {"id": 2, 'image': 'https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/250x250-000000-80-0-0.jpg', 'link': 'https://www.deezer.com/artist/246791', 'name': 'Drake'}]
        for each in my_data:
            if each["name"] == artist_name:
                return_data.append(each)
        return return_data
    return render_template("try.html")


if __name__ == "__main__":
    app.run(debug=True)
