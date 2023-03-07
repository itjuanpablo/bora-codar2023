const circularProgress = document.querySelector('.card:nth-child(2) .circular-progress')
const value1 = document.querySelector('.card:nth-child(2) .circular-progress .value')

const circularProgress2 = document.querySelector('.card:nth-child(3) .circular-progress')
const value2 = document.querySelector('.card:nth-child(3) .circular-progress .value')

const toggleTheme = document.querySelector('.toggle')
const body = document.querySelector('body')

let number = 0
let valueEnd = 70
let secondValueEnd = 90

let speed = 70

setTimeout(() => {
    const updateCircularProgress = setInterval(() => {
        number++
        value1.innerHTML = `
        <div class="value">${number}%</div>`
        circularProgress.style.background = `conic-gradient(
            #7367F0 ${number * 3.6}deg,
            #D9D9D9 ${number * 3.6}deg
        )`
        if(number > valueEnd) {
            value1.innerHTML = `
            <div class="value">${valueEnd}%</div>
            `
            clearInterval(updateCircularProgress)
        }
    }, speed)

    const updateCircularProgress2 = setInterval(() => {
        number++
        value2.innerHTML = `
        <div class="value">${number}%</div>`
        circularProgress2.style.background = `conic-gradient(
            #A66DE9 ${number * 3.6}deg,
            #D9D9D9 ${number * 3.6}deg
        )`
        if(number == secondValueEnd) {
            clearInterval(updateCircularProgress2)
        }
    }, speed)
    
}, 1000)


toggleTheme.addEventListener('click', function changeTheme() {
    body.classList.toggle('light')
    document.querySelector('.ball').classList.toggle('light')
})