function clockTimer() {
    clockElement.innerHTML = '00 : 00 : 00'
}



let time

const hoursElement = document.querySelector( 'input#hours')
const minutesElement = document.querySelector( 'input#minutes')
const secondsElement = document.querySelector( 'input#seconds')
const startButton = document.querySelector( 'button#start')

const clockElement = document.querySelector( 'span#clock')



document.addEventListener( 'keyup', function(event) {
    if(event.keyCode == 13) {
        startButton.dispatchEvent( new Event( 'click'))
    }
})
startButton.addEventListener( 'click', function() {
    // err...
    clockTimer()
})