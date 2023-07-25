const elevator = document.querySelector('.elevator-cont')
const human = document.querySelector('.human')
const floorToGo = document.querySelector('.target-floor')

const buttonToFloor1 = document.getElementById('button-to-1-floor')
const buttonToFloor2 = document.getElementById('button-to-2-floor')
const buttonToFloor3 = document.getElementById('button-to-3-floor')

let humanIsAtFloor
let currentElevatorFloor = 1
let targetFloor


const humanGoesToElevator = () => {
    human.style.transform = 'translateX(350%)'
    setTimeout(() => {
        human.style.zIndex = '-1'
    }, 250)
}

const humanLeavesElevator = () => {
    setTimeout(() => {
        human.style.zIndex = '1'
        human.style.transform = 'translateX(10%)'
    }, 250)

    human.classList.remove(`human-at-${humanIsAtFloor}-floor`)
    human.classList.add(`human-at-${targetFloor}-floor`)
}

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
    targetFloor = generateTargetFloor(1,2,humanIsAtFloor)

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

humanAppearsAtRandomFloor()

console.log(humanIsAtFloor)



buttonToFloor1.onclick = () => {
    elevatorComesToHuman()

    setTimeout(() => {
        humanGoesToElevator()
        goalFloorDisappear()
    }, 250)

    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add('elevator-at-1-floor')
        currentElevatorFloor = 1
        setTimeout(() => {
            humanLeavesElevator()
        }, 1000)
    }, 1000)



}

buttonToFloor2.onclick = () => {
    elevatorComesToHuman()

    setTimeout(() => {
        humanGoesToElevator()
        goalFloorDisappear()
    }, 250)


    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add('elevator-at-2-floor')
        currentElevatorFloor = 2
        setTimeout(() => {
            humanLeavesElevator()
        }, 1000)
    }, 1000)


}

buttonToFloor3.onclick = () => {
    elevatorComesToHuman()

    setTimeout(() => {
        humanGoesToElevator()
        goalFloorDisappear()
    }, 250)

    setTimeout(() => {
        elevator.classList.remove(`elevator-at-${humanIsAtFloor}-floor`)
        elevator.classList.add('elevator-at-3-floor')
        currentElevatorFloor = 3
        setTimeout(() => {
            humanLeavesElevator()
        }, 1000)
    }, 1000)


}

const goToFloor = () => {
    if (currentElevatorFloor === 1 && targetFloor === 2) {
        elevator.style.transform = 'translateY(-100%)'
    }

    if (currentElevatorFloor === 1 && targetFloor === 3) {
        elevator.style.transform = 'translateY(-200%)'
    }

    if (currentElevatorFloor === 2 && targetFloor === 1) {
        elevator.style.transform = 'translateY(100%)'
    }

    if (currentElevatorFloor === 2 && targetFloor === 3) {
        elevator.style.transform = 'translateY(200%)'
    }

    if (currentElevatorFloor === 3 && targetFloor === 1) {
        elevator.style.transform = 'translateY(200%)'
    }

    if (currentElevatorFloor === 3 && targetFloor === 2) {
        elevator.style.transform = 'translateY(100%)'
    }
}




