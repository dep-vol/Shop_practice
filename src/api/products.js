import makeRequest from "./helpers/makeRequest";

function loadAll() {
   return makeRequest('products/all.php')
}

export { loadAll }