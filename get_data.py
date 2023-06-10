artist_data = {'data': [{'id': 4338602, 'name': 'Burna Boy', 'link': 'https://www.deezer.com/artist/4338602',
                          'picture': 'https://api.deezer.com/artist/4338602/image',
                           'picture_small': 'https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/56x56-000000-80-0-0.jpg', 
                           'picture_medium': 'https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/250x250-000000-80-0-0.jpg', 
                           'picture_big': 'https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/500x500-000000-80-0-0.jpg', 
                           'picture_xl': 'https://e-cdns-images.dzcdn.net/images/artist/5f6655125d363a417f7b2e3226787719/1000x1000-000000-80-0-0.jpg', 
                           'nb_album': 60, 'nb_fan': 797375, 'radio': True, 'tracklist': 'https://api.deezer.com/artist/4338602/top?limit=50', 
                           'type': 'artist'},{'name': 'mike', 'temperature': 5}], 
                           'total': 6, 'next': 'https://api.deezer.com/search/artist?q=Burnaboy&limit=1&index=1'}

def get_data():
    info = artist_data["data"][0]
    return info

def get_name():
    info = artist_data["data"][0]
    return info['name']

def get_id():
    info = artist_data["data"][0]
    return info['id']

def get_link():
    info = artist_data["data"][0]
    return info['link']

def get_picture():
    info = artist_data["data"][0]
    return info['picture']

def get_picture_small():
    info = artist_data["data"][0]
    return info['picture_small']

def get_picture_big():
    info = artist_data["data"][0]
    return info['picture_big']

def get_picture_medium():
    info = artist_data["data"][0]
    return info['picture_medium']

def get_picture_1():
    info = artist_data["data"][0]
    return info['picture_xl']

def get_total():
    info = artist_data
    return info["total"]

def get_next():
    info = artist_data
    return info["next"]

def tracklist():
    info = artist_data["data"][0]
    return info['tracklist']

def nb_album():
    info = artist_data["data"][0]
    return info['nb_album']

def nb_fan():
    info = artist_data["data"][0]
    return info['nb_fan']

print(get_data())
print(get_name())
print(get_id())
print(get_link())
print(get_picture())
print(get_picture_1())
print(get_picture_big())
print(get_picture_medium())
print(get_picture_small())
print(nb_album())
print(nb_fan())
print(tracklist())
print(get_total())
print(get_next())