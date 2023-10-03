const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return {timeRemaining, hours, minutes, seconds}
    }

    const updateClock = () => {
        const {timeRemaining, hours, minutes, seconds} = getTimeRemaining()
        if (timeRemaining > 0) {
            timerHours.textContent = hours < 10 ? `0${hours}` : hours
            timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes
            timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds
        } else {
            clearInterval(updateClockInterval)
        }
        

    }
    
    const updateClockInterval = setInterval(updateClock, 1000)
}

export default timer