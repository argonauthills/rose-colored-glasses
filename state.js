console.log("state")

var filter = "grayscale(50%)"

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getFilter") {
        sendResponse({filter: filter})
    }
    if (request.action == "setFilter") {
        filter = filter
        sendResponse({filter:filter})
    }
})