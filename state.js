console.log("state")

var filter = "invert(80%)"

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getFilter") {
        sendResponse(filterResponse(filter))
    }
    if (request.action == "setFilter") {
        filter = request.payload.filter
        sendResponse(filterResponse(filter))
    }
})

function filterResponse(filter) {
    return {
        payload: {filter: filter}
    }
}
