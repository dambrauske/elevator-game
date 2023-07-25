const elevator = document.querySelector('.elevator-cont')
const human = document.querySelector('.human')
const floorToGo = document.querySelector('.target-floor')
const elevatorLeftDoor = document.querySelector('.elevator-left-door')
const elevatorRightDoor = document.querySelector('.elevator-right-door')

const buttonToFloor1 = document.getElementById('button-to-1-floor')
const buttonToFloor2 = document.getElementById('button-to-2-floor')
const buttonToFloor3 = document.getElementById('button-to-3-floor')

let humanIsAtFloor
let currentElevatorFloor = 1
let targetFloor


const targetFloorDisappear = () => {
    floorToGo.style.display = 'none'
    floorToGo.style.transition = 'ease-in 0.2s'
}

const elevatorOpens = () => {
    elevatorLeftDoor.classList.remove('close-left-door-anim')
    elevatorRightDoor.classList.remove('close-right-door-anim')

    elevatorLeftDoor.classList.add('open-left-door-anim')
    elevatorRightDoor.classList.add('open-right-door-anim')
}

const elevatorCloses = () => {
    elevatorLeftDoor.classList.remove('open-left-door-anim')
    elevatorRightDoor.classList.remove('open-right-door-anim')

    elevatorLeftDoor.classList.add('close-left-door-anim')
    elevatorRightDoor.classList.add('close-right-door-anim')
}


const generateTargetFloor = (min, max, excludedNum) => {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    if (randomNum >= excludedNum) {
        randomNum++;
    }

    if (humanIsAtFloor === 1 && randomNum === 1) {
        randomNum = Math.random() * (3 - 2) + 2
    }

    return floorToGo.textContent = randomNum.toString();
}

// elevator functions

const elevatorZIndexIs10 = () => {
    elevatorLeftDoor.style.zIndex = '10'
    elevatorRightDoor.style.zIndex = '10'
}


const elevatorArrives = () => {
    elevator.classList.remove('elevator-at-1-floor')
    elevator.classList.remove('elevator-at-2-floor')
    elevator.classList.remove('elevator-at-3-floor')
    elevator.classList.add(`elevator-at-${humanIsAtFloor}-floor`)
}

// human behaviour functions

const humanGoesToElevator = () => {
    human.style.transform = 'translateX(350%)'
    human.style.transition = '0.4s ease'

    setTimeout(() => {
        human.style.zIndex = '-1'
    }, 800)

    setTimeout(() => {
        human.classList.remove(`human-at-${humanIsAtFloor}-floor`)
        human.classList.add(`human-at-${targetFloor}-floor`)
    }, 800)

}

const humanLeavesElevator = () => {

    setTimeout(() => {
        human.style.zIndex = '1'
    }, 150)

    setTimeout(() => {
        human.style.transform = 'translateX(10%)'
        human.style.transition = '0.4s ease'
    }, 1000)


    setTimeout(() => {
        humanLeavesStairway()
    }, 1500)


}

const humanLeavesStairway = () => {
    human.style.transform = 'translateX(-1000%)'
}

const humanAppearsAtRandomFloor = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1

    human.classList.add(`human-at-${randomNum}-floor`)
    human.classList.add('human-near-elevator')
    humanIsAtFloor = randomNum

    floorToGo.classList.add(`target-at-${humanIsAtFloor}-floor`)

    generateTargetFloor(1, 2, humanIsAtFloor)
    targetFloor = generateTargetFloor(1, 2, humanIsAtFloor)

}

humanAppearsAtRandomFloor()

// button clicks

const handleButtonClicks = (floor) => {
    elevatorArrives()
    setTimeout(() => {
        elevatorOpens()
    }, 1000)

    setTimeout(() => {
        humanGoesToElevator()
        targetFloorDisappear()
    }, 1500)

    setTimeout(() => {
        elevatorCloses()
    }, 2000)

    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add(`elevator-at-${floor}-floor`)
        currentElevatorFloor = floor
    }, 3000)

    setTimeout(() => {
        elevatorOpens()
    }, 4000)

    setTimeout(() => {
        humanLeavesElevator()
    }, 4050)

    // setTimeout(() => {
    //     humanLeavesElevator()
    // }, 4010)

    setTimeout(() => {
        elevatorCloses()
    }, 6000)
}

buttonToFloor1.addEventListener('click', () => handleButtonClicks(1));
buttonToFloor2.addEventListener('click', () => handleButtonClicks(2));
buttonToFloor3.addEventListener('click', () => handleButtonClicks(3));







