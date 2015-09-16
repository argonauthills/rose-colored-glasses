var grayscaleButton = document.getElementById('grayscale-button')
var blurButton = document.getElementById('blur-button')
var hueRotateButton = document.getElementById('hue-rotate-button')

var grayscaleFilter = 'grayscale(100%)'
var blurFilter = 'blur(5px)'
var hueRotateFilter = 'hue-rotate(120deg)'

grayscaleButton.addEventListener('click', function(e) {
    setFilter(grayscaleFilter)
    window.close()
})

blurButton.addEventListener('click', function(e) {
    setFilter(blurFilter)
    window.close()
})

hueRotateButton.addEventListener('click', function(e) {
    setFilter(hueRotateFilter)
    window.close()
})

function setFilter(filter) {
    chrome.runtime.sendMessage({action: 'setFilter', payload: {filter: filter}})
}
