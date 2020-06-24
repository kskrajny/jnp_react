const httpGetAsync = (theUrl, callback) => {
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}

const shuffle = arr => {
    var i = arr.length;
    while(i) {
        var j = Math.floor(Math.random() * i);
        var t = arr[--i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}

const nextGif = (gifs) => {
    let i = 0
    return () => {
        document.getElementById('tenor').src = gifs[i].media[0]['tinygif'].url
        i = (i + 1) % gifs.length
    }
}

export const send_share = async (search_term, gifs) => {
    let url
    let response = []
    for(const x of search_term) {
        let str = x.split(' ').join('-')
        url = "https://api.tenor.com/v1/search?key=SJ17MDRHWVUF&limit=3&q=" + str
        let promise = await new Promise((resolve, reject) => {
            httpGetAsync(url, (res) => {
                if (res.error === undefined) resolve(res)
                else reject(res.error)
            })
        }).then(res => JSON.parse(res)).catch(() => 'ERROR')
        if (promise === 'ERROR')
            return 'ERROR'
        response = response.concat(promise.results)
    }
    response = [ ...new Set(shuffle(response))]
    let change = nextGif(response)
    change()
    setInterval(change, 30000)
}