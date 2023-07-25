const elevator = document.querySelector('.elevator-cont')
const passenger = document.querySelector('.passenger')
const floorToGo = document.querySelector('.target-floor')
const elevatorLeftDoor = document.querySelector('.elevator-left-door')
const elevatorRightDoor = document.querySelector('.elevator-right-door')

const errorMsgTargetFloor = document.getElementById('target-floor-in-msg')
const errorMsgEl = document.querySelector('.error-msg')

const buttonToFloor1 = document.getElementById('button-to-1-floor')
const buttonToFloor2 = document.getElementById('button-to-2-floor')
const buttonToFloor3 = document.getElementById('button-to-3-floor')
const startGame = document.getElementById('start-game')

const passengers = [
    'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/832e3596d4676c2.png',
    'https://pixelartmaker.com/art/376b599cd1ab101.png',
    'https://www.avatarsinpixels.com/Public/images/pixelavatarslarge.png',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07927925-93f6-4f76-ab05-fe9c53d2303e/d9gef55-58a42c2d-55c8-422c-b484-0e7dbb6e8f33.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3OTI3OTI1LTkzZjYtNGY3Ni1hYjA1LWZlOWM1M2QyMzAzZVwvZDlnZWY1NS01OGE0MmMyZC01NWM4LTQyMmMtYjQ4NC0wZTdkYmI2ZThmMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DblxeXfP_quiFsWNU3LRC0V8d5fuyuxn1UBqN9FR13s',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/20caca84-f792-48df-837f-8e6fbb165fec/dae3j4s-00ee0fc6-0832-4694-82ac-4b0feb29f8fd.png/v1/fill/w_360,h_360/pixel_character_design_2_by_secondsurge_dae3j4s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYwIiwicGF0aCI6IlwvZlwvMjBjYWNhODQtZjc5Mi00OGRmLTgzN2YtOGU2ZmJiMTY1ZmVjXC9kYWUzajRzLTAwZWUwZmM2LTA4MzItNDY5NC04MmFjLTRiMGZlYjI5ZjhmZC5wbmciLCJ3aWR0aCI6Ijw9MzYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yKIfaVdO-Nwd-Ubzd9aoGckEFKQGpZqwnD4TDFjusvw',
]

let passengerIsAtFloor
let currentElevatorFloor = 1
let targetFloor


const generatePassenger = () => {
    const randomIndex = Math.floor(Math.random() * passengers.length);
    passenger.src = passengers[randomIndex]
}

const disableButtons = () => {
    const buttons = document.querySelectorAll('.floor-btn')
    buttons.forEach(button => {
        button.disabled = true
    })
}

const enableButtons = () => {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.disabled = false
    })
}

// ELEVATOR


const targetFloorDisappear = () => {
    floorToGo.style.opacity = '0'
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

    if (passengerIsAtFloor === 1 && randomNum === 1) {
        randomNum = Math.random() * (3 - 2) + 2
    }

    return floorToGo.textContent = randomNum.toString();
}



const elevatorArrives = () => {
    elevator.classList.remove('elevator-at-1-floor')
    elevator.classList.remove('elevator-at-2-floor')
    elevator.classList.remove('elevator-at-3-floor')
    elevator.classList.add(`elevator-at-${passengerIsAtFloor}-floor`)
}

// HUMAN BEHAVIOUR

const passengerGoesToElevator = () => {
    passenger.style.transform = 'translateX(400%)'
    passenger.style.transition = '0.4s ease'

    setTimeout(() => {
        passenger.style.zIndex = '-1'
    }, 600)

    setTimeout(() => {
        passenger.classList.remove(`passenger-at-${passengerIsAtFloor}-floor`)
        passenger.classList.add(`passenger-at-${targetFloor}-floor`)
    }, 800)

}

const passengerLeavesElevator = () => {

    setTimeout(() => {
        passenger.style.zIndex = '1'
    }, 150)

    setTimeout(() => {
        passenger.style.transform = 'translateX(10%)'
        passenger.style.transition = '0.4s ease'
    }, 1000)


    setTimeout(() => {
        passengerLeavesStairway()
    }, 1500)

}

const passengerLeavesStairway = () => {
    passenger.style.transform = 'translateX(-800%)'
}

const clearPassengerAndTargetFloorClasses = () => {
    passenger.classList.remove('passenger-at-1-floor')
    passenger.classList.remove('passenger-at-2-floor')
    passenger.classList.remove('passenger-at-3-floor')

    floorToGo.classList.remove('target-at-1-floor')
    floorToGo.classList.remove('target-at-2-floor')
    floorToGo.classList.remove('target-at-3-floor')

}


const passengerAppearsAtRandomFloor = () => {

    clearPassengerAndTargetFloorClasses()

    passenger.style.transform = ''
    generatePassenger()

    floorToGo.style.opacity = '1'

    const randomNum = Math.floor(Math.random() * 3) + 1

    passenger.classList.add(`passenger-at-${randomNum}-floor`)
    passenger.style.left = '48%'
    passengerIsAtFloor = randomNum

    floorToGo.classList.add(`target-at-${passengerIsAtFloor}-floor`)

    generateTargetFloor(1, 2, passengerIsAtFloor)
    targetFloor = generateTargetFloor(1, 2, passengerIsAtFloor)

    console.log(randomNum)
    console.log(passengerIsAtFloor)
}

startGame.onclick = () => {
    passengerAppearsAtRandomFloor()

    buttonToFloor1.addEventListener('click', event => handleButtonClicks(1, event));
    buttonToFloor2.addEventListener('click', event => handleButtonClicks(2, event));
    buttonToFloor3.addEventListener('click', event => handleButtonClicks(3, event));
}


// BUTTON CLICKS

const handleButtonClicks = (floor, event) => {

    const ButtonId = event.target.dataset.id

    if (targetFloor !== ButtonId) {
        errorMsgTargetFloor.textContent = targetFloor
        return errorMsgEl.style.opacity = '1'

    } else {

        disableButtons()

        errorMsgEl.style.opacity = '0'

        elevatorArrives()
        setTimeout(() => {
            elevatorOpens()
        }, 1000)

        setTimeout(() => {
            passengerGoesToElevator()
            targetFloorDisappear()
        }, 1500)

        setTimeout(() => {
            elevatorCloses()
        }, 2000)

        setTimeout(() => {
            elevator.classList.remove(`elevator-at-${passengerIsAtFloor}-floor`)
            elevator.classList.add(`elevator-at-${floor}-floor`)
            currentElevatorFloor = floor
        }, 3000)

        setTimeout(() => {
            elevatorOpens()
        }, 4000)

        setTimeout(() => {
            passengerLeavesElevator()
        }, 4050)


        setTimeout(() => {
            elevatorCloses()
            floorToGo.style.opacity = '0'
            enableButtons()
        }, 6000)

    }
}









