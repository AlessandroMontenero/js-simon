

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

refreshCurrent = setInterval(writeCurrentTime, 1000)

function writeCurrentTime() {
    let hours = getTime()[3]
    hours = hours<10?'0'+hours:hours
    document.getElementById("currentHours").innerHTML = 'sono le ' + hours + ':'

    let minutes = getTime()[4]
    minutes = minutes<10?'0'+minutes:minutes
    document.getElementById("currentMinutes").innerHTML = minutes + ':'

    let seconds = getTime()[5]
    seconds = seconds<10?'0'+seconds:seconds
    document.getElementById("currentSeconds").innerHTML = seconds
}


let spotTime = document.getElementById("spotTime").value
document.getElementById("setSpotTime").onclick = function(){
    spotTime = document.getElementById("spotTime").value
}

function getSpotTime(spotTime) {
    let hours = parseInt(spotTime.slice(0,2))
    let minutes = parseInt(spotTime.slice(3,5))
    let seconds = parseInt(spotTime.slice(6,8))
    let time = [hours, minutes, seconds]
    return time
}

function calcTimeRemaining (hours, minutes, seconds) {
    let daysRemaining = 0

    hoursRemaining = hours + (24 - getTime()[3]) - 1
    if (hoursRemaining >= 24) {
        hoursRemaining -= 24
        daysRemaining += 1
    }
    minutesRemaining = minutes + (60 - getTime()[4]) - 1
    if (minutesRemaining >= 60) {
        hoursRemaining += 1
        minutesRemaining -= 60
    }
    secondsRemaining = seconds + (60 - getTime()[5])
    if (secondsRemaining >= 60) {
        minutesRemaining += 1
        secondsRemaining -= 60
    }
    currentTimeRemaining = [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining]
    return currentTimeRemaining
}


refreshRemaining = setInterval(writeTimeRemaining, 1000)
function writeTimeRemaining () {
    let timeRemaining = calcTimeRemaining(getSpotTime(spotTime)[0],getSpotTime(spotTime)[1],getSpotTime(spotTime)[2])
    
    let days = timeRemaining[0]
    if (days != 0) {
        document.getElementById("remainingDays").innerHTML = 'manca ' + days + ' giorno, '
    }
    else {
        document.getElementById("remainingDays").innerHTML = 'mancano '
    }

    let hours = timeRemaining[1]
    if (hours == 1) {
        document.getElementById("remainingHours").innerHTML = hours + ' ora, '
    }
    else {
        document.getElementById("remainingHours").innerHTML = hours + ' ore, ' 
    }

    let minutes = timeRemaining[2]
    if (minutes == 1) {
        document.getElementById("remainingMinutes").innerHTML = minutes + ' minuto e '
    }
    else {
        document.getElementById("remainingMinutes").innerHTML = minutes + ' minuti e '
    }
    let seconds = timeRemaining[3]
    if (seconds == 1) {
        document.getElementById("remainingSeconds").innerHTML = seconds + " secondo a quest'ora di domani"
    }
    else {
        document.getElementById("remainingSeconds").innerHTML = seconds + " secondi a quest'ora di domani"
    }
}






