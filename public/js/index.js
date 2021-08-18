function tick(cb) {
  setInterval(() => {
    const date = Date.now()
    console.log(date)
    console.log(1000)
    cb(date)
  }, 1000)
}

const timer = document.querySelector("#timer")
const hours = timer.querySelector('#hours')
const minutes = timer.querySelector('#minutes')
const seconds = timer.querySelector('#seconds')

function callback(millisecond) {
  console.log(millisecond)
  const hoursText = new Date(millisecond).getHours()
  const minutesText = new Date(millisecond).getMinutes()
  const secondsText = new Date(millisecond).getSeconds()

  hours.innerText = hoursText
  minutes.innerText = minutesText
  seconds.innerText = secondsText
}

tick(callback)