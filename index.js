const hqLocation = 42
function distanceFromHqInBlocks(pickupLocation) {
    if(pickupLocation > hqLocation) {
        return pickupLocation - hqLocation
    } else if(pickupLocation < hqLocation) {
        return hqLocation - pickupLocation
    }
}
const feetInABlock = 264
function distanceFromHqInFeet(pickupLocation) {
    return feetInABlock * distanceFromHqInBlocks(pickupLocation)
}
function distanceTravelledInFeet(startingBlock, endingBlock) {
    if(startingBlock > endingBlock) {
        return (startingBlock - endingBlock) * feetInABlock
    } else if(startingBlock < endingBlock) {
        return (endingBlock - startingBlock) * feetInABlock
    }
}
function calculatesFarePrice(startingBlock, endingBlock) {
    const feetTravelled = distanceTravelledInFeet(startingBlock, endingBlock)
    if(feetTravelled <= 400) {
        return 0
    } else if(feetTravelled > 400 && feetTravelled < 2000) {
        return (feetTravelled - 400) * 0.02
    } else if(feetTravelled >= 2000 && feetTravelled <= 2500) {
        return 25
    } else if (feetTravelled > 2500) {
        return 'cannot travel that far'
    }
}
