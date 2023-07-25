const elevator = document.querySelector('.elevator-cont')
const human = document.querySelector('.human')
const floorToGo = document.querySelector('.target-floor')

const buttonToFloor1 = document.getElementById('button-to-1-floor')
const buttonToFloor2 = document.getElementById('button-to-2-floor')
const buttonToFloor3 = document.getElementById('button-to-3-floor')

let humanIsAtFloor
const elevatorComesToHuman = () => {
    elevator.classList.remove('elevator-at-1-floor')
    elevator.classList.remove('elevator-at-2-floor')
    elevator.classList.remove('elevator-at-3-floor')
    elevator.classList.add(`elevator-at-${humanIsAtFloor}-floor`)
}

const goalFloorDisappear = () => {
    floorToGo.style.display = 'none'
}


const humanAppearsAtRandomFloor = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1

    human.classList.add(`human-at-${randomNum}-floor`)
    human.classList.add('human-near-elevator')
    humanIsAtFloor = randomNum

    floorToGo.classList.add(`target-at-${humanIsAtFloor}-floor`)

    generateTargetFloor(1,2,humanIsAtFloor)

    // buttonToFloor1.addEventListener('click', elevatorComesToHuman)
    // buttonToFloor2.addEventListener('click', elevatorComesToHuman)
    // buttonToFloor3.addEventListener('click', elevatorComesToHuman)
}

const generateTargetFloor = (min, max, excludedNum) => {
   let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    if (randomNum >= excludedNum) {
        randomNum++;
    }

    return floorToGo.textContent = randomNum.toString();
}

humanAppearsAtRandomFloor()

console.log(humanIsAtFloor)

const humanGoesToElevator = () => {
    human.classList.remove('human-near-elevator')
    human.classList.add('human-in-elevator')
}

buttonToFloor1.onclick = () => {
    elevatorComesToHuman()

    setTimeout(() => {
        humanGoesToElevator()
        goalFloorDisappear()
    }, 1000)

    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add('elevator-at-1-floor')
    }, 1000)

}

buttonToFloor2.onclick = () => {
    elevatorComesToHuman()

    setTimeout( () => {
        humanGoesToElevator()
        goalFloorDisappear()

    }, 1000)


    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add('elevator-at-2-floor')
    }, 1000)

}

buttonToFloor3.onclick = () => {
    elevatorComesToHuman()

    setTimeout(() => {
        humanGoesToElevator()
        goalFloorDisappear()
    }, 1000)

    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add('elevator-at-3-floor')
    }, 1000)

}




