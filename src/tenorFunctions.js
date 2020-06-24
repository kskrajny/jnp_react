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

export const send_share = async (search_term) => {
    let url = "https://api.tenor.com/v1/search?key=SJ17MDRHWVUF&limit=1&q="+ search_term
    const promise = await new Promise((resolve, reject) => {
        httpGetAsync(url, (res) => {
            if(res.error === undefined) resolve(JSON.parse(res))
            else reject(res)
        })
    })
    document.getElementById('tenor').src = promise.results[0].media[0]['tinygif'].url
}