function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2); 
}

function returnLastTwoDrivers (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multipler){
    return function fareMultiplier(fare) {
        return multipler * fare
    }
}

function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2
}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}