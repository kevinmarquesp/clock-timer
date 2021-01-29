function clockTimer() {
    if(minutesElement.value > 60 || secondsElement.value > 60) {
        stopTimer()
        alert( 'Favor, digite os dados corretamente...')
    } else {
        if( Number(hoursElement.value) == 0 && Number(minutesElement.value) == 0 && Number(secondsElement.value) == 0) {
            restartButton.dispatchEvent( new Event( 'click'))
        } else if( secondsElement.value != 0) {
            secondsElement.value--
        } else if( minutesElement.value != 0 && secondsElement.value == 0) {
            secondsElement.value = 59
            minutesElement.value--
        } else if( hoursElement.value != 0 && minutesElement.value == 0) {
            minutesElement.value = 60
            hoursElement.value--
        }

    }
}
function stopTimer() {
    clearInterval(timer)
}



let timer

const hoursElement = document.querySelector( 'input#hours')
const minutesElement = document.querySelector( 'input#minutes')
const secondsElement = document.querySelector( 'input#seconds')
const startButton = document.querySelector( 'button#start')
const restartButton = document.querySelector( 'button#restart')



document.addEventListener( 'keyup', function(event) {
    if(event.keyCode == 13) {
        startButton.dispatchEvent( new Event( 'click'))
    } else if(event.keyCode == 8) {
        restartButton.dispatchEvent( new Event( 'click'))
    }
})

startButton.addEventListener( 'click', function() {
    function startInterval() {
        timer = setInterval( function() {
            clockTimer()
        }, 1000)
    }
    startInterval()
})
restartButton.addEventListener( 'click', function() {
    stopTimer()
    hoursElement.value = ''
    minutesElement.value = ''
    secondsElement.value = ''
})