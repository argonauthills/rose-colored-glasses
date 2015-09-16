refreshFilter()

function refreshFilter() {
    chrome.runtime.sendMessage({action:"getFilter"}, function(message) {
        var filter = message.filter
        document.body.setAttribute("style", "-webkit-filter:"+filter)
        console.log("got message", message)
    })
}