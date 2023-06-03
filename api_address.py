def generate_page(artist):

    base_id = "https://api.deezer.com/search/artist?q="
    api_key = "a1d832c101f04481e98ece5a0a6cb586"

    music_url = base_id + artist.replace(" ", "") + "&limit=1"
    return (music_url)