export const getGifs = async ( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=TlVGHv8IzaJuuRcEdKKW6g8PFum7Gdh9&q=${encodeURI( category )}&limit=10`;

    console.log('fetching url:', url)
    
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
};