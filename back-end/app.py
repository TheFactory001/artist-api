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

            top_5_tracks_info = []

            track = {'title': "", 'preview': "", "cover":""}

            for each_track_data in top_5_tracks:
                track = {'title': "", 'preview': ""}
                track['title'] = each_track_data['title']
                track['preview'] = each_track_data['preview']
                track['cover'] = each_track_data['album']['cover']
                top_5_tracks_info.append(track)

            artist_info['top_5_tracks'] = top_5_tracks_info

            return render_template('index.html', artist_info=artist_info)
        else:
            artist_info['artist_name'] = f"{artist_name} : Artist not found"

            return render_template('index.html', artist_info=artist_info)
    return render_template('index.html', artist_info=artist_info)


if __name__=="__main__":
    app.run(debug=True)

