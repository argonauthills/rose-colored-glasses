console.log('wahoooooo')
refreshFilter()

function refreshFilter() {
    console.log('refreshFilter')
    chrome.runtime.sendMessage({action:"getFilter"}, function(message) {
        var filter = message.payload.filter
        updateView(filter)
        console.log("got message", message)
    })
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("colorit got message", request)
    if (request.action == "updateView") updateView(request.payload.filter)
})

function updateView(filter) {
    console.log('filter', filter)
    if (!!filter) document.body.setAttribute("style", "-webkit-filter:"+filter)
    else document.body.setAttribute("style", "")
}
