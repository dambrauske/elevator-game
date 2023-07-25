const elevator = document.querySelector('.elevator-cont')
const human = document.querySelector('.human')

const buttonToFloor1 = document.getElementById('button-to-1-floor')
const buttonToFloor2 = document.getElementById('button-to-2-floor')
const buttonToFloor3 = document.getElementById('button-to-3-floor')

let humanIsAtFloor
const elevatorComesToHuman = () => {
    elevator.classList.add(`elevator-at-${humanIsAtFloor}-floor`)
}

const humanAppearsAtRandomFloor = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1

    human.classList.add(`human-at-${randomNum}-floor`)
    human.classList.add('human-near-elevator')
    humanIsAtFloor = randomNum

    buttonToFloor1.addEventListener('click', elevatorComesToHuman)
    buttonToFloor2.addEventListener('click', elevatorComesToHuman)
    buttonToFloor3.addEventListener('click', elevatorComesToHuman)
}

humanAppearsAtRandomFloor()

const humanGoesToElevator = () => {
    human.classList.remove('human-near-elevator')
    human.classList.add('human-in-elevator')
}

buttonToFloor1.onclick = () => {
    elevatorComesToHuman()
    humanGoesToElevator()

    elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
    elevator.classList.add('elevator-at-1-floor')
}



