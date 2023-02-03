

/* Creo una funzione che resistuisce la data attuale e che si aggiorna ogni secondo*/

readClock = setInterval(getTime, 1000)
let currentClock = []
function getTime() {
    const date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    currentClock = [year, month, day, hour, minutes, seconds]
    return currentClock 
}

spotTime = [9,0,0]

function calcTimeRemaining (hours, minutes, seconds) {
    hoursRemaining = hours + (24 - getTime()[3]) - 1
    minutesRemaining = minutes + (60 - getTime()[4]) - 1
    secondsRemaining = seconds + (60 - getTime()[5])
    currentTimeRemaining = [hoursRemaining, minutesRemaining, secondsRemaining]
    return currentTimeRemaining
}


refreshPage = setInterval(writeTimeRemaining, 1000)
function writeTimeRemaining () {
    let hours = calcTimeRemaining(spotTime[0],spotTime[1],spotTime[2])[0]
    hours = hours<10?'0'+hours:hours
    document.getElementById("remainingHours").innerHTML = hours

    let minutes = calcTimeRemaining(spotTime[0],spotTime[1],spotTime[2])[1]
    minutes = minutes<10?'0'+minutes:minutes
    document.getElementById("remainingMinutes").innerHTML = minutes

    let seconds = calcTimeRemaining(spotTime[0],spotTime[1],spotTime[2])[2]
    seconds = seconds<10?'0'+seconds:seconds
    document.getElementById("remainingSeconds").innerHTML = seconds
}






