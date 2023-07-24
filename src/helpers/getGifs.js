export const getGifs = async (category) => {
    const API_KEY = 'GIiHFJ0YbLt8p887RWs9HlYXEx8yYmwf'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`
    const resp = await fetch( url )
    const { data } = await resp.json()
    const gifs = data.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }))
    console.log(gifs)
    }
    