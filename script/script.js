/* Funzione domani alle 9:30 */
function getTomorrowLessonDate() {
    let tomorrowLesson = new Date()
    tomorrowLesson.setDate(tomorrowLesson.getDate() + 1)
    tomorrowLesson.setFullYear(tomorrowLesson.getFullYear())
    tomorrowLesson.setHours(9, 30, 0)
    return tomorrowLesson
}

/* Aggiungo domani alle 9.30 nell'HTML del DateTime */
let tomorrow = new Date (getTomorrowLessonDate())
let tomorrowUTC = tomorrow.toISOString().replace(/.\d+Z$/g, "")
document.getElementById("spotTime").innerHTML = tomorrow

/* Funzione data attuale */
function getCurrentTime() {
    const currentTime = new Date();
    currentTime.setFullYear(currentTime.getFullYear() - 1)
    return currentTime
}

/* Funzione che legge se la data nel DataValue cambia*/
function getSpotTime() {
    let UTCspotTime = document.getElementById("spotTime").value
    let spotTime = new Date(UTCspotTime)
    console.log(spotTime)
    return spotTime
}

/* Funzione che calcola la differenza tra la data attuale e quella nel DataValue */
function getDiffTime() {
    let calcDiffTime = getSpotTime() - getCurrentTime()
    let seconds = Math.floor(calcDiffTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24)
  
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    let diffTime = [days, hours, minutes, seconds]
    return diffTime
}

/* Refresho la differenza di tempo ogni secondo */
let refreshDiffValue = setInterval(writeDiffValue, 1000)

/* Scrivo la differenza di tempo nell'HTML */
function writeDiffValue(){
    document.getElementById("diffDays").innerHTML = getDiffTime()[0]
    document.getElementById("diffHours").innerHTML = getDiffTime()[1]
    document.getElementById("diffMinutes").innerHTML = getDiffTime()[2]
    document.getElementById("diffSeconds").innerHTML = getDiffTime()[3]
}
