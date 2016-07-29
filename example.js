var AltConverter = require('altitude-pressure-converter');

var config = {
    temp: 59.9,
    altitude: 1000, // required for altitudeToPressure()
    pressure: 97722,
    pressureAtAltitude: 97716.57, // required for pressureToAltitude()
    units: {
        temp: 'F',
        altitude: 'ft',
        pressure: 'Pa'
    }
};

console.log(AltConverter.altitudeToPressure(config));
// returns 97722.72887817245 Pascals
console.log(AltConverter.pressureToAltitude(config));
// returns about 1000 feet