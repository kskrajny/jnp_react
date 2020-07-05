import {httpGetAsync} from "./httpGetAsync";
import {shuffle} from "./shuffle";

export const handleTenorImages = async (search_term) => {
    let url
    let response = []
    for(const x of search_term) {
        let str = x.split(' ').join('-')
        url = "https://api.tenor.com/v1/random?key=SJ17MDRHWVUF&limit=3&q=" + str
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
    response = response.map(obj => obj.media[0]['tinygif'].url)
    return [ ...new Set(shuffle(response))]
    /*
    let change = setNextGif(response)
    change()
    const image$ = interval(10000)
    image$.subscribe(() => change())
    */
}