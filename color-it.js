console.log('wahoooooo')
refreshFilter()

function refreshFilter() {
    console.log('refreshFilter')
    chrome.runtime.sendMessage({action:"getFilter"}, function(message) {
        var filter = message.payload.filter
        console.log('filter', filter)
        if (!!filter) document.body.setAttribute("style", "-webkit-filter:"+filter)
        else document.body.setAttribute("style", "")
        console.log("got message", message)
    })
}
