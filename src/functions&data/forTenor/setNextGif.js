export const setNextGif = (gifs) => {
    let i = 0
    return () => {
        document.getElementById('tenor').src = gifs[i].media[0]['tinygif'].url
        i = (i + 1) % gifs.length
    }
}