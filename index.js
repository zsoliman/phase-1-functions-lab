// Code your solution in this file!
// alert('test')

let hq = 42
const distanceFromHqInBlocks = (location) => {
    if (location > 42) {
        return (location - hq)
    } else {
        return (hq - location)
    }
}

const distanceFromHqInFeet = (location) => {
    if (location > 42) {
        return ((location - hq) * 264)
    } else {
        return ((hq - location) * 264)
    }
}

const distanceTravelledInFeet = (start, destination) => {
    return Math.abs((destination - start) * 264)
}

const calculatesFarePrice = (start, destination) => {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return ((distance - 400) * .02)
    } else if (distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
