let baseUrl = 'https://market-try.000webhostapp.com/';

export default function makeRequest(url) {
    let fetchUrl = baseUrl + url; 
    return fetch(fetchUrl).then((response) => {
        if(response.status!==200) {
            return response.text().then((text) => {
                throw new Error(text)
            })
        }
        else {
            return response.json()
        }
    })

}