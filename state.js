var filter = ''

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getFilter") {
        sendResponse(filterResponse(filter))
    }
    if (request.action == "setFilter") {
        filter = request.payload.filter
        sendResponse(filterResponse(filter))
        emitUpdateView(filter)
    }
})

function emitUpdateView(filter) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'updateView', payload: {filter: filter}})
    })
}

function filterResponse(filter) {
    return { payload: {filter: filter} }
}
