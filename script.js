const elevator = document.querySelector('.elevator-cont')
const human = document.querySelector('.human')

const buttonToFloor1 = document.getElementById('button-to-1-floor')
const buttonToFloor2 = document.getElementById('button-to-2-floor')
const buttonToFloor3 = document.getElementById('button-to-3-floor')



const humanAppearsAtRandomFloor = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum)

    human.classList.add(`human-at-${randomNum}-floor`)
}

humanAppearsAtRandomFloor()