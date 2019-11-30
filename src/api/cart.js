import makeRequest from "./helpers/makeRequest";

function cartLoad(token) {
   let url = 'cart/load.php'
   if (token !== null) {
       url+=`?token=${token}`
   }
   
    return makeRequest(url)
}

function add(token,id) {
    return makeRequest(`cart/add.php?token=${token}&id=${id}`)
}

function delItem(token,id) {
    return makeRequest(`cart/remove.php?token=${token}&id=${id}`)
}

function changeCount(token,id,cnt) {
    return makeRequest(`cart/change.php?token=${token}&id=${id}&cnt=${cnt}`)
}

function clean(token) {
    return makeRequest(`cart/clean.php?token=${token}`)
}

export { cartLoad, add, delItem, changeCount, clean }