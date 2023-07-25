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

const elevatorOpens = () => {
    elevatorLeftDoor.style.transform = 'translateX(-100%)'
    elevatorRightDoor.style.transform = 'translateX(100%)'
}

const elevatorIsClosed = () => {
    elevator.style.backgroundColor = '#1f2123'
}

const elevatorIsOpen = () => {
    elevator.style.backgroundColor = 'rgb(243 244 246)'
}

const elevatorCloses = () => {
    elevatorLeftDoor.style.transform = 'translateX(400%)'
    elevatorRightDoor.style.transform = 'translateX(-400%)'
}


const elevatorComesToHuman = () => {
    elevator.classList.remove('elevator-at-1-floor')
    elevator.classList.remove('elevator-at-2-floor')
    elevator.classList.remove('elevator-at-3-floor')
    elevator.classList.add(`elevator-at-${humanIsAtFloor}-floor`)
}

// human behaviour functions

const humanGoesToElevator = () => {
    elevatorOpens()
    setTimeout(() => {
        human.style.transform = 'translateX(350%)'
        human.style.transition = 'ease-in-out 0.2s'
        setTimeout(() => {
            human.style.zIndex = '-1'
        }, 500)
    }, 250)
}

const humanLeavesElevator = () => {
    elevatorOpens()
    setTimeout(() => {
        human.style.zIndex = '1'
    }, 250)
    setTimeout(() => {
        human.style.transform = 'translateX(10%)'
        human.style.transition = 'ease-in-out 0.2s'
    }, 250)

    human.classList.remove(`human-at-${humanIsAtFloor}-floor`)
    human.classList.add(`human-at-${targetFloor}-floor`)
}

const humanAppearsAtRandomFloor = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1

    human.classList.add(`human-at-${randomNum}-floor`)
    human.classList.add('human-near-elevator')
    humanIsAtFloor = randomNum

    floorToGo.classList.add(`target-at-${humanIsAtFloor}-floor`)

    generateTargetFloor(1,2,humanIsAtFloor)
    targetFloor = generateTargetFloor(1,2,humanIsAtFloor)

}

humanAppearsAtRandomFloor()

// button clicks

const handleButtonClicks = (floor) => {
    elevatorComesToHuman()

    setTimeout(() => {
        elevatorOpens()
    }, 250)

    setTimeout(() => {
        humanGoesToElevator()
        targetFloorDisappear()
    }, 500)

    setTimeout(() => {
        elevatorCloses()
        elevatorIsClosed()
    }, 1000)

    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add(`elevator-at-${floor}-floor`)
        currentElevatorFloor = floor
    }, 2000)

    setTimeout(() => {
        elevatorOpens()
        elevatorIsOpen()
        humanLeavesElevator()
    }, 2250)
}

buttonToFloor1.addEventListener('click', () => handleButtonClicks(1));
buttonToFloor2.addEventListener('click', () => handleButtonClicks(2));
buttonToFloor3.addEventListener('click', () => handleButtonClicks(3));



// const goToFloor = () => {
//     if (currentElevatorFloor === 1 && targetFloor === 2) {
//         elevator.style.transform = 'translateY(-100%)'
//     }
//
//     if (currentElevatorFloor === 1 && targetFloor === 3) {
//         elevator.style.transform = 'translateY(-200%)'
//     }
//
//     if (currentElevatorFloor === 2 && targetFloor === 1) {
//         elevator.style.transform = 'translateY(100%)'
//     }
//
//     if (currentElevatorFloor === 2 && targetFloor === 3) {
//         elevator.style.transform = 'translateY(200%)'
//     }
//
//     if (currentElevatorFloor === 3 && targetFloor === 1) {
//         elevator.style.transform = 'translateY(200%)'
//     }
//
//     if (currentElevatorFloor === 3 && targetFloor === 2) {
//         elevator.style.transform = 'translateY(100%)'
//     }
// }




