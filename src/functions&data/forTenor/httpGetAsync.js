export const httpGetAsync = (theUrl, callback) => {
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