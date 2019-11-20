import makeRequest from "./helpers/makeRequest";

function cartLoad(token) {
   let url = 'cart/load.php'
   if (token !== null) {
       url+=`?token=${token}`
   }
   
    return makeRequest(url)
}

export { cartLoad }